const rFim = [
    "16 anos",
    "vovô gohan",
    "50 anos",
    "oolong",
    "kuririn",
    "jackie chun",
    "rr",
    "juventude",
    "goku e piccolo jr",
    "5 Anos"
];

var q1 = false;
var q2 = false;
var q3 = false;
var q4 = false;
var q5 = false;
var q6 = false;
var q7 = false;
var q8 = false;
var q9 = false;
var q10 = false;


var indexLn8 = 1;
function criaInputs() {

    // 1° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn1 = 1; indexLn1 <= 19; indexLn1++) {
        if (indexLn1 == 19) {
            box_Cruz.innerHTML += `<div class="block_white" id="l1Block${indexLn1}"></div>`;
        }
        else {
            box_Cruz.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 2° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn2 = 1; indexLn2 <= 19; indexLn2++) {
        if (indexLn2 == 5) {
            box_Cruz2.innerHTML += `<div class="block_white" id="l2Block${indexLn2}"><small>8</small></div>`;
        } else {
            box_Cruz2.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 3° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn3 = 1; indexLn3 <= 19; indexLn3++) {
        if (indexLn3 == 5) {
            box_Cruz3.innerHTML += `<div class="block_white" id="l3Block${indexLn3}"></div>`;
        } else {
            box_Cruz3.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 4° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn4 = 1; indexLn4 <= 19; indexLn4++) {
        if (indexLn4 == 5) {
            box_Cruz4.innerHTML += `<div class="block_white" id="l4Block${indexLn4}"></div>`;
        } else {
            box_Cruz4.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 5° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn5 = 1; indexLn5 <= 19; indexLn5++) {
        if (indexLn5 == 5) {
            box_Cruz5.innerHTML += `<div class="block_white" id="l5Block${indexLn5}"></div>`;
        } else {
            box_Cruz5.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 6° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn6 = 1; indexLn6 <= 19; indexLn6++) {
        if (indexLn6 == 5) {
            box_Cruz6.innerHTML += `<div class="block_white" id="l6Block${indexLn6}"></div>`;
        } else if(indexLn6 == 18) {
            box_Cruz6.innerHTML += `<div class="block_white" id="l6Block${indexLn6}"><small>7</small></div>`;
        } else {
            box_Cruz6.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 7° Linha
    for (var indexLn7 = 1; indexLn7 <= 19; indexLn7++) {
        if (indexLn7 ==  5 || indexLn7 == 18) {
            box_Cruz7.innerHTML += `<div class="block_white" id="l7Block${indexLn7}"></div>`;
        } else if(indexLn7 == 3) {
            box_Cruz7.innerHTML += `<div class="block_white" id="l7Block${indexLn7}"><small>4</small></div>`;
        } else {
            box_Cruz7.innerHTML += `<div class="block_black"></div>`;
        }
    }

    // 8° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn8 = 1; indexLn8 <= 19; indexLn8++) {
        if (indexLn8 == 2) {
            box_Cruz8.innerHTML += `<div class="block_white" id="l8Block${indexLn8}"><small>9</small></div>`;
        } else if(indexLn8 == 1 || indexLn8 == 19) {
            box_Cruz8.innerHTML += `<div class="block_black"></div>`;
        } else {
            box_Cruz8.innerHTML += `<div class="block_white" id="l8Block${indexLn8}"></div>`;
        }
    }
    // }

    // 9° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn9 = 1; indexLn9 <= 19; indexLn9++) {
        if (indexLn9 == 5 || indexLn9 == 3) {
            box_Cruz9.innerHTML += `<div class="block_white" id="l9Block${indexLn9}"></div>`;
        }
        else {
            box_Cruz9.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 10° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn10 = 1; indexLn10 <= 19; indexLn10++) {
        if (indexLn10 == 5 || indexLn10 == 3) {
            box_Cruz10.innerHTML += `<div class="block_white" id="l10Block${indexLn10}"></div>`;
        } else {
            box_Cruz10.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 11° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn11 = 1; indexLn11 <= 19; indexLn11++) {
        if (indexLn11 == 3) {
            box_Cruz11.innerHTML += `<div class="block_white" id="l11Block${indexLn11}"></div>`;
        } else {
            box_Cruz11.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 12° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn12 = 1; indexLn12 <= 19; indexLn12++) {
        if (indexLn12 == 3) {
            box_Cruz12.innerHTML += `<div class="block_white" id="l12Block${indexLn12}"></div>`;
        } else {
            box_Cruz12.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 13° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn13 = 1; indexLn13 <= 19; indexLn13++) {
        if (indexLn13 == 11) {
            box_Cruz13.innerHTML += `<div class="block_white" id="l13Block${indexLn13}"></div>`;
        } else {
            box_Cruz13.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }
}

function verificar() {
    var inputs = document.querySelectorAll("input");

    if (inputs[0].value.toLowerCase() == rFim[0]) {
        var palavraCruz = inputs[0].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 13; i == 13; i++) {
            document.querySelector(`div#l10Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l10Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i2 = 13; i2 == 13; i2++) {
            document.querySelector(`div#l11Block${i2}`).innerText = palavraCruz[a];
            document.querySelector(`div#l11Block${i2}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i3 = 13; i3 == 13; i3++) {
            document.querySelector(`div#l12Block${i3}`).innerText = palavraCruz[a];
            document.querySelector(`div#l12Block${i3}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[0].disabled = true;
            sum1.style.textDecoration = "line-through";
            det1.removeAttribute("open");
            a++;
        }
        q1 = true;
    }
    if (inputs[1].value.toLowerCase() == rFim[1]) {
        var palavraCruz = inputs[1].value.replace(/\s/g, '');
        console.log(palavraCruz);
        palavraCruz = palavraCruz.split("");
        console.log(palavraCruz);
        var a = 0;
        for (let i = 13; i <= 15; i++) {
            document.querySelector(`div#l12Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l12Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[1].disabled = true;
            sum2.style.textDecoration = "line-through";
            det2.removeAttribute("open");
            a++;
        }
        q2 = true;
    }
    if (inputs[2].value.toLowerCase() == rFim[2]) {
        var palavraCruz = inputs[2].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 11; i == 11; i++) {
            document.querySelector(`div#l1Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l1Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i2 = 11; i2 == 11; i2++) {
            document.querySelector(`div#l2Block${i2}`).innerText = palavraCruz[a];
            document.querySelector(`div#l2Block${i2}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i3 = 11; i3 == 11; i3++) {
            document.querySelector(`div#l3Block${i3}`).innerText = palavraCruz[a];
            document.querySelector(`div#l3Block${i3}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i4 = 11; i4 == 11; i4++) {
            document.querySelector(`div#l4Block${i4}`).innerText = palavraCruz[a];
            document.querySelector(`div#l4Block${i4}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i5 = 11; i5 == 11; i5++) {
            document.querySelector(`div#l5Block${i5}`).innerText = palavraCruz[a];
            document.querySelector(`div#l5Block${i5}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i6 = 11; i6 == 11; i6++) {
            document.querySelector(`div#l6Block${i6}`).innerText = palavraCruz[a];
            document.querySelector(`div#l6Block${i6}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i7 = 11; i7 == 11; i7++) {
            document.querySelector(`div#l7Block${i7}`).innerText = palavraCruz[a];
            document.querySelector(`div#l7Block${i7}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i8 = 11; i8 == 11; i8++) {
            document.querySelector(`div#l8Block${i8}`).innerText = palavraCruz[a];
            document.querySelector(`div#l8Block${i8}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i9 = 11; i9 == 11; i9++) {
            document.querySelector(`div#l9Block${i9}`).innerText = palavraCruz[a];
            document.querySelector(`div#l9Block${i9}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i10 = 11; i10 == 11; i10++) {
            document.querySelector(`div#l10Block${i10}`).innerText = palavraCruz[a];
            document.querySelector(`div#l10Block${i10}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i11 = 11; i11 == 11; i11++) {
            document.querySelector(`div#l11Block${i11}`).innerText = palavraCruz[a];
            document.querySelector(`div#l11Block${i11}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i12 = 11; i12 == 11; i12++) {
            document.querySelector(`div#l12Block${i12}`).innerText = palavraCruz[a];
            document.querySelector(`div#l12Block${i12}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i13 = 11; i13 == 11; i13++) {
            document.querySelector(`div#l13Block${i13}`).innerText = palavraCruz[a];
            document.querySelector(`div#l13Block${i13}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[2].disabled = true;
            sum3.style.textDecoration = "line-through";
            det3.removeAttribute("open");
            a++
        }
        q3 = true;
    }
    if (inputs[3].value.toLowerCase() == rFim[3]) {
        var palavraCruz = inputs[3].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 3; i == 3; i++) {
            document.querySelector(`div#l7Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l7Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++;
        }
        for (let i2 = 3; i2 == 3; i2++) {
            document.querySelector(`div#l8Block${i2}`).innerText = palavraCruz[a];
            document.querySelector(`div#l8Block${i2}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i3 = 3; i3 == 3; i3++) {
            document.querySelector(`div#l9Block${i3}`).innerText = palavraCruz[a];
            document.querySelector(`div#l9Block${i3}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++;
        }
        for (let i4 = 3; i4 == 3; i4++) {
            document.querySelector(`div#l10Block${i4}`).innerText = palavraCruz[a];
            document.querySelector(`div#l10Block${i4}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i5 = 3; i5 == 3; i5++) {
            document.querySelector(`div#l11Block${i5}`).innerText = palavraCruz[a];
            document.querySelector(`div#l11Block${i5}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i6 = 3; i6 == 3; i6++) {
            document.querySelector(`div#l12Block${i6}`).innerText = palavraCruz[a];
            document.querySelector(`div#l12Block${i6}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[3].disabled = true;
            sum4.style.textDecoration = "line-through";
            det4.removeAttribute("open");
            a++;
        }
        q4 = true;
    }
    if (inputs[4].value.toLowerCase() == rFim[4]) {
        var palavraCruz = inputs[4].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 5; i == 5; i++) {
            document.querySelector(`div#l8Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l8Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i2 = 5; i2 == 5; i2++) {
            document.querySelector(`div#l9Block${i2}`).innerText = palavraCruz[a];
            document.querySelector(`div#l9Block${i2}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i3 = 5; i3 == 5; i3++) {
            document.querySelector(`div#l10Block${i3}`).innerText = palavraCruz[a];
            document.querySelector(`div#l10Block${i3}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[4].disabled = true;
            sum5.style.textDecoration = "line-through";
            det5.removeAttribute("open");
            a++;
        }
        q5 = true;
    }
    if (inputs[5].value.toLowerCase() == rFim[5]) {
        var palavraCruz = inputs[5].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 9; i == 9; i++) {
            document.querySelector(`div#l8Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l8Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i2 = 9; i2 == 9; i2++) {
            document.querySelector(`div#l9Block${i2}`).innerText = palavraCruz[a];
            document.querySelector(`div#l9Block${i2}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i3 = 9; i3 == 9; i3++) {
            document.querySelector(`div#l10Block${i3}`).innerText = palavraCruz[a];
            document.querySelector(`div#l10Block${i3}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++;
        }
        for (let i4 = 9; i4 == 9; i4++) {
            document.querySelector(`div#l11Block${i4}`).innerText = palavraCruz[a];
            document.querySelector(`div#l11Block${i4}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++;
        }
        for (let i5 = 9; i5 == 9; i5++) {
            document.querySelector(`div#l12Block${i5}`).innerText = palavraCruz[a];
            document.querySelector(`div#l12Block${i5}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[5].disabled = true;
            sum6.style.textDecoration = "line-through";
            det6.removeAttribute("open");
            a++;
        }
        q6 = true;
    }
    if (inputs[6].value.toLowerCase() == rFim[6]) {
        var palavraCruz = inputs[6].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 18; i == 18; i++) {
            document.querySelector(`div#l6Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l6Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i2 = 18; i2 == 18; i2++) {
            document.querySelector(`div#l7Block${i2}`).innerText = "--";
            document.querySelector(`div#l7Block${i2}`).style.backgroundColor = "rgb(87, 255, 104)";
        }
        for (let i3 = 18; i3 == 18; i3++) {
            document.querySelector(`div#l8Block${i3}`).innerText = palavraCruz[a];
            document.querySelector(`div#l8Block${i3}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[6].disabled = true;
            sum7.style.textDecoration = "line-through";
            det7.removeAttribute("open");
            a++;
        }
        q7 = true;
    }
    if (inputs[7].value.toLowerCase() == rFim[7]) {
        var palavraCruz = inputs[7].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        let a = 0;
        for (let i = 5; i == 5; i++) {
            document.querySelector(`div#l2Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l2Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i2 = 5; i2 == 5; i2++) {
            document.querySelector(`div#l3Block${i2}`).innerText = palavraCruz[a];
            document.querySelector(`div#l3Block${i2}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i3 = 5; i3 == 5; i3++) {
            document.querySelector(`div#l4Block${i3}`).innerText = palavraCruz[a];
            document.querySelector(`div#l4Block${i3}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++;
        }
        for (let i4 = 5; i4 == 5; i4++) {
            document.querySelector(`div#l5Block${i4}`).innerText = palavraCruz[a];
            document.querySelector(`div#l5Block${i4}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++;
        }
        for (let i5 = 5; i5 == 5; i5++) {
            document.querySelector(`div#l6Block${i5}`).innerText = palavraCruz[a];
            document.querySelector(`div#l6Block${i5}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++;
        }
        for (let i6 = 5; i6 == 5; i6++) {
            document.querySelector(`div#l7Block${i6}`).innerText = palavraCruz[a];
            document.querySelector(`div#l7Block${i6}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++;
        }
        for (let i7 = 5; i7 == 5; i7++) {
            document.querySelector(`div#l8Block${i7}`).innerText = palavraCruz[a];
            document.querySelector(`div#l8Block${i7}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++;
        }
        for (let i8 = 5; i8 == 5; i8++) {
            document.querySelector(`div#l9Block${i8}`).innerText = palavraCruz[a];
            document.querySelector(`div#l9Block${i8}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++;
        }
        for (let i9 = 5; i9 == 5; i9++) {
            document.querySelector(`div#l10Block${i9}`).innerText = palavraCruz[a];
            document.querySelector(`div#l10Block${i9}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[7].disabled = true;
            sum8.style.textDecoration = "line-through";
            det8.removeAttribute("open");
            a++;
        }
        q7 = true;
    }
    if (inputs[8].value.toLowerCase() == rFim[8]) {
        var palavraCruz = inputs[8].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 2; i <= 18; i++) {
            if(i == 6 || i == 8 || i == 16) {
                document.querySelector(`div#l8Block${i}`).innerText = "--";
                document.querySelector(`div#l8Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            } else {
                document.querySelector(`div#l8Block${i}`).innerText = palavraCruz[a];
                document.querySelector(`div#l8Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
                inputs[8].disabled = true;
                sum9.style.textDecoration = "line-through";
                det9.removeAttribute("open");
                a++;
            }
        }
        q9 = true;
    }
    if (inputs[9].value.toLowerCase() == rFim[9]) {
        var palavraCruz = inputs[9].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 2; i == 15; i++) {
            document.querySelector(`div#l8Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l8Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[9].disabled = true;
            sum10.style.textDecoration = "line-through";
            det10.removeAttribute("open");
            a++;
        }
        q10 = true;
    }
    if (q1 == true || q2 == true && q3 == true && q4 == true && q5 == true && q6 == true && q7 == true && q8 == true && q9 == true && q10 == true) {
        Swal.fire({
            imageUrl: 'https://media.tenor.com/Qxj14bQYHjoAAAAC/dragon-ball-z-dbz.gif',
            imageHeight: 200,
            title: 'Parabéns',
            text: 'Você acertou todas questões da cruzadinha!',
            confirmButtonText: 'Obrigado(a)',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__hinge'
            },
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(assets/img/plus.png)',
        }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
      });
    }
};