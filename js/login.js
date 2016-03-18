"use strict";

$(document).ready(function() {
	$('#loginButton').click(function() {
		let loginName = $('#loginName').val();
		if (loginName == null || loginName == "") {
			alert('Bitte geben Sie einen Login-Namen ein.');
			return false;
		}
		
		$.getJSON('ajax/login.php', { "user": loginName, "password": '1234' },  function(data) {
		});

		$.cookie('loginName', $('#loginName').val());
		window.location.href = 'list.html';
	});
});
