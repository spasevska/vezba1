$(function () {

    $('.left').animate({opacity: 1},1000);
    $('.right').delay(200).animate({opacity: 1},1000);

    //list arrays
    let codingList = ['Web Design', 'Mobile & App Design', 'E-Commerce', 'CMS (WordPress & Prestashop)', 'UI • UX Responsive', 'Templating', 'Creative Front-End & Back-End Development'];
    let marketingList = ['Lead Generation', 'Social Media Marketing', 'Search Engine Optimization', 'PPC and paid search management', 'Strategy', 'Display and Advertising Recapture Marketing', 'Conversion Rate Optimisation', 'Growth Hacking', 'Side Project Marketing', 'Email Marketing', 'Content Marketing', 'Digital Event Amplification', 'Digital Marketing Trainings'];
    let brandingList = ['Art & Creative Direction', 'Brand Identity', 'Logo Design', 'Graphic Guidelines', 'Illustration', 'Typography', 'Print', 'Strategy'];

    function listDisplay(listArray) {
        $('#list').html('');
        listArray.forEach(element => {
            $('#list').append(`<li>${element}</li>`)
        });
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    }

    $('#coding').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        listDisplay(codingList);
    });
    $('#marketing').on('click', function () { 
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        listDisplay(marketingList)
    });
    $('#branding').on('click', function () { 
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        listDisplay(brandingList)
    });
    $('#coding').click();

    //change lists on scroll
    let s = 0;
    $('body').on('wheel', function (e) {
        if (e.originalEvent.wheelDelta < 0) {
            s < 3 ? s++ : null;
            if (s === 1) {
                $('#coding').click();
            }
            if (s === 2) {
                $('#marketing').click();
            }
            if (s === 3) {
                $('#branding').click();
            }
        } else {
            s > 1 ? s-- : null;
            if (s === 1) {
                $('#coding').click();
            }
            if (s === 2) {
                $('#marketing').click();
            }
            if (s === 3) {
                $('#branding').click();
            }
        }
    });

    //accordion
    $(".accordion-toggle .accordion-link").click(function () {
        if (!$(this).hasClass("accordion-on active"))
            $(".accordion-toggle .accordion-link").removeClass("accordion-on active");
        $(this).toggleClass("accordion-on");
        $(this)
            .next(".accordion-panel")
            .slideToggle()
            .siblings(".accordion-panel:visible")
            .slideToggle();
    });

})