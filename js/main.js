function positionFooter() {
var mFoo = $("#myfooter"); if ((($(document.body).height() + mFoo.outerHeight()) < $(window).height() && mFoo.css("position") == "fixed") || ($(document.body).height() < $(window).height() && mFoo.css("position") != "fixed")) { mFoo.css({ position: "fixed", bottom: "0px" }); } else { mFoo.css({ position: "static" }); } } $(document).ready(function () { positionFooter(); $(window).scroll(positionFooter); $(window).resize(positionFooter); $(window).load(positionFooter); 
});

