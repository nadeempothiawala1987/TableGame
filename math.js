let n1 = Math.round((Math.random() * 9) + 1)
let n2 = Math.round((Math.random() * 9) + 1)

document.querySelector('.number1').innerHTML = n1
document.querySelector('.number2').innerHTML = n2

document.querySelector('.next').disabled = true;

function submit() {

    n1 = document.querySelector('.number1').innerHTML
    n2 = document.querySelector('.number2').innerHTML

    let total = n1 * n2
    let inputvalue = document.querySelector('.answer').value

    if (inputvalue == "") {
        document.querySelector('.enternumber').textContent = "Please Enter the Number";
    }

    else if (inputvalue == total) {
        document.querySelector('.enternumber').textContent = ""
        document.querySelector('.correctanswer').textContent = "Right Answer"
        document.querySelector('.answer').disabled = true;
        document.querySelector('.next').disabled = false;
        let a = document.querySelector('.ans1').textContent;
        let b = Number(a) + 1;
        document.querySelector('.ans1').textContent = b ;
        document.querySelector('.happymood').src ="https://i.pinimg.com/originals/f5/43/51/f5435117760e979de23a673fb94e96e3.gif"
       

    }
    else {
        document.querySelector('.enternumber').textContent = ""
        document.querySelector('.incorrectanswer').textContent = "Wrong answer"
        document.querySelector('.answer').disabled = true;
        document.querySelector('.next').disabled = false;
        let a = document.querySelector('.ans2').textContent;
        let b = Number(a) + 1;
        document.querySelector('.ans2').textContent = b ;
        document.querySelector('.angrymood').src = "https://i.pinimg.com/originals/a8/50/6a/a8506a9c8d06fd0a01bb41efd4a04ccd.gif"
        document.body.style.background = "red"



    }
}


function next() {

    let n1 = Math.round((Math.random() * 9) + 1)
    let n2 = Math.round((Math.random() * 9) + 1)

    document.querySelector('.number1').innerHTML = n1
    document.querySelector('.number2').innerHTML = n2
    document.querySelector('.answer').value = ''
    document.querySelector('.incorrectanswer').textContent = ''
    document.querySelector('.correctanswer').textContent = ''
    document.querySelector('.answer').disabled = false;
    document.querySelector('.next').disabled = true;
    document.querySelector('.happymood').src = ""
    document.querySelector('.angrymood').src = ""
    document.body.style.background = "blue"
}


