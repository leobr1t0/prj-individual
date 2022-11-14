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