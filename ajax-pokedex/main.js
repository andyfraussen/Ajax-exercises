var fetch = $('#getpokemon');
var abilities = $("#abilities");

fetch.click(function () {
    var pokemon = ($('input').val()).toLowerCase();
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/' + pokemon + '/',
        error: function (error) {
            alert("error!");
        },
        success: function (data) {
            name = data.name
            name = name.charAt(0).toUpperCase() + name.slice(1);
            $("#pokenaam").html(name);
            $("#pokeID").html("ID: " + data.id);
            moves(data);
            $('#picture').attr("src", `${data.sprites.front_default}`);
            preevolutie(data);
        },
        type: 'GET'
    })
});

function moves(data) {
    ;
    abilities.html("");
    var move;
    var x;
    if (data.moves.length > 4) {
        x = 4;
    } else {
        x = data.moves.length;
    }
    for (var i = 0; i < x; i++) {
        rand = Math.floor((Math.random() * data.moves.length));
        move = data.moves[rand].move.name;
        move = move.charAt(0).toUpperCase() + move.slice(1);
        if (i % 2 == 0) {
            abilities.append("<span class='left'> " + (i + 1) + ". " + move + "</span>");
        } else {
            abilities.append("<span class='right'> " + (i + 1) + ". " + move + "</span><br>");
        }
        data.moves.splice(rand, 1);
    }
}

function preevolutie(evodata) {

    console.log(evodata.species.url);
    $.ajax({
        url: evodata.species.url,
        error: function (error) {
            alert("error!");
        },
        success: function (data) {
            if (data.evolves_from_species != null) {
                name = data.evolves_from_species.name;
                name = name.charAt(0).toUpperCase() + name.slice(1);
                $("#previousEvo").html('Previous Evolution: ' + name);
                console.log(evodata.sprites.front_default);
                $('#YellowBox1').attr("src", `${evodata.sprites.front_default}`);
            } else{
                $("#previousEvo").html("No previous evolution");
            }
        },
        type: 'GET'
    })};