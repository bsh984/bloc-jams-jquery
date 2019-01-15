class Helper{
  playPauseAndUpdate(song) {
    player.playPause(song);

    const durationOfSong = player.currentlyPlaying.duration;
    $('#time-control .total-time').text(player.prettyTime(durationOfSong));
  }
}

const helper = new Helper();
