var photos = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

function generate_random_int(){
    var random_number = Math.random() * 6 + 1;
    random_number = Math.floor(random_number);
    return random_number;
}

function get_the_winner(player1_dice, player2_dice){
    if(player1_dice > player2_dice)
        return "player 1";
    else 
        return "player 2";
}

function change_players_dice(player1_dice, player2_dice){
    var player1_photo = photos[player1_dice-1];
    var player2_photo = photos[player2_dice-1];
    document.getElementById("player1").setAttribute("src", "images/"+player1_photo);
    document.getElementById("player2").setAttribute("src", "images/"+player2_photo);
}

