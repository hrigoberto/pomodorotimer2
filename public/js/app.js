$(document).ready(function(){
  var $start = $('#start');
  var $breakBtn = $('#break');
  var $minutes = $('#minutes');
  var $seconds = $('#seconds');

  $start.on('click', startCountdown);

  function startCountdown(){
    var countdown = setInterval(function(){
      var secondsVal = +seconds.text();
      var minutesVal = +minutes.text();
        if(secondsVal === 0 && minutesVal === 0){
          $breakBtn.removeClass('disabled');
          $breakBtn.removeAttr('disabled');
        }
        if(secondsVal === 0){
          $minutes.text(minutesVal - 1);
          $seconds.text(59);
        } else{
          if(secondsVal <= 10){
            $seconds.text('0' + (secondsVal-1));
          } else {
            $seconds.text(secondsVal - 1);
          }
        }
    }, 1000);
  }
});
