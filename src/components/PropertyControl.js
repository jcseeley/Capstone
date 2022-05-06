import React from "react";
import PropTypes from "prop-types";
import PropertyList from "./PropertyList";

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
      // visibleState = <SedonaControl />
    } else {
      visibleState = <PropertyList onPropertySelection={this.handleChangingSelectedProperty} />
    }
    return (
      <React.Fragment>
        {visibleState}
      </React.Fragment>
    )
  }
}

PropertyControl.propTypes = {
  selectedProperty: PropTypes.string
}

export default PropertyControl;

