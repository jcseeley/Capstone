import React from "react";
import PropTypes from "prop-types";
import PropertyList from "./PropertyList";
import Header from "./Header";
import SedonaControl from "./SedonaControl";

class PropertyControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedProperty: null
    }
  }

  handleClick = () => {
    if (this.state.selectedProperty != null) {
      this.setState({
        selectedProperty: null
      });
    }
  }

  handleChangingSelectedProperty = (propertyName) => {
    this.setState({selectedProperty: propertyName});
  }

  render(){
    let visibleState = null;
    if (this.state.selectedProperty === "Utah") {
      // visibleState = <UtahControl />
    } else if (this.state.selectedProperty === "Sedona") {
      visibleState = <SedonaControl />
    } else {
      visibleState = <PropertyList onPropertySelection={this.handleChangingSelectedProperty} />
    }
    return (
      <React.Fragment>
        <Header onPropertySelection={this.handleChangingSelectedProperty}/>
        {visibleState}
      </React.Fragment>
    )
  }
}

PropertyControl.propTypes = {
  selectedProperty: PropTypes.string
}

export default PropertyControl;

