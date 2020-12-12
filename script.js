var x = 0;


$(document).ready(function() {
    pagination()

    $(".btn-next").click(function() {
        x = x <= 500 ? x + 100 : 0;
        $("figure").css("left", -x + "%");
        pagination()
    });
    $(".btn-prev").click(function() {
        x = x >= 100 ? x - 100 : 600;
        $("figure").css("left", -x + "%");
        pagination()
    });
});
suspend = false;

let a = setInterval(function() {


    if (!suspend) {
        pagination()

        $('figure').css('left', -x + '%')

        console.log(x)
        x += 100
        if (x == 700) {
            x = 0
        }

    }
}, 2000)


$('figure, .rbtn, .btn-prev,.btn-next ').mouseenter(function() {
    console.log("mouse aaya")
    suspend = true;
});
$('figure, .rbtn, .btn-prev,.btn-next ').mouseleave(function() {
    console.log('mouseleave')
    suspend = false;
});


function pagination() {

    if (x == 0) {
        $('#1').css('color', 'red')
        $('#1').siblings().css('color', 'black')

    } else if (x == 100) {
        $('#2').css('color', 'red')
        $('#2').siblings().css('color', 'black')


    } else if (x == 200) {
        $('#3').css('color', 'red')
        $('#3').siblings().css('color', 'black')



    } else if (x == 300) {
        $('#4').css('color', 'red')
        $('#4').siblings().css('color', 'black')



    } else if (x == 400) {
        $('#5').css('color', 'red')
        $('#5').siblings().css('color', 'black')



    } else if (x == 500) {
        $('#6').css('color', 'red')
        $('#6').siblings().css('color', 'black')


    } else if (x == 600) {
        $('#7').css('color', 'red')
        $('#7').siblings().css('color', 'black')


    }




}

$('.rbtn').click(function() {
    let q = this.id;


    console.log(q)
    if (q == 1) {
        $('figure').css('left', '0%')
        $('#1').css('color', 'red')
        $('#1').siblings().css('color', 'black')
        x = 0


    } else if (q == 2) {
        $("figure").css('left', '-100%')
        $('#2').css('color', 'red')
        $('#2').siblings().css('color', 'black')
        x = 100

    } else if (q == 3) {
        $("figure").css('left', '-200%')
        $('#3').css('color', 'red')
        $('#3').siblings().css('color', 'black')
        x = 200

    } else if (q == 4) {
        $("figure").css('left', '-300%')
        $('#4').css('color', 'red')
        $('#4').siblings().css('color', 'black')
        x = 300

    } else if (q == 5) {
        $("figure").css('left', '-400%')
        $('#5').css('color', 'red')
        $('#5').siblings().css('color', 'black')
        x = 400

    } else if (q == 6) {
        $("figure").css('left', '-500%')
        $('#6').css('color', 'red')
        $('#6').siblings().css('color', 'black')
        x = 5

    } else if (q == 7) {
        $("figure").css('left', '-600%')
        $('#7').css('color', 'red')
        $('#7').siblings().css('color', 'black')
        x = 600

    }
})

// this increase the sige of thepagination when the mouse cusrsore is on it
$('.rbtn').hover(function() {
    let temp = this.id

    // over
    $('#' + temp).css({
        'font-size': '2rem',


    })
    $('#' + temp).siblings().css({
        'font-size': '.5rem',


    })


}, function() {
    let temp = this.id
        // out
    $('#' + temp).css('font-size', '1rem')
    $('#' + temp).siblings().css({
        'font-size': '1rem',


    })
});