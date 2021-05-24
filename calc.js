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
    curr = selectedTemperature
    console.log("You have selected the temperature - " + selectedTemperature);
});
$(document).ready(function () {
    $('.convert').click(function () {
        var F = $('#input').val($('#temperatureinput').val())
        F = (F * 9 / 5 + 32)
        return F
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


