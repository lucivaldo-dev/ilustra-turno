
function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'img/manha.png';
        document.body.style.background = '#FFA500';
           
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'img/tarde.png';
        document.body.style.background = '#ff5a16'
    } else {
        // Boa noite!
        img.src = 'img/noite.png';
        document.body.style.background = '#1f1f5f'
    }

}



