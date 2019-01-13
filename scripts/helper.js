class Helper{
  playPauseAndUpdate(song) {
    player.playPause(song);

    totalTime = song.getDuration;
    $('#time-control .total-time').text(totalTime);
  }
}

const helper = new Helper();
