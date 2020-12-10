var x = 0;


$(document).ready(function() {

    $(".btn-next").click(function() {
        x = x <= 500 ? x + 100 : 0;
        $("figure").css("left", -x + "%");
        console.log(x);
    });
    $(".btn-prev").click(function() {
        x = x >= 100 ? x - 100 : 600;
        $("figure").css("left", -x + "%");
    });
});
suspend = false;

let a = setInterval(function() {
    if (!suspend) {

        $('figure').css('left', -x + '%')
        pagination()
        console.log(x)
        x += 100
        if (x == 600) {
            x = 0
        }

    }
}, 2000)


$('figure').mouseenter(function() {
    console.log("mouse aaya")
    suspend = true;
});
$('figure').mouseleave(function() {
    console.log('mouseleave')
    suspend = false;
});


function pagination() {
    if (x == 0) {

        $('#1').attr('checked', true)

    } else if (x == 100) {
        $('#2').attr('checked', true)

    } else if (x == 200) {
        $('#3').attr('checked', true)


    } else if (x == 300) {
        $('#4').attr('checked', true)


    } else if (x == 400) {
        $('#5').attr('checked', true)


    } else if (x == 500) {
        $('#6').attr('checked', true)

    }




}