class Helper{
  playPauseAndUpdate(song) {
    player.playPause(song);

    setInterval( () => {
      const duration1 = player.getDuration();

      $('#time-control .total-time').text(duration1);
    });
  }
}

const helper = new Helper();
