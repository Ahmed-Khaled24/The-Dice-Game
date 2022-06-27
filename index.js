function generate_random_int(){
    var random_number = Math.random() * 6 + 1;
    random_number = Math.floor(random_number);
    return random_number;
}

function get_the_winner(player1, player2){
    if(player1 > player2)
        return "player1";
    else 
        return "player2";
}


