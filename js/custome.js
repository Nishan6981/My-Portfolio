$(document).ready(function(){
    $("html").smoothScroll(1000);

    $('.circlechart').circlechart();  

    $('.post').magnificPopup({
        type:'image'
        
    });    
});


$(document).ready(function(){
        $('.menu').slicknav({
            "prependTo": '.menu',
			"closeOnClick": '.menu',
        });   
});