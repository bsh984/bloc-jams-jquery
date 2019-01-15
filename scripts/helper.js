class Helper{
  playPauseAndUpdate(song) {
    player.playPause(song);

<<<<<<< Updated upstream
    setInterval( () => {
      const duration1 = player.getDuration();

      $('#time-control .total-time').text(duration1);
    });
=======
    const durationOfSong = player.currentlyPlaying.duration;
    $('#time-control .total-time').text(player.prettyTime(durationOfSong));
>>>>>>> Stashed changes
  }

}

const helper = new Helper();
