peribahasaHTML = document.getElementById("peribahasa");
counterHTML = document.getElementById("counter");
option1HTML = document.getElementById("option1");
option2HTML = document.getElementById("option2");
option3HTML = document.getElementById("option3");
option4HTML = document.getElementById("option4");
optHTMLArr = [option1HTML,option2HTML,option3HTML,option4HTML]
colors = ["#457b9d","#a8dadc","#f1faee","#ffd6e0"]
counter = 0;
correct = 0;
wrongpage = 0;

function randomNum(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function call() {
    // fetch("data.json")
    // .then(response => response.json())
    // .then(jsondata => { 
    //     console.log(jsondata[9].maksud[1]);
    // });
    //console.log(typeof randomNum(0,1));
}

function select(option){
    if (wrongpage == 0){
        if (option == correct) {
            counter++;
            randomise();
        } else {
            wrongpage = 1;
            wrong();
        }
    } else {
        wrongpage = 0;
        counter = 0;
        reset();
        randomise();
    }
}

function wrong() {
    for (var i = 0; i < 4; i++) {
        if (i+1 == correct) {
            optHTMLArr[i].parentElement.style.backgroundColor = "#90cf8e";
        } else {
            optHTMLArr[i].parentElement.style.backgroundColor = "#ee6055";
        }
    }
}

function reset() {
    for (var i = 0; i < 4; i++) {
        optHTMLArr[i].parentElement.style.backgroundColor = colors[i];
    }
}

function get4DiffNum(max) {
    var num = [];
    while (num.length < 4) {
        var newNum = randomNum(0, max);
        if (!num.includes(newNum)) {
            num.push(newNum);
        }
    }
    return num;
}

function randomise() {
    counterHTML.innerHTML= "Correct Combo: " + counter;
    fetch("data.json")
    .then(response => response.json())
    .then(jsondata => { 
        var result = jsondata;
        var options = get4DiffNum(result.length - 1);
        correct = randomNum(1,4);
        //alert(correct);
        peribahasaHTML.innerHTML = result[options[correct-1]].peribahasa;
        for (var i = 0; i < 4; i++) {
            var option = options[i];
            var optionText = result[option];
            //console.log("option" + i + ": " + typeof optionText.maksud)
            //console.log(typeof optionText.maksud == "object")
            if (typeof optionText.maksud == "object") {
                optHTMLArr[i].innerHTML = optionText.maksud[randomNum(0,1)]
            } else{
                optHTMLArr[i].innerHTML = optionText.maksud;
            }
                    //alert("error")
        }
        ///alert(correct);
        // var index = randomNum(0, result.length - 1);
        // var data = result[index];
        // peribahasaHTML.innerHTML = data.peribahasa;
        // if (randomNum(1, 4) == 1) { 
        //     correct = 1;
        //     option1HTML.innerHTML = data.maksud;
        //     alert((typeof data.maksud));
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option2HTML.innerHTML = result[newIndex].maksud;
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option3HTML.innerHTML = result[newIndex].maksud;
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option4HTML.innerHTML = result[newIndex].maksud;
        // }
        // else if (randomNum(1, 4) == 2) {
        //     correct = 2;
        //     option2HTML.innerHTML = data.maksud;
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option1HTML.innerHTML = result[newIndex].maksud;
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option3HTML.innerHTML = result[newIndex].maksud;
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option4HTML.innerHTML = result[newIndex].maksud;
        // }
        // else if (randomNum(1, 4) == 3) {
        //     correct = 3;
        //     option3HTML.innerHTML = data.maksud;
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option2HTML.innerHTML = result[newIndex].maksud;
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option1HTML.innerHTML = result[newIndex].maksud;
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option4HTML.innerHTML = result[newIndex].maksud;
        // }
        // else {
        //     correct = 4;
        //     option4HTML.innerHTML = data.maksud;
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option2HTML.innerHTML = result[newIndex].maksud;
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option3HTML.innerHTML = result[newIndex].maksud;
        //     newIndex = randomNum(0, result.length - 1);
        //     while (newIndex == index) {
        //         newIndex = randomNum(0, result.length - 1);
        //     }
        //     option1HTML.innerHTML = result[newIndex].maksud;
        // }
    });
}
randomise();