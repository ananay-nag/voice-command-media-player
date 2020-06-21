(function () {
  setTimeout(function(){stop()}, 5000);
  if (true) setTimeout(function(){start()}, 6000);
})();
function stop() {
  console.log("stop");
}
function start() {
  console.log("start");
}
