// COMEÇO ALERT CADASTRO
function alertCadastro() {
    let timerInterval
    Swal.fire({
        // icon: 'sucess',
        imageUrl: './assets/loading.gif',
        title: 'Cadastro Feito com sucesso!',
        text: 'Esse alerta será fechado automaticamente e você será redirecionado para tela de login',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}
// FIM ALERT CADASTRO

// COMEÇO ALERT LOGIN
function alertLogin() {
    let timerInterval
    Swal.fire({
        // icon: 'sucess',
        imageUrl: './assets/loading.gif',
        title: 'Login Feito com sucesso!',
        text: 'Esse alerta será fechado automaticamente e você será redirecionado para seu perfil',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}
// FIM ALERT LOGIN

// COMEÇO ALERT CONTATO
function alertContact() {
    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Sua mensagem foi enviada!',
        showConfirmButton: false,
        timer: 1500
      })
}
// FIM ALERT CONTATO