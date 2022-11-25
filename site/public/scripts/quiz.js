var respostasQ1 = ['nappa', 'galik ho', 'namekusei', '4', 'genki dama', '150 milhoes', 'trunks', 'dr. gero', 'androide 19', 'tenshinhan'];
var respostasQ2 = ['super vegeta', 'final flash', 'gohan', 'mr. satan', 'semente dos deuses', 'androide 16', 'super saiyajin 2', 'kamehameha', 'goten','videl'];
var respostasQ3 = ['grande saiyaman', '25° torneio de artes marciais', 'supremo senhor kaioh', 'majin vegeta', 'dabura', 'regeneração', 'gotenks', 'vegetto', 'uub', 'super saiyajin 4'];

var idQuiz = 0;
var pergunta = 1;
var pontos = 0;
var resp = '';
var perPontos = 0;

function apareceQst() {
    if (pergunta == 2) {
        qst2.style.display = "flex";
        qst1.style.display = "none";
        resp = '';
    } else if (pergunta == 3) {
        qst3.style.display = "flex";
        qst2.style.display = "none";
        resp = '';
    } else if (pergunta == 4) {
        qst4.style.display = "flex";
        qst3.style.display = "none";
        resp = '';
    } else if (pergunta == 5) {
        qst5.style.display = "flex";
        qst4.style.display = "none";
        resp = '';
    } else if (pergunta == 6) {
        qst6.style.display = "flex";
        qst5.style.display = "none";
        resp = '';
    } else if (pergunta == 7) {
        qst7.style.display = "flex";
        qst6.style.display = "none";
        resp = '';
    } else if (pergunta == 8) {
        qst8.style.display = "flex";
        qst7.style.display = "none";
        resp = '';
    } else if (pergunta == 9) {
        qst9.style.display = "flex";
        qst8.style.display = "none";
        resp = '';
    } else if (pergunta == 10) {
        qst10.style.display = "flex";
        qst9.style.display = "none";
        resp = '';
    } else if(pergunta == 11) {
        verificar();
        perPontos = (pontos / 10) * 100
        resp = '';
    }
}

function selecionar(value) {
    resp = value;
}

function confirmar() {
    if(resp.length == 0) {
        alert("Selecione uma opção para prosseguir")
    } else {
        for (let i = 0; i <= respostasQ1.length+1; i++) {
            if (respostasQ1.indexOf(resp) > -1 || respostasQ2.indexOf(resp) > -1 || respostasQ3.indexOf(resp) > -1) {
                pontos++;
                pergunta++;
                console.log(pergunta)
                break;
            } else {
                pergunta++;
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
            footer: `Pontuação: ${pontos} <br> Percentual de acertos: ${perPontos.toFixed(2)}%`,
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
            footer: `Pontuação: ${pontos} <br> Percentual de acertos: ${perPontos.toFixed(2)}%`,
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
            footer: `Pontuação: ${pontos} <br> Percentual de acertos: ${perPontos.toFixed(2)}%`,
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

    if(quiz == 1) {
        idQuiz = 1;
        alert(idQuiz);
    } else if(quiz == 2) {
        idQuiz = 2;
        alert(idQuiz);
    } else if(quiz == 3) {
        idQuiz = 3;
        alert(idQuiz);
    }

    fetch("/quizes/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js

            pontosServer: pontos,
            percentualServer: perPontos,

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alertCadastro();

            setTimeout(() => {
                window.location = "login.html";
            }, "3000")

            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;
}

module.exports =  {
    validarSessao
}