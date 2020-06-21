import React, { Component } from "react";
import PropTypes from "prop-types";
import CreateVideo from "./template/video.js";
import CreateAudio from "./template/audio.js";
import { runVoiceCommond } from "./lib";
import { CSS_CONST } from "./constant/cssConstant.js";
if ("webkitSpeechRecognition" in window) {
  console.log("true");
}
var SpeechRecognition = "webkitSpeechRecognition" in window ? window.webkitSpeechRecognition : window.SpeechRecognition;
var recognize;
var prefix = "",
  targets = ["player", "list"],
  playerData = {},
  tag = "",
  list = [];

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
};

const defaultProps = {
  styles: {
    label: {
      fontFamily: "Comic Sans MS",
      color: "green",
    },
    input: {
      background: "#ddd",
      border: "1px solid red",
    },
  },
};

class VoicePlayer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
    playerData = this.props.value;
    list = this.props.list;
  }
  async componentDidMount() {
    this.init_recognition();
  }
  async componentWillUnmount() {
    this.destror_recognition();
  }
  init_recognition() {
    console.log("start init");
    recognize = null;
    recognize = new SpeechRecognition();
    recognize.continuous = true;
    recognize.interimResults = false;
    recognize.lang = "en-US";
    recognize.start();
    recognize.onresult = (event) => {
      console.log("onresult::");
      this.startVoicePlayer(event);
    };
    recognize.onend = (event) => {
      console.log("onend::", event);
      if (event) this.init_recognition();
    };
    recognize.soundend = (event) => {
      console.log("soundend::", event);
      if (event) this.init_recognition();
    };
    recognize.onerror = (event) => {
      console.log("onerror::", event);
      if (event) this.init_recognition();
    };
  }
  destror_recognition() {
    recognize.abort();
    recognize.stop();
    recognize = null;
    console.log("destroyed");
  }

  startVoicePlayer(event) {
    console.log("startVoicePlayer");
    if (playerData && playerData.attributes && playerData.attributes.id) {
      tag = document.getElementById(playerData.attributes.id);
      console.log(tag);
    }
    this.startGettingResult(tag, targets, event);
  }

  startGettingResult(tag, targets, event) {
    console.log("startGettingResult", event);
    let voice = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      voice = event.results[i][0].transcript.trim().toLowerCase();
      if (targets.includes(voice)) {
        prefix = voice;
      }
      console.log(prefix + " " + voice);
      if (tag) {
        console.log(prefix + " " + voice);
        runVoiceCommond(prefix + " " + voice, tag);
      }
    }
  }
  isValidProps(props) {
    if (!props || !props.targetId || !props.mediaTag || !props.attributes || !props.sourceAttributes) return false;
    return true;
  }
  selectValidComponent(name) {
    let component;
    switch (name) {
      case "video":
        component = <CreateVideo value={playerData} />;
        break;
      case "audio":
        component = <CreateAudio value={playerData} />;
        break;
      default:
        component = <div>NOT FOUND</div>;
    }
    return component;
  }
  onCurrentPlayEnd() {
    
  }

  render() {
    return (
      <div style={CSS_CONST.mainDiv}>
        {this.isValidProps(playerData) ? this.selectValidComponent(playerData.mediaTag) : <div>ERROR</div>}
        <div></div>
      </div>
    );
  }
}

VoicePlayer.propTypes = propTypes;
VoicePlayer.defaultProps = defaultProps;

export default VoicePlayer;
