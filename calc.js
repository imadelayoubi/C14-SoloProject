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
var number2 = ''
// // var operator = ''
var total = ''

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
$("select#temperature").change(function () {
    var selectedTemperature = $(this).children("option:selected").val();
    temp = selectedTemperature
    console.log("You have selected the temperature - " + selectedTemperature);
});
$(document).ready(function () {
    $('.convert').click(function () {
        if (temp === "Celsius") {
            var f = $('#temperatureinput').val()
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
            d = (d * 3)
            $('#input').val(d)
        } else if (curr === "Dollar") {
            d = $('#currencyinput').val()
            d = (d * 2.6)
            $('#input').val(d)
        }

    })
})









// $("#converter").click(function () {
//     var temperature = parseInt($("#temperatureinput").text(), 10);
//     if ($("#temperatureinput").hasClass("F")) {
//         var celsius = Math.floor((temperature - 32) * 5 / 9);
//         $("#newTemp").html(celsius);
//         $("#temp").attr("class", "C");
//     })
// }


