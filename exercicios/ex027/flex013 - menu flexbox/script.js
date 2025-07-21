function mudoutamanho() {
    if (window.innerWidth <= 570) {
        document.getElementById('icon').style.display = 'block';
        document.getElementById('opcoes').style.display = 'none';
    } else { // volta ao tamanho normal para desktop
        document.getElementById('icon').style.display = 'none';
        document.getElementById('opcoes').style.display = 'flex';
        document.getElementById('opcoes').style.flexDirection = 'row';
    }
}

function menu() {
    let nav = document.getElementById('opcoes');
    if (nav.style.display === 'none') {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
    } else {
        nav.style.display = 'none';
    }
}
