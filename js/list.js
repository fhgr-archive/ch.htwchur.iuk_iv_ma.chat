"use strict";

$(document).ready(function() {
	let loginName = $.cookie('loginName');
	let userTableBody = $('#userTableBody');

	userTableBody.empty();
	$.getJSON('ajax/users.php', { },  function(data) {
		$.each(data, function(key, val) {
			if (loginName != val) {
				let tr = $('<tr>').appendTo(userTableBody);
				let td = $('<td>'+val+'</td>').appendTo(tr);
				tr.data('loginName', val);
			}
		});
    		
	});

	$('#userTable').on('click', 'tr', function() {
		$.cookie('chatName', $(this).data('loginName'));
		window.location.href = 'chat.html';
	});

});
