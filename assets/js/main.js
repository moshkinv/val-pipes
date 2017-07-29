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
		      // generate an array of image urls.
		      // this is a helper function that takes a {frame} placeholder
		      source: SpriteSpin.sourceArray('https://res.cloudinary.com/mshkncloud/image/upload/v1/pipe1_{frame}.jpg', {
		        // this ramge of numbers is interpolated into the {frame} placeholder
		        frame: [1,24],
		        // the frame placeholder will be padded with leading '0' up to the number of 'digits'
		        digits: 2
		      }),
					// Specify the display width and height of the frame.
		      // Optionally the size of the container can be defined with CSS.
		      // width: 800,
		      // height: 800,
		      // Sense controls the direction and speed of the animation for mouse/touch interactions.
		      // Here a negative value is chosen to invert the rotation, so the animation 'follows' the drag direction.
		      // Values towards 0 will slow the animation down.
		      sense: 1
				});
			});

			// $('[name="pipeSpinner"]').spritespin({
	    //   // generate an array of image urls.
	    //   // this is a helper function that takes a {frame} placeholder
	    //   source: SpriteSpin.sourceArray('https://res.cloudinary.com/mshkncloud/image/upload/v1/pipe1_{frame}.jpg', {
	    //     // this ramge of numbers is interpolated into the {frame} placeholder
	    //     frame: [1,24],
	    //     // the frame placeholder will be padded with leading '0' up to the number of 'digits'
	    //     digits: 2
	    //   }),
			// 	// Specify the display width and height of the frame.
	    //   // Optionally the size of the container can be defined with CSS.
	    //   // width: 800,
	    //   // height: 800,
	    //   // Sense controls the direction and speed of the animation for mouse/touch interactions.
	    //   // Here a negative value is chosen to invert the rotation, so the animation 'follows' the drag direction.
	    //   // Values towards 0 will slow the animation down.
	    //   sense: 1
			// });
		});
	});
});
