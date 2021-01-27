$(document).ready(function () {

	function layer_list() {
		$('li.layer-item').on('click', function () {
			if($(this).closest('li.layer-item').next().hasClass('active')){
				$('li.layer-item').removeClass('active');
				$('.customize-map-theme').removeClass('active');
			}
			else{
				$('li.layer-item').removeClass('active');
				$('.customize-map-theme').removeClass('active');
			}
			$(this).closest('li.layer-item').addClass('active');
			$('.customize-map-theme').addClass('active');
			}); 
		}
	layer_list();


	function close_theme(){
		$('.customize-map-theme').on('click', '.close-theme', function(){
			$(this).removeClass('active');
		})
	}
	close_theme();

	function toggle_sidebar(){
		$('.slide-sidebar').on('click', function(){
			$(this).toggleClass('active');
			$('.map-aside').toggleClass('active');
			$('.map-content-wrap').toggleClass('active');
		})
	}
	toggle_sidebar();

	function toggle_sidebar1() {
		$('.close-sidebar').on('click', function(){
			$('.map-aside').addClass('active');
			$('.map-content-wrap').addClass('active');
			$('.expand-sidebar').addClass('active');
		})
		$('.expand-sidebar').on('click', function(){
			$(this).removeClass('active');
			$('.map-aside').removeClass('active');
			$('.map-content-wrap').removeClass('active');
		})
	}
	toggle_sidebar1();

	function select_options(){
		$('.select-style').on('click', function(){
			$(this).toggleClass('active');
			$('.style-options').toggleClass('active');
		})
	}
	select_options();
})(window.jQuery);

