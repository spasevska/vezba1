$(function (){
    //change clicked element on scroll
    let s = 0;
    $('#slider').on('wheel', function (e) {
        e.preventDefault();
        if (e.originalEvent.wheelDelta < 0) {
            // s++;
            s < 3 ? s++ : null;
            if (s === 1) {
                $('#slide1').click();
            }
            if (s === 2) {
                $('#slide2').click();
            }
            if (s === 3) {
                $('#slide3').click();
            }
        } else {
            // s--;
            s > 1 ? s-- : null;
            if (s === 1) {
                $('#slide1').click();
            }
            if (s === 2) {
                $('#slide2').click();
            }
            if (s === 3) {
                $('#slide3').click();
            }
        }
    })
});