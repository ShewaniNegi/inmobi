$(function() {
	var counter = 0;
	var t;
	$(":file").change(
			function() {
				var canvas = document.getElementById('panel');
				counter++;
				if (this.files && this.files[0]) {
					var reader = new FileReader();
					reader.onload = function(e) {
						var canvas = document.getElementById('panel');
						var ctx = canvas.getContext('2d');
						var img = new Image();
						img.onload = function() {
							ctx.drawImage(img, 5, 5, 300, 300);
							
							
						};

						if (canvas.toDataURL() == document.getElementById(
								'blank').toDataURL()) {

							img.src = e.target.result;
							t=img.src;
							
							
							
						
							

						} else {
							localStorage.setItem("img1",t);
							ctx.clearRect(0, 0, 600, 400);

							img.src = e.target.result;
							alert(img.src);
							localStorage.setItem("img2", img.src);
							
						}

						// upload .js changed for new method.

					};

					reader.readAsDataURL(this.files[0]);
					if (counter == 1) {

						$('.proceed').delay(500).show(0);
						$('.image-upload1').delay(500).show(0);

						$('#file-input, .image-upload, .content').delay(100)
								.hide(0);
					}
					if (counter > 1) {
						$('.proceed').delay(500).hide(0);
						$('.image-upload1').delay(500).hide(0);
						$('#startbutton1').delay(500).show(0);

						$('.proceed1').css({
							"text-shadow" : "2px 2px 8px #FF0000",
							"font" : "italic bold 20px/30px Georgia, serif",
							"display" : "block"
						})
						$('#startbutton1').css({
							"border" : "1px solid green",
							"background" : "yellow",
							"align" : "center",
							"font-size" : "24px",
							"font-weight" : "bold",
							"padding" : "15px 50px"

						});
					}

				}
				document.getElementById('startbutton1').addEventListener(
						"click", function() {
							window.location.href = 'StartGame.html';
						});

			});
});
/*
 * var resizeableImage = function(image_target) { var $container, orig_src = new
 * Image(), image_target = $(image_target).get(0), event_state = {}, constrain =
 * false, min_width = 60, min_height = 60, max_width = 800, max_height = 900
 * //resize_canvas = document.createElement('canvas');
 * 
 *  // ... init = function(){
 *  // Create a new image with a copy of the original src // When resizing, we
 * will always use this original copy as the base orig_src.src=image_target.src;
 *  // Add resize handles $(image_target).wrap('<div class="resize-container"></div>')
 * .before('<span class="resize-handle resize-handle-nw"></span>') .before('<span
 * class="resize-handle resize-handle-ne"></span>') .after('<span
 * class="resize-handle resize-handle-se"></span>') .after('<span
 * class="resize-handle resize-handle-sw"></span>');
 *  // Get a variable for the container $container =
 * $(image_target).parent('.resize-container');
 *  // Add events $container.on('mousedown', '.resize-handle', startResize); };
 * 
 * startResize = function(e){ e.preventDefault(); e.stopPropagation();
 * saveEventState(e); $(document).on('mousemove', resizing);
 * $(document).on('mouseup', endResize); };
 * 
 * endResize = function(e){ e.preventDefault(); $(document).off('mouseup
 * touchend', endResize); $(document).off('mousemove touchmove', resizing); };
 * saveEventState = function(e){ // Save the initial event details and container
 * state event_state.container_width = $container.width();
 * event_state.container_height = $container.height();
 * event_state.container_left = $container.offset().left;
 * event_state.container_top = $container.offset().top; event_state.mouse_x =
 * (e.clientX || e.pageX || e.originalEvent.touches[0].clientX) +
 * $(window).scrollLeft(); event_state.mouse_y = (e.clientY || e.pageY ||
 * e.originalEvent.touches[0].clientY) + $(window).scrollTop();
 *  // This is a fix for mobile safari // For some reason it does not allow a
 * direct copy of the touches property if(typeof e.originalEvent.touches !==
 * 'undefined'){ event_state.touches = []; $.each(e.originalEvent.touches,
 * function(i, ob){ event_state.touches[i] = {}; event_state.touches[i].clientX =
 * 0+ob.clientX; event_state.touches[i].clientY = 0+ob.clientY; }); }
 * event_state.evnt = e; }; resizing = function(e){ var
 * mouse={},width,height,left,top,offset=$container.offset(); mouse.x =
 * (e.clientX || e.pageX || e.originalEvent.touches[0].clientX) +
 * $(window).scrollLeft(); mouse.y = (e.clientY || e.pageY ||
 * e.originalEvent.touches[0].clientY) + $(window).scrollTop();
 * 
 * width = mouse.x - event_state.container_left; height = mouse.y -
 * event_state.container_top; left = event_state.container_left; top =
 * event_state.container_top;
 * 
 * if(constrain || e.shiftKey){ height = width / orig_src.width *
 * orig_src.height; }
 * 
 * if(width > min_width && height > min_height && width < max_width && height <
 * max_height){ resizeImage(width, height); // Without this Firefox will not
 * re-calculate the the image dimensions until drag end
 * $container.offset({'left': left, 'top': top}); } }; }
 * 
 */