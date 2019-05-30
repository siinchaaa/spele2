
    var dators = math.random();
    var speletajs = null;

    if (computerChoice < .33) {
        computerChoice == "akmens";
    } else if (computerChoice < .66) {
        computerChoice == "ppapirs";
    } else {
        computerChoice == "skeres";   
    };

   function convertUserChoice() {
        $('#akmens').click(function() {
            userChoice == "akmens";
        });
        $('#papirs').click(function() {
            userChoice == "papirs";
        });
        $('#skeres').click(function() {
            userChoice == "skeres";
        });
    };

    if (userChoice == computerChoice) {
        alert ("Tie!");
    } else if (userChoice == "akmens") {
        if (computerChoice == "skeres") {
            alert ("You win!");
        } else {
            alert ("You lose.");
        };
    } else if (userChoice == "papirs") {
        if (computerChoice == "skeres") {
            alert ("You win!");
        } else {
            alert ("You lose.");
        };
    } else if (userChoice == "skeres") {
        if (computerChoice == "papirs") {
            alert ("You win!");
        } else {
            alert ("You lose");
        };
    };
