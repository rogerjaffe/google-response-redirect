$(document).ready(function() {
	console.log('IN');
	setInterval(() => {
		$('.form-control').val(Math.round(Math.random()*1000));
		console.log('SET');
	}, 2000)
});
