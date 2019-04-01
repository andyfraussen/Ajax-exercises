$.ajax({
    type: 'GET',
    url: 'https://thatsthespir.it/api',
    data: 'data',
    dataType: 'json',
    success: function (data) {
        console.log(data.quote);
        $('#divResultAjax').html(data.quote +'<br>' +data.author)
    }
});

$.getJSON('https://thatsthespir.it/api', function (data) {
    console.log(data.quote)});



var xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
    if (this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("divResult").innerHTML = myObj.quote;
    }
};
xmlhttp.open("GET", "https://thatsthespir.it/api", true);
xmlhttp.send();