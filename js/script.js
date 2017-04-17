$(document).ready(function() {
    //Menu selected
    $(".menu>li>a").click(function(){
 
    $(".selected").removeClass("selected");

    $(this).addClass("selected"); 
    });
    
    $(".portfolio_menu>li>a").click(function(){
 
    $(".selected_p").removeClass("selected_p");

    $(this).addClass("selected_p"); 
    });
    
    //gallery
    //All
    
    var photoNumber = 0;
    var photoNumber_bottom = 4;
    var folderRandom;
    var setFolder;
    var photoRandom;
    
    $(".gallery_top>div").hide(0);
    $(".gallery_bottom>div").hide(0);
    while(photoNumber != 5) {
    photoNumber += 1;
    photoNumber_bottom += 1;
    folderRandom = Math.ceil(Math.random() * 4);
    photoRandom = Math.ceil(Math.random() * 8);
    if(folderRandom == 1) {
        setFolder = 'macro';
    }else if(folderRandom == 2) {
        setFolder = 'portraits';
    }else if(folderRandom == 3) {
        setFolder = 'symbolism';
    }else {
        setFolder = 'panoramas';
    }
    $(".gallery_top>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/"+setFolder+"/image"+photoNumber+".jpg')");
    
    folderRandom = Math.ceil(Math.random() * 4);
    photoRandom = Math.ceil(Math.random() * 8);
    if(folderRandom == 1) {
        setFolder = 'macro';
    }else if(folderRandom == 2) {
        setFolder = 'portraits';
    }else if(folderRandom == 3) {
        setFolder = 'symbolism';
    }else {
        setFolder = 'panoramas';
    }
    $(".gallery_bottom>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/"+setFolder+"/image"+photoNumber_bottom+".jpg')");
    }
    $(".gallery_top>div").show(200);
    setTimeout(function(){
        $(".gallery_bottom>div").show(200);
    }, 500);
    photoNumber = 0;
    photoNumber_bottom = 4;
    
    
    $(".portfolio_menu>li>.all").click(function() {
        $(".gallery_top>div").hide(0);
        $(".gallery_bottom>div").hide(0);
        while(photoNumber != 5) {
        photoNumber += 1;
        photoNumber_bottom += 1;
        folderRandom = Math.ceil(Math.random() * 4);
        photoRandom = Math.ceil(Math.random() * 4);
        if(folderRandom == 1) {
            setFolder = 'macro';
        }else if(folderRandom == 2) {
            setFolder = 'portraits';
        }else if(folderRandom == 3) {
            setFolder = 'symbolism';
        }else {
            setFolder = 'panoramas';
        }
        $(".gallery_top>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/"+setFolder+"/image"+photoNumber+".jpg')");
            
        folderRandom = Math.ceil(Math.random() * 4);
        photoRandom = Math.ceil(Math.random() * 8);
        if(folderRandom == 1) {
            setFolder = 'macro';
        }else if(folderRandom == 2) {
            setFolder = 'portraits';
        }else if(folderRandom == 3) {
            setFolder = 'symbolism';
        }else {
            setFolder = 'panoramas';
        }
        $(".gallery_bottom>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/"+setFolder+"/image"+photoNumber_bottom+".jpg')");
        }
        $(".gallery_top>div").show(200);
        setTimeout(function(){
            $(".gallery_bottom>div").show(200);
        }, 500);
        photoNumber = 0;
        photoNumber_bottom = 4;
    });
    
    //others
    
    $(".portfolio_menu>li>.macro").click(function() {
        $(".gallery_top>div").hide(0);
        $(".gallery_bottom>div").hide(0);
        while(photoNumber != 5) {
        photoNumber += 1;
        photoNumber_bottom += 1;
        $(".gallery_top>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/macro/image"+photoNumber+".jpg')");
        $(".gallery_bottom>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/macro/image"+photoNumber_bottom+".jpg')");
        }
        $(".gallery_top>div").show(200);
        setTimeout(function(){
            $(".gallery_bottom>div").show(200);
        }, 500);
        
        photoNumber = 0;
        photoNumber_bottom = 4;
    });
    
    $(".portfolio_menu>li>.portreits").click(function() {
        $(".gallery_top>div").hide(0);
        $(".gallery_bottom>div").hide(0);
        while(photoNumber != 5) {
        photoNumber += 1;
        photoNumber_bottom += 1;
        $(".gallery_top>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/portraits/image"+photoNumber+".jpg')");
        $(".gallery_bottom>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/portraits/image"+photoNumber_bottom+".jpg')");
        }
        $(".gallery_top>div").show(200);
        setTimeout(function(){
            $(".gallery_bottom>div").show(200);
        }, 500);
        
        photoNumber = 0;
        photoNumber_bottom = 4;
    });
    
    $(".portfolio_menu>li>.symbolism").click(function() {
        $(".gallery_top>div").hide(0);
        $(".gallery_bottom>div").hide(0);
        while(photoNumber != 5) {
        photoNumber += 1;
        photoNumber_bottom += 1;
        $(".gallery_top>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/symbolism/image"+photoNumber+".jpg')");
        $(".gallery_bottom>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/symbolism/image"+photoNumber_bottom+".jpg')");
        }
        $(".gallery_top>div").show(200);
        setTimeout(function(){
            $(".gallery_bottom>div").show(200);
        }, 500);
        
        photoNumber = 0;
        photoNumber_bottom = 4;
    });
    
    $(".portfolio_menu>li>.panoramas").click(function() {
        $(".gallery_top>div").hide(0);
        $(".gallery_bottom>div").hide(0);
        while(photoNumber != 5) {
        photoNumber += 1;
        photoNumber_bottom += 1;
        $(".gallery_top>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/panoramas/image"+photoNumber+".jpg')");
        $(".gallery_bottom>div:nth-child("+photoNumber+")").css('background-image', "url('css/images/gallery/panoramas/image"+photoNumber_bottom+".jpg')");
        }
        $(".gallery_top>div").show(200);
        setTimeout(function(){
            $(".gallery_bottom>div").show(200);
        }, 500);
        
        photoNumber = 0;
        photoNumber_bottom = 4;
    });
    
    //Scroll
    $('a[href^="#"]').click(function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
    'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
    window.location.hash = target;
    });
    });

});