$(function () {
    // ANIMATION
    AOS.init();

    // navigation
    $(".hide-logo").hide();
    // navigation scroll color
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 40) {
            $("nav").addClass("navbar-color-white");
            $(".hide-logo").show();
            $(".show-logo").hide();
        } else {
            $("nav").removeClass("navbar-color-white");
            $(".hide-logo").hide();
            $(".show-logo").show();
        }
    });

    $(".navbar-header i").hide();
    // mobile button
    $(".navbar-header .span").click(function () {
        $(".navbar-header i").show();
        $(".navbar-header .span").hide();
        $("nav").addClass("mobile-color");
        $(".hide-logo").hide();
        $(".show-logo").show();
        $(".navbar-color-white .navbar-nav>li>a").css({
            color: "white"
        });
    });
    // mobile button
    $(".navbar-header i").click(function () {
        $(".navbar-header i").hide();
        $(".navbar-header .span").show();
        $("nav").removeClass("mobile-color");
        $(".hide-logo").show();
        $(".show-logo").hide();
    });

    // slide images
    let firstImg = document.querySelector("#first");
    let secondImg = document.querySelector("#second");
    let images = [
        "https://www.localised.com/img/bg-home-1en-g-dffb5e429f.jpg",
        "https://www.localised.com/img/bg-home-2fr-g-9686ea33b5.jpg",
        "https://www.localised.com/img/bg-home-3jp-g-969ee82072.jpg",
        "https://www.localised.com/img/bg-home-4de-g-f003213659.jpg"
    ];
    let secondImages = [
        "https://www.localised.com/img/bg2-home-1en-9f4d057d19.png",
        "https://www.localised.com/img/bg2-home-2fr-dbdce2a284.png",
        "https://www.localised.com/img/bg2-home-3jp-160577c279.png",
        "https://www.localised.com/img/bg2-home-4de-69cf1d391c.png"
    ];

    let count = 0;

    function swapImg() {
        firstImg.src = images[count];
        count++;

        if (count >= images.length && count >= secondImages.length) {
            count = 0;
        }
        firstImg.src = images[count];
        secondImg.src = secondImages[count];
    }
    setInterval(swapImg, 3000);

    // scrool img vertical
    $("#up").click(function () {
        $(".inner-img img").animate(
            {
                top: "-=100px"
            },
            "slow"
        );
    });

    $("#down").click(function () {
        $(".inner-img img").animate(
            {
                top: "+=100px"
            },
            "slow"
        );
    });
    

    // TEAM

    // header
    let teamLis = $(".teamLi");
    for (let i = 0; i < teamLis.length; i++) {
        $(teamLis[i])
            .delay(i * 150)
            .animate({ opacity: "1" });
    }

    // collapsed panel

    $(".accordion-toggle .accordion-link").click(function () {
        if (!$(this).hasClass("accordion-on"))
            $(".accordion-toggle .accordion-link").removeClass("accordion-on");
        $(this).toggleClass("accordion-on");
        $(this)
            .next(".accordion-panel")
            .slideToggle()
            .siblings(".accordion-panel:visible")
            .slideToggle();
    });
});
