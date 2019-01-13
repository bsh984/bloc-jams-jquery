class Helper{
  playPauseAndUpdate(song) {
    player.playPause(song);

    totalTime = player.getDuration();
    $('#time-control .total-time').text(totalTime);
  }
}

const helper = new Helper();
