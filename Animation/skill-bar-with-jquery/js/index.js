jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-final').animate({
			width:jQuery(this).attr('data-percent')
		},2500);
	});
});

/*USING JQUERY */