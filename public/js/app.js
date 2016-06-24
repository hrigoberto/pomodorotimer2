$(document).ready(function(){
  var $start = $('#start');
  var $breakBtn = $('#break');
  var $pause = $('#pause');
  var $minutes = $('#minutes');
  var $seconds = $('#seconds');
  var $ding = document.getElementById('ding');
  var $reset = $('#reset');
  var countdown;


  $start.on('click', startCountdown);
  $breakBtn.on('click', startBreak);
  $pause.on('click', startPause);
  $reset.on('click', resetTimer);

  function resetTimer(){
    clearInterval(countdown);
    $minutes.text('25');
    $seconds.text('00');
    $start.removeClass('disabled');
    $start.removeAttr('disabled', true);
    $pause.addClass('disabled');
    $pause.attr('disabled');
    $reset.addClass('disabled');
    $reset.attr('disabled');
  }

  function startPause(){
    $pause.addClass('disabled');
    $pause.attr('disabled');
    $start.removeClass('disabled');
    $start.removeAttr('disabled', true);
    clearInterval(countdown);
  }

  function startBreak(){
    clearInterval(countdown);
    $minutes.text('00');
    $seconds.text('04');
    $breakBtn.addClass('disabled');
    $breakBtn.attr('disabled', true);
    $start.addClass('disabled');
    $start.attr('disabled', true);
    startCountdown();
  }

  function startCountdown(){
    $pause.removeClass('disabled');
    $pause.removeAttr('disabled');
    $reset.removeClass('disabled');
    $reset.removeAttr('disabled');
    $start.addClass('disabled', true);
    $start.attr('disabled', true);
     countdown = setInterval(function(){
      var secondsVal = +$seconds.text();
      var minutesVal = +$minutes.text();
        if(secondsVal === 0 && minutesVal === 0){
          $breakBtn.removeClass('disabled');
          $breakBtn.removeAttr('disabled');
          $pause.addClass('disabled');
          $pause.attr('disabled');
          $start.removeClass('disabled');
          $start.removeAttr('disabled', true);
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
