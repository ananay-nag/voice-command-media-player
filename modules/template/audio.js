import React from "react";

class CreateAudio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let element = this.props.value;
    element.attributes['onended']="onCurrentPlayEnd()";
    return React.createElement(element.mediaTag, element.attributes, React.createElement("source", element.sourceAttributes, null));
  }
}
export default CreateAudio;
