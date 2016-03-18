"use strict";

$(document).ready(function() {

	let loginName = $.cookie('loginName');
	let chatName = $.cookie('chatName');

	function refresh() {
		let chatsTBody = $('#chatsTBody');
		chatsTBody.empty();
		$.getJSON('ajax/chats.php', { "user1": loginName, "user2": chatName},  function(data) {
			$.each(data, function(key, val) {
				let tr = $('<tr>').appendTo(chatsTBody);
				let td = $('<td>' + val.user1 + ': ' + val.text +'</td>').appendTo(tr);

			});
			
		});
	}

	refresh();

	$('#sendButton').click(function() {
		console.log("clicked");
		let text = $('#sendText').val();
		$.getJSON('ajax/chat.php', { "user1": loginName, "user2": chatName, "text": text},  function(data) {
		});
		$('#sendText').clear();
		refresh();
		return false;
	});


});


