// var calcbtn = [0]
// for (var i = 0; i < 10; i++) {
//     $('#calculator').append('<button class="calcnumbers"> ' + i + '</button>')
// }
// var symb = ['+', '-', '*', '/', '=']
// for (var i = 0; i < symb.length; i++) {
//     $('#calculator').prepend('<button class="calcsymb"> ' + symb[i] + '</button>')
// }
// document.getElementsByClassName('.calcbtn').innerHTML.eval('5+5')

var number1 = ''

$(document).ready(function () {
    $(".calcbtn").click(function () {
        var number = $(this).html()
        number1 += number
        console.log(number1)
        $('#input').val(number1)
    })
});

$('#return').click(function () {
    console.log(eval(number1))
    $('#input').val(eval(number1))
})

var curr = ""
$("select#currency").change(function () {
    var selectedCurrency = $(this).children("option:selected").val();
    curr = selectedCurrency
    console.log("You have selected the currency - " + selectedCurrency);
});
var temp = ''
$("select#temperatureselector").change(function () {
    var selectedTemperature = $(this).children("option:selected").val();
    temp = selectedTemperature
    console.log("You have selected the temperature - " + selectedTemperature);
});
$(document).ready(function () {
    $('.convert').click(function () {
        if (temp === "Celsius") {
            var f = $('#temperatureinput').val()
            console.log(f)
            f = (f * 9 / 5 + 32)
            $('#input').val(f)
        } else if (temp === "Fahrenheit") {
            var c = $('#temperatureinput').val()
            c = ((c - 32) * 5 / 9)
            $('#input').val(c)
        }

    })
})

$(document).ready(function () {
    $('#convert').click(function () {
        if (curr === "Euro") {
            var d = $('#currencyinput').val()
            d = Math.abs(d * 3)
            $('#input').val(d)
        } else if (curr === "Dollar") {
            d = $('#currencyinput').val()
            d = (d * 2.6)
            $('#input').val(d)
        }

    })
})


$('#btns').hide()
$('#temperaturconv').hide()
$('#currencyconv').hide()

$("#currency").click(function () {
    $('#btns').hide()
    $('#temperaturconv').hide()
    $('#currencyconv').show(1000)
});
$("#temperature").click(function () {
    $('#btns').hide()
    $('#temperaturconv').show(1000)
    $('#currencyconv').hide()

});
$("#calc").click(function () {
    $('#btns').show(1000)
    $('#temperaturconv').hide()
    $('#currencyconv').hide()

});

$(document).ready(function () {
    $("#clear").click(function () {
        alert('All Clear')
        $('#input').val('')
        number1 = ''

    })
});




