
var myDataRef = new Firebase('https://udatown.firebaseIO.com');

$('#messageInput').keypress(function(e) {

  // keycode 13 is for return or enter
  if (e.keyCode === 13) {

    var name = $('#nameInput').val();
    var text = $('#messageInput').val();

    myDataRef.push({username: name, message: text});
    
    $('#messageInput').val('');

  }
});


myDataRef.on('child_added', function(snapshot) {
  var message = snapshot.val();
  //debugger;
  displayChatMessage(message.username, message.message);
});

function displayChatMessage(name, text) {
  $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
  $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};

// $('html').on('click', function(){});

// $('html').click(function(){});