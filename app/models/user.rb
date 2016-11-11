# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string
#  profile_img     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  description     :text
#  location        :string
#  name            :string
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 2, allow_nil: true }
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :organized_groups,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: :Group

  has_many :memberships,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: :Membership

  has_many :groups, through: :memberships, source: :group

  has_many :rsvps,
    primary_key: :id,
    foreign_key: :attendee_id,
    class_name: :Rsvp

  has_many :events, through: :rsvps, source: :event

  attr_reader :password

  after_initialize :ensure_session_token

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end
end
