import { RemoteControl } from "../controler/index.js";
export function runVoiceCommond(commond, tag) {
  var remoteControl = new RemoteControl(tag);

  switch (commond) {
    case "player play":
      remoteControl.play();
      break;
    case "player stop":
      remoteControl.stop();
      break;
    case "player pause":
      remoteControl.pause();
      break;
    case "player mute":
      remoteControl.mute();
      break;
    case "player unmute":
    case "player Unmute":
      remoteControl.unmute();
      break;
    case "player forward":
      remoteControl.forward();
      break;
    case "player rewind":
      remoteControl.rewind();
      break;
    case "player play next":
      remoteControl.play();
  }
  if (commond.trim().startsWith("player volume")) {
    changeVolume(commond.trim(), remoteControl);
  }
}
function changeVolume(volume, remoteControl) {
  let s = volume.split(" ");
  s = s[s.length - 1];
  if (s.toLowerCase() === "up") remoteControl.volumeUP();
  if (s.toLowerCase() === "down") remoteControl.volumeDOWN();
  if (parseInt(s) >= 1 && parseInt(s) <= 10) remoteControl.volumeSet(parseInt(s));
}
