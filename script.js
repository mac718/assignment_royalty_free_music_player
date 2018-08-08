$(document).ready(function(){
  $('.song').click(function(e){
    $('.song').not($(this)).removeClass('selected-song');
    $(this).toggleClass('selected-song');
    $("#current-track").text($('.title', this).text());
    $('#artist').text($('.artist', this).text());
    $('footer').toggleClass('song-playing');
    if ($('.fa-pause').is(':visible')){
      $('audio', '.song').each(function(){
        $(this).get(0).currentTime = 0;
        $(this).get(0).pause();
      });
      $('audio', this).get(0).play();
    } else {
      $('audio', this).get(0).pause();
    }
  });

  $('.fa-pause-circle, .fa-play-circle').click(function(){
    $('footer').toggleClass('song-playing');
    let text = $('#current-track').text();
    let $songDiv = $('.song').filter(function(){ return $('.title', this).text() == text });
    let $songAudio = $songDiv.find('audio');//$('.song', 'audio').filter(function(){ return $('.title', this).text() == text });
    $songDiv.toggleClass('selected-song');
    if ($('.fa-pause-circle').is(':visible')){
      $songAudio.get(0).play();
    } else {
      $songAudio.get(0).pause();
    }
  });

  $('.fa-step-backward').click(function(){
    $('.selected-song').prev().addClass('selected-song');
    $('.selected-song').next().removeClass('selected-song');
    $("#current-track").text($('.title', '.selected-song').text());
    $('audio', '.song').each(function(){
      $(this).get(0).currentTime = 0;
      $(this).get(0).pause();
    });
    $('audio', '.selected-song').get(0).play();
  });

  $('.fa-step-forward').click(function(){
    $('.selected-song').next().addClass('selected-song');
    $('.selected-song').prev().removeClass('selected-song');
    $("#current-track").text($('.title', '.selected-song').text());
    $('audio', '.song').each(function(){
      $(this).get(0).currentTime = 0;
      $(this).get(0).pause();
    });
    $('audio', '.selected-song').get(0).play();
  });
});