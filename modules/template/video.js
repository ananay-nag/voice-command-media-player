import React from "react";

class CreateVideo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let element = this.props.value;
    // console.log("in video", element);
    return React.createElement(element.mediaTag, element.attributes, React.createElement("source", element.sourceAttributes, null));
  }
}
export default CreateVideo;
