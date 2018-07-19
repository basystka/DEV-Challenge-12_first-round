$(function() {
	//Tabs
	(function($){
		jQuery.fn.lightTabs = function(options){
			var createTabs = function(){
				tabs = this;
				t = 0;
				showRange = function(i){
					$(tabs).children("form").hide();
					$(tabs).children("form").eq(i).show();
					$(tabs).children("ul").children("li").removeClass("active");
					$(tabs).children("ul").children("li").eq(i).addClass("active");
				}
				showRange(0);
				$(tabs).children("ul").children("li").each(function(index, element){
					$(element).attr("data-range", t);
					t++;
				});
				$(tabs).children("ul").children("li").click(function(){
					showRange(parseInt($(this).attr("data-range")));
					return false;
				});
			};
			return this.each(createTabs);
		};
	})(jQuery);

	//Icons
	(function($){
		jQuery.fn.lightIcons = function(options){
			var createIcons = function(){
				icons = this;
				i = 0;
				showPage = function(i){
					$(icons).children("form").hide();
					$(icons).children("form").eq(i).show();
					$(icons).children("ul").children("li").removeClass("active");
					$(icons).children("ul").children("li").eq(i).addClass("active");
				}
				showPage(1);
				$(icons).children("ul").children("li").each(function(index, element){
					$(element).attr("data-page", i);
					i++;
				});
				$(icons).children("ul").children("li").click(function(){
					showPage(parseInt($(this).attr("data-page")));
					return false;
				});
			};
			return this.each(createIcons);
		};
	})(jQuery);
});
$(document).ready(function(){
	$(".form_info").lightTabs();
	$(".ways_of_help").lightIcons();
});

$(function() {
  $(".pay_left ul li a").click(function(e) {
    e.preventDefault();
    $(".pay_left ul li a").removeClass('active');
    $(this).addClass('active');
  })
});