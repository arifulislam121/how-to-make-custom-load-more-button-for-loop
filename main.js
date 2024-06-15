(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    // client work load more btn
	
  var x, size_li;
  function changeLoadCount(media) {
    if (media.matches) {
      x = 6; // no. of items per click mobile <= 767
      $(".gallery-top").hide();
      $(".gallery-top:lt(" + x + ")").show();
      size_li = $(".gallery-top").size();
      if (x == size_li) {
        $(".portfolio-more-btn-wrapper").hide();
      } else {
        $(".portfolio-more-btn-wrapper").show();
      }
    } else {
      x = 6; // no. of items per click in desktop >= 768
      $(".gallery-top").hide();
      $(".gallery-top:lt(" + x + ")").show();
      size_li = $(".gallery-top").size();
      if (x == size_li) {
        $(".portfolio-more-btn-wrapper").hide();
      } else {
        $(".portfolio-more-btn-wrapper").show();
      }
    }
  }

  var media = window.matchMedia("(max-width: 767px)");
  changeLoadCount(media);
  media.addListener(changeLoadCount);
  window.addEventListener("load resize", function () {
    changeLoadCount(media);
    media.addListener(changeLoadCount);
  });

  function loadMore() {
    $(".gallery-top").hide();
    size_li = $(".gallery-top").size();
    $(".gallery-top:lt(" + x + ")").show();
    $(".portfolio-more-btn").click(function () {
      if (media.matches) {
        x = x + 4 <= size_li ? x + 4 : size_li;
      } else {
        x = x + x <= size_li ? x + x : size_li;
      }
      $(".gallery-top:lt(" + x + ")").show();
      if (x == size_li) {
        $(".portfolio-more-btn-wrapper").hide();
      } else {
        $(".portfolio-more-btn-wrapper").show();
      }
    });
  }
  loadMore();


  });

  
}(jQuery));

                           
