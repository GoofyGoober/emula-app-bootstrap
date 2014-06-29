
function str2num(_mystr) {
  var mystr = _mystr.toUpperCase();
  var conv = [];
  var l = mystr.length;
  for (var i = 0; i < l; i++) {
    conv[i] = mystr[i].charCodeAt();
  }
  return conv;
}

function str2binary(mystr) {
  var unicode = str2num(mystr);
  for (var i = 0; i < unicode.length; i++) {
    unicode[i] = unicode[i].toString(2);
  }
  return unicode;
} 

function binaryToStr(bin) {
  return parseInt(bin, 2);
}

function each_letter_in_binary(index, data) {
  var datasplit = data.split("");
  $(datasplit).each(function(index,data2){
    if (data2=="0") {
      
      $('#output-quadrati').append("<div class='quadrato bianco'></div>")
    } else {
      
      $('#output-quadrati').append("<div class='quadrato nero'></div>")
    }
    if (index == datasplit.length-1){
      $('#output-quadrati').append("<hr style='clear:both; border:none'></hr>")
    }
  })
}

function print_message_in_binary (_text) {
  var unicode = str2num(_text);
  var array_binary = str2binary(_text);
  $('#output-quadrati').text("")
  $(array_binary).each(each_letter_in_binary);
}

function alert_no_message(){
  alert("Inserisci un messaggio")
  $('#text-input-message').focus();
  $('#output').fadeOut();
}

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'audio/asino-verso.mp3');

function play_sound(){audioElement.play()}

function send_btn_clicked(e){
  e.preventDefault();
  
  var testo = $('#text-input-message').val();
  if ($('#text-input-sender').val().length == 0){
    alert("Imposta il mittente")
    $('#text-input-sender').focus()
    return false
  }
  if ($('#text-input-receiver').val().length == 0){
    alert("Imposta il destinatario")
    $('#text-input-receiver').focus()
    return false
  }

  if (testo.length > 0){
    play_sound()
    print_message_in_binary(testo)
  } else {
    alert_no_message()
  }
}

$(document).ready(function(){
  $('#output').hide();
  var send_btn = document.getElementById('send-btn')
  //send_btn.addEventListener("touchend",send_btn_clicked);
  $('#send-btn').click(send_btn_clicked); 
});
