  ## Component Hierarchy


  **AuthFormContainer**
    - SessionForm

  **HomeContainer**
    - Header
    - AuthForm
    - groupItems
    - Footer

  **GroupsContainer**
    - Header
    - navBar
      - searchBox
    - groupScroller
    - Footer

  **GroupContainer**
    - Header
    - groupCover
    - groupNavBar
    - groupNavItem
    * groupContainer
      - organizerInfo
      - groupInfo
    * groupMemberContainer
      - groupDescription
      - groupMembers
      * reviewContainer
        - reviews
    * groupCalendarContainer
      - calendar
    - Footer

  **GroupMemberContainer**
    - groupDescription
    - groupMembers

  **GroupCalendarContainer**
    - Header
    - groupNav
    - groupSidebar
    - calendar
    - recentlyJoinedMembers
    - Footer

  **ProfileContainer**
    - Header
    - ProfileContent
    - ProfileImg
    - Footer

  **Footer**
    - FooterItems

  **Routes**

  |Path   | Component   |
  |-------|-------------|
  | "/"  | "HomeContainer" |
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/home/" | "HomeContainer" |
  | "/home/profile" | "ProfileContainer" |
  | "/groups/" | "GroupsContainer" |
  | "/groups/:groupId/" | "GroupContainer" |
  | "/groups/:groupId/events/" | "EventsContainer" |
  | "/groups/:groupId/events/:eventId/" | "EventContainer" |
