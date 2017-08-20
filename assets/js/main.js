require.config({
	baseUrl: '/assets/',

	paths: {
		'jquery': 'vendor/jquery/dist/jquery.min',
		'spritespin': 'vendor/spritespin/release/spritespin',
	},
})

require(['jquery'], function ($) {
	require(['spritespin'], function (spritespin) {
		$(document).ready(function () {
			console.log('requirejs ready to use')
			console.log('len: ' + $('[name="pipeSpinner"]').length)

			$('[name="pipeSpinner"]').each(function() {
				$(this).spritespin({
		      source: SpriteSpin.sourceArray('https://res.cloudinary.com/mshkncloud/image/upload/v1/pipe1_{frame}.jpg', {
		        frame: [1,24],
		        digits: 2
		      }),
		      width: 800,
		      height: 800,
		      sense: 0.5,
					senseLane: 0.5,
					frameTime: 80,
					loop: true
				});
			});
		});
	});
});
