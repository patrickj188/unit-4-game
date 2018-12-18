
    var random = Math.floor(Math.random() * 150)


    $("#your-number").text(random);




    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    function reset() {
        random = Math.floor(Math.random() * 150);
        console.log(random);
        $("#your-number").text("Your Number: " + random);

        var num1 = Math.floor(Math.random() * 11 + 1)
        var num2 = Math.floor(Math.random() * 11 + 1)
        var num3 = Math.floor(Math.random() * 11 + 1)
        var num4 = Math.floor(Math.random() * 11 + 1)

        userTotal = 0;

        $("#score").text(userTotal);

    }

    function winTotal() {
        wins++;
        $("#wins-score").text("Wins: " + wins)
        reset();
    }

    function lossesTotal() {
        losses++;
        $("#losses-score").text("losses: " + losses)
        reset()

    }

    $("#crystal1").on("click", function () {
        userTotal = userTotal + num1;
        console.log("New userTotal = " + userTotal);
        $("#score").text("Total Score: " + userTotal);

        if (userTotal == random) {
            winTotal();
        }
        else if (userTotal > random) {
            lossesTotal();

        }
    })

    $("#crystal2").on("click", function () {
        userTotal = userTotal + num2;
        console.log("New userTotal = " + userTotal);
        $("#score").text("Total Score: " + userTotal);

        if (userTotal == random) {
            winTotal();
        }
        else if (userTotal > random) {
            lossesTotal();

        }
    })

    $("#crystal3").on("click", function () {
        userTotal = userTotal + num3;
        console.log("New userTotal = " + userTotal);
        $("#score").text("Total Score: " + userTotal);

        if (userTotal == random) {
            winTotal();
        }
        else if (userTotal > random) {
            lossesTotal();

        }
    })

    $("#crystal4").on("click", function () {
        userTotal = userTotal + num4;
        console.log("New userTotal = " + userTotal);
        $("#score").text("Total Score: " + userTotal);

        if (userTotal == random) {
            winTotal();
        }
        else if (userTotal > random) {
            lossesTotal();

        }
    })



