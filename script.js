// var togle = false;


// let counter1 = 6;
// let counter2 = 2;
// var b;

// function janeka() {
//     console.log(counter1)

//     $('#' + counter1).fadeOut('Slow');
//     counter1--
//     console.log(counter1)

// }

// function aaneka() {
//     console.log(counter2)

//     $('#' + counter2).fadeIn('Slow');
//     counter2++;

// }

// function toggle() {
//     var a = setInterval(janeka, 6000);
//     setTimeout(function() {
//         clearInterval(a),
//             counter1 = 6
//         b = setInterval(aaneka, 6000);

//     }, 32000);

//     setTimeout(function() {
//         clearInterval(b)
//         counter2 = 1
//     }, 68000)

// }
// toggle()
// let asd = setInterval(toggle, 60000)

// $('.next').click(function() {

//     let current = (counter1)
//     console.log(current)
//     $('#' + current).fadeOut()
//     console.log('aaya hai')


// });
var x = 0;
var q = setInterval(pagination, 2000)

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
        $('#1').siblings().attr('checked', false)




    } else if (x == 100) {
        $('#2').attr('checked', true)
        $('#2').siblings().attr('checked', false)

    } else if (x == 200) {
        $('#3').attr('checked', true)
        $('#3').siblings().attr('checked', false)

    } else if (x == 300) {
        $('#4').attr('checked', true)
        $('#4').siblings().attr('checked', false)

    } else if (x == 400) {
        $('#5').attr('checked', true)
        $('#5').siblings().attr('checked', false)

    } else if (x == 500) {
        $('#6').attr('checked', true)
        $('#6').siblings().attr('checked', false)
    }




}