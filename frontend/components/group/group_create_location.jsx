import React from 'react';
import Autocomplete from 'react-google-autocomplete';

class GroupCreateLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: ""
    };
  }

  process(place){
    this.checkErrors(place);
  }

  checkErrors(place) {
    if (place.formatted_address.split(', ')[2] !== "USA") {
      this.setState({
        errors: "Invalid city, state. Location must be within USA"});
    } else {
      this.setState({
        errors: ""
      }, this.formatAddress(place));

    }
  }

  formatAddress(place) {
    if (!this.state.errors) {
      if (place.formatted_address) {
        let address = place.formatted_address;
        let city = address.split(', ')[0];
        let state = address.split(', ')[1].split(" ")[0];
        this.props.updateLocation(city, state);
      }
    }
  }

  displayErrors() {
    if (this.state.errors) {
      return <h6 className="error">{this.state.errors}</h6>;
    } else {
      return <h6></h6>;
    }
  }

  clearField() {
    this.autocomplete.value = '';
  }

  render () {
    return (
      <div className="location">
        <div className="content">
          <h6>FIRST STEP</h6>
          <h2><i className="fa fa-globe fa-1x" aria-hidden="true"></i>&nbsp;What's your new groups hometown?</h2>
          <Autocomplete
              ref={autocomplete => {this.autocomplete = autocomplete; }}
              onClick={()=>this.clearField()}
              onPlaceSelected={(place) => {
                this.process(place);
              }}
              types={['(regions)']}/>
          {this.displayErrors()}
          <button onClick={this.props.nextStep}>next</button>
        </div>
      </div>
    );
  }
}

export default GroupCreateLocation;
