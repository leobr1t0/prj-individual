var respostas = ['nappa', 'galik ho', 'namekusei', '4', 'genki dama', '150 milhoes', 'trunks', 'dr. gero', 'androide 19', 'tenshinhan'];

var countPgt = 1;
var pontos = 0;
var resp = '';

function apareceQst() {
    if (countPgt == 2) {
        qst2.style.display = "flex";
        qst1.style.display = "none";
    } else if (countPgt == 3) {
        qst3.style.display = "flex";
        qst2.style.display = "none";
    } else if (countPgt == 4) {
        qst4.style.display = "flex";
        qst3.style.display = "none";
    } else if (countPgt == 5) {
        qst5.style.display = "flex";
        qst4.style.display = "none";
    } else if (countPgt == 6) {
        qst6.style.display = "flex";
        qst5.style.display = "none";
    } else if (countPgt == 7) {
        qst7.style.display = "flex";
        qst6.style.display = "none";
    } else if (countPgt == 8) {
        qst8.style.display = "flex";
        qst7.style.display = "none";
    } else if (countPgt == 9) {
        qst9.style.display = "flex";
        qst8.style.display = "none";
    } else if (countPgt == 10) {
        qst10.style.display = "flex";
        qst9.style.display = "none";
    } else if(countPgt == 11) {
        verificar();
    }
}

function selecionar(value) {
    if(value == "") {
        alert("Selecione uma opção para prosseguir")
    } else {
        resp = value;
    }
}

function confirmar() {
    if(resp.length == 0) {
        alert("Selecione uma opção para prosseguir")
    } else {
        for (let i = 0; i <= respostas.length+1; i++) {
            if (respostas.indexOf(resp) > -1) {
                pontos++;
                countPgt++;
                console.log(countPgt)
                break;
            } else {
                countPgt++;
                break;
            }
        }
        apareceQst();
    }
}

function verificar() {
    if (pontos >= 8) {
        Swal.fire({
            imageUrl: 'https://media.tenor.com/l9m2LEUSEAMAAAAC/goku.gif',
            imageHeight: 200,
            title: 'Acima de 8',
            text: 'Parabéns pela sua pontuação, você sabe bastante a respeito!',
            footer: `Pontuação: ${pontos} <br> Percentual de acertos: ${(pontos / 10) * 100}%`,
            confirmButtonText: 'Obrigado(a)',
            confirmButtonColor: '#ff924b',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__hinge'
            },
            width: 600,
            padding: '3em',
            color: '#ff924b',
            background: '#fff url(assets/img/plus.png)',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "pageQuizes.html"
            }
        });
    } else if (pontos >= 6) {
        Swal.fire({
            imageUrl: 'https://media.tenor.com/egxm_ajg8hgAAAAS/goku.gif',
            imageHeight: 200,
            title: 'Acima de 6',
            text: 'Você foi mediano, continue tentando!',
            footer: `Pontuação: ${pontos} <br> Percentual de acertos: ${(pontos / 10) * 100}%`,
            confirmButtonText: 'Obrigado(a)',
            confirmButtonColor: '#ff924b',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__hinge'
            },
            width: 600,
            padding: '3em',
            color: '#ff924b',
            background: '#fff url(assets/img/plus.png)',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "pageQuizes.html"
            }
        });
    } else if (pontos <= 5) {
        Swal.fire({
            imageUrl: 'https://media.tenor.com/4F6LXZy2_4kAAAAC/vegeta-under-the-rain.gif',
            imageHeight: 200,
            title: 'Abaixo de 5',
            text: 'Você não foi tão bem, tente novamente na próxima!',
            footer: `Pontuação: ${pontos} <br> Percentual de acertos: ${(pontos / 10) * 100}%`,
            confirmButtonText: 'Obrigado(a)',
            confirmButtonColor: '#ff924b',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__hinge'
            },
            width: 600,
            padding: '3em',
            color: '#ff924b',
            background: '#fff url(assets/img/plus.png)',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "pageQuizes.html"
            }
        });
    }

    console.log(pontos)
}