const videoIDs = [
    { 'videoId': "szlUhdj6YzQ",'startSeconds': 30, 'endSeconds':36},
    { 'videoId': "VVHbPcegtao", 'startSeconds': 50, 'endSeconds': 55 },

];

let player;
let currentVideoId = 0;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "350",
    width: "525",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.loadVideoById(videoIDs[currentVideoId]);
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    currentVideoId++;
    if (currentVideoId < videoIDs.length) {
      player.loadVideoById(videoIDs[currentVideoId]);
    }
  }
}