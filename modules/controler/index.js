export class RemoteControl {
    constructor(element) {
      this.Element = element;
    }
  
    play() {
      this.Element.play();
    }
  
    stop() {
      this.Element.pause();
      this.Element.currentTime = 0;
    }
  
    pause() {
      this.Element.pause();
    }
    forward() {
      this.Element.currentTime += 5;
    }
  
    mute() {
      this.Element.muted = true;
    }
  
    unmute() {
      this.Element.muted = false;
    }
    volumeUP() {
      this.Element.volume < 1 ? (this.Element.volume += 0.1) : null;
      console.log(this.Element.volume);
    }
    volumeDOWN() {
      this.Element.volume > 0 ? (this.Element.volume -= 0.1) : null;
      console.log(this.Element.volume);
    }
    volumeSet(vol) {
      this.Element.volume = vol / 10;
      console.log(this.Element.volume);
    }
    rewind() {
      this.Element.currentTime = 0;
      this.Element.play();
    }
  }
  