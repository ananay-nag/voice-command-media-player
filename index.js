import React from "react";
import ReactDOM from "react-dom";
import VoicePlayer from "./modules/index.js";
let video = {
  targetId: "my-video",
  mediaTag: "video",
  attributes: {
    className: "width-400",
    id: "voice-video",
    controls: true,
    preload: "none",
    muted: "Mute",
    poster: "https://media.w3.org/2010/05/sintel/poster.png",
  },
  sourceAttributes: {
    id: "mp4",
    src: "./assets/videos/A1 (1).mp4",
    type: "video/mp4",
  },
};
let audio = {
  targetId: "my-audio",
  mediaTag: "audio",
  attributes: {
    className: "width-400",
    id: "voice-audio",
    controls: true,
    preload: "none",
    muted: "Mute",
  },
  sourceAttributes: {
    id: "mp3",
    src: "./assets/audio/A_(1).mp3",
    type: "audio/mp3",
  },
};
let list = {
  listFor: "audio",
  list: [
    {
      id: "",
      poster: "",
      url: "./assets/audio/A_(1).mp3",
      type: "audio/mp3",
    },
    {
      id: "",
      poster: "",
      url: "/assets/audio/A_(2).mp3",
      type: "audio/mp3",
    },
    {
      id: "",
      poster: "",
      url: "/assets/audio/A_(3).mp3",
      type: "audio/mp3",
    },
    {
      id: "",
      poster: "",
      url: "/assets/audio/A_(4).mp3",
      type: "audio/mp3",
    },
  ],
};
ReactDOM.render(<VoicePlayer label={JSON.stringify(video)} value={video} list={list}/>, document.getElementById("app"));
