function hide() {
    let type;
    type = document.getElementById('type').value;
    switch (type) {
        case'1':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = true;
            break;
        case'2':
            document.getElementById("radio").hidden = false;
            document.getElementById("checkbox").hidden = true;
            break;
        case'3':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = false;
            break;
    }
}


function proiz() {
    var num1, num2, checkbox, radio, rezult;
    let rate, chec = 0;
    num2 = document.getElementById('n2').value;
    num1 = document.getElementById('type').value;
    checkbox = document.getElementsByName('checkbox');
    radio = document.getElementsByName('radio');

//is NaN
    if (isNaN(num2.value) == false) {
        num2 = parseInt(num2);
    }


    if (!(Number.isInteger(num2)) && !(num2 > 0)) {
        let str = "Ошибка!";
        document.getElementById('out').innerHTML = str;
    } else {
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                rate = radio[i].value;
            }
        }
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                chec += checkbox[i].value;
            }
        }
        switch (num1) {
            case '1':
                rezult = num2 * 100;
                break;
            case '2':
                if (rate == 1) {
                    rezult = num2 * 150 + 5000;
                }
                if (rate == 2) {
                    rezult = num2 * 150;
                }
                break;
            case '3':
                if (chec == 0) {
                    rezult = num2 * 200;
                }
                if (chec == 1) {
                    rezult = num2 * 250;
                }
                if (chec == 2) {
                    rezult = num2 * 300;
                }
                if (chec == 12) {
                    rezult = num2 * 350;
                }
                break;
        }

        console.log("type");
        console.log(num1);
        console.log("count");
        console.log(num2);
        console.log("radio");
        console.log(rate);
        console.log("checkbox");
        console.log(chec);
        console.log("result");
        console.log(rezult);

        document.getElementById('out').innerHTML = rezult;
    }
}

window.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById("type").addEventListener("click", hide);
    document.getElementById("type").addEventListener("click", proiz);
    document.getElementById("n2").addEventListener("keyup", proiz);
    document.getElementById("radio1").addEventListener("change", proiz);
    document.getElementById("radio2").addEventListener("change", proiz);
    document.getElementById("checkbox1").addEventListener("change", proiz);
    document.getElementById("checkbox2").addEventListener("change", proiz);
    document.getElementById("out").addEventListener("change", proiz);
});