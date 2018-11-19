jQuery(document).ready(function($){
	$(".scrool").click(function(event){
			// Scrool Smooth
			event.preventDefault();
			$('html,body,content,container').animate({scrollTop:$(this.hash).offset().top}, 500);
		});
});
