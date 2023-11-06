function toogleMode() {
    let htmlMode = document.documentElement

    htmlMode.classList.toggle("light-mode")

    let img = document.querySelector('#profile img')

    // A condição abaixo indica que caso a variável htmlMode contenha a classe light-mode ele troca a imagem para outra
    if(htmlMode.classList.contains("light-mode")) {
        img.setAttribute('src', './assets/my_avatar_sun.jpg')
    }else {
        img.setAttribute('src', './assets/my_avatar.png')
    }
}
