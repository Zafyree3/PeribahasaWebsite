peribahasaHTML = document.getElementById("peribahasa");
counterHTML = document.getElementById("counter");
option1HTML = document.getElementById("option1");
option2HTML = document.getElementById("option2");
option3HTML = document.getElementById("option3");
option4HTML = document.getElementById("option4");
counter = 0;
correct = 0;

function randomNum(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function call() {
    alert(correct);
}
function select1() {
    if (correct == 1) {
        counter++;
        randomise();
    }
    else {
        counter = 0;
        randomise();
    }
}
function select2() {
    alert(correct)
    if (correct == 2) {
        counter++;
        randomise();
    }
    else {
        counter = 0;
        randomise();
    }
}
function select3() {
    if (correct == 3) {
        counter++;
        randomise();
    }
    else {
        counter = 0;
        randomise();
    }
}
function select4() {
    if (correct == 4) {
        counter++;
        randomise();
    }
    else {
        counter = 0;
        randomise();
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
        var correct = randomNum(1,4);
        alert(correct);
        peribahasaHTML.innerHTML = result[options[correct-1]].peribahasa;
        for (var i = 0; i < 4; i++) {
            var option = options[i];
            var optionText = result[option];
            switch (i+1) {
                case 1:
                    option1HTML.innerHTML = optionText.maksud;
                case 2:
                    option2HTML.innerHTML = optionText.maksud;
                case 3:
                    option3HTML.innerHTML = optionText.maksud;
                case 4:
                    option4HTML.innerHTML = optionText.maksud;
            }
                    //alert("error")
        }
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