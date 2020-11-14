$(window).scroll(function(){$(this).scrollTop()>40?$(".scroll-up").fadeIn():$(".scroll-up").fadeOut()}),$("#year").text((new Date).getFullYear()),function(e){e(document).ready(function(){e(".hamburger__container").click(function(){e(".nav").toggleClass("open"),e(".hamburger").toggleClass("close"),e("html, body").toggleClass("noscroll")}),e(".menu-item").click(function(){e(".nav").removeClass("open"),e(".hamburger").removeClass("close"),e("html, body").removeClass("noscroll")})})}(jQuery);


