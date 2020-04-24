$(function() {


        let index2 = 0;
        let slider = $(".slider-content");
    
        setInterval(() => {
            index2++;
            if (index2 > slider.length - 1) {
                index2 = 0;
            }
            slider.each(function (index, element) {
                $(element).css({
                    "opacity": "0"
                });
                $(element).removeClass("animate");
            });
            slider.eq(index2).css({
                "opacity": "1"
            });
            slider.eq(index2).addClass('animate');
    
    
            $(".img-content>div").each(function () {
                $(this).addClass("d-none").removeClass("d-block");
                $(this).css("opacity", "0");
            });
            $(".img-content>div").eq(index2).removeClass("d-none").addClass("d-block");
            $(".img-content>div").eq(index2).css("opacity", "1");
    
            $(".dots li").each(function () {
                $(this).removeClass("active-dot");
            });
            $(".dots li").eq(index2).addClass("active-dot");
    
            $(".dots h3").each(function () {
                $(this).addClass("d-none").removeClass("d-block");
                $(this).css("opacity", "0");
            });
            $(".dots h3").eq(index2).removeClass("d-none").addClass("d-block");
            $(".dots h3").eq(index2).css("opacity", "1");
        }, 4000);
    
    
        $(document).on("click", ".openmenu", function () {
            $(".menu").removeClass("openmenu").addClass("closemenu");
            $(".head-right").addClass("activeside");
            $("header").addClass("fixed-header");
            $("section").css("top", "147px");
            $(".main").css("top", "147px");
            $("footer").css("bottom", "-147px");
            $("#footer").css("bottom", "0");
            $(".aside-nav").addClass("show-me");
            $(".menu span").removeClass("remove1 remove2 remove3").addClass("active1 active2");
            $(".menu").css("transform", "rotate(45deg)");
    
        })
    
        $(document).on("click", ".closemenu", function () {
            $(".menu").removeClass("closemenu").addClass("openmenu")
            $(".aside-nav").removeClass("show-me");
            $(".head-right").removeClass("activeside");
            $("header").removeClass("fixed-header");
            $("section").css("top", "0");
            $(".main").css("top", "0");
            $("footer").css("bottom", "0");
            $(".menu span").removeClass("active3 ").addClass("remove1 remove2 remove3");
            $(".menu span").removeClass("active2 active1");
            $(".menu").css("transform", "rotate(0deg)");
        })
    
        $(window).scroll(function () {
            if ($(window).scrollTop() > 147) {
                $(".small-nav").addClass("fixed-nav")
            }
            else {
                $(".small-nav").removeClass("fixed-nav")
            }
        });
    
        $(document).on("click", ".openmap", function () {
            $(".mapmarker").removeClass("openmap").addClass("closemap");
            $(".branche-menu>div:last-child").css("display", "block");
        });
    
        $(document).on("click", ".closemap", function () {
            $(".mapmarker").removeClass("closemap").addClass("openmap");
            $(".branche-menu>div:last-child").css("display", "none")
        })
    
        $(document).on("click", ".show-accord", function () {
            $(".accord").removeClass("show-accord").addClass("hide-accord");
            $(".accord-content").animate({
                height: "show"
            }, 500, function () {
                $(".accord i").css("transform", "rotate(0deg)");
                $(".accord-content").css("display", "block");            
            });        
        })
    
        $(document).on("click", ".hide-accord", function () {
            $(".accord").removeClass("hide-accord").addClass("show-accord");        
            $(".accord-content").animate({
                height: "hide",
            }, 500, function () {
                $(".accord i").css("transform", "rotate(-90deg)");
                $(".accord-content").css("display", "none");
            });
        })
    


$("#phone").mask("+994 XX XXX XX XX" ,{placeholder :"+994 __ ___ __ __"})

});

$(document).on("keyup" , "#price" , function(e){
 let max = 3 ; 
 let price = $("#price").val();
    if (price.length == max) {
        if(parseInt(price)>500){
            price=500; 
        }
       
    } else if (price.length > max) {
        
        price =  $("#price").val().substring(0, max);
        price=500; 
      
    }
    $(".sum").css({
        "background-color" : "#159ee3",
        "color" : "white"
    });
   
    $(".sum p").text(price + "AZN");
   

    if(!$("#price").val()){
        $(".sum").css({
            "background-color" : "transparent",
            "color" : "#7c7c7c"
        });

        $(".sum p").text("0 AZN");
    }
})