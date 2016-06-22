$(document).ready(function(){
  var $start = $('#start');
  var $breakBtn = $('#break');
  var $pause = $('#pause');
  var $minutes = $('#minutes');
  var $seconds = $('#seconds');
  var $ding = document.getElementById('ding');
  var countdown;

  $start.on('click', startCountdown);
  $breakBtn.on('click', startBreak);
  $pause.on('click', startPause);

  function startPause(){
    $pause.addClass('disabled');
    $pause.attr('disabled');
    $start.removeClass('disabled');
    $start.removeAttr('disabled');
    clearInterval(countdown);
  }

  function startBreak(){
    clearInterval(countdown);
    $minutes.text('05');
    $seconds.text('00');
    $breakBtn.addClass('disabled');
    $breakBtn.attr('disabled');
    $start.addClass('disabled');
    $start.attr('disabled');
    startCountdown();
  }

  function startCountdown(){
    $pause.removeClass('disabled');
    $pause.removeAttr('disabled');
    $start.addClass('disabled');
     countdown = setInterval(function(){
      var secondsVal = +$seconds.text();
      var minutesVal = +$minutes.text();
        if(secondsVal === 0 && minutesVal === 0){
          $breakBtn.removeClass('disabled');
          $breakBtn.removeAttr('disabled');
          $pause.addClass('disabled');
          $pause.attr('disabled');
          $ding.play();
          clearInterval(countdown);
          return;
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
