import React from 'react';

class GroupCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).scrollTop(0);
  }

  nextStep() {
    let top = $(".asdfasdf-body").offset().top;
    $(document).scrollTop(top);
  }

  render () {
    return(
      <div className="create">
        <section className="create-header">
          <div className="body">
            <h2>Start a New Meetup</h2>
            <h4>Find your flock</h4>
          </div>
        </section>
        <section className="create-body">
          <div className="location">
            <form>
              <h6>FIRST STEP</h6>
              <li>What's your new groups hometown?</li>
              <input type="text" placeholder="type in city"></input>
            </form>
            <button onClick={this.nextStep.bind(this)}>next</button>
          </div>
          <div className="asdfasdf-body">
            <div className="name">
              <ul>
                <li>SECOND STEP</li>
                <li>Name for your Meetup?</li>
                <input type="text" placeholder="group name"></input>
              </ul>
            </div>
            <div className="descriptions">
              <div>Descriptions</div>
              <textarea />
            </div>
          </div>
          <div className="create-button">
            <button>Submit</button>
          </div>
        </section>
      </div>
    );
  }
}

export default GroupCreate;
