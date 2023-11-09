// function toogleMode() {
//     let htmlMode = document.documentElement

//     htmlMode.classList.toggle("light-mode")

//     let img = document.querySelector('#profile img')

//     // A condição abaixo indica que caso a variável htmlMode contenha a classe light-mode ele troca a imagem para outra
//     if(htmlMode.classList.contains("light-mode")) {
//         img.setAttribute('src', './assets/my_avatar_sun.jpg')
//     }else {
//         img.setAttribute('src', './assets/my_avatar.png')
//     }
// }

function toogleMode() {
    let mode = document.querySelector("#mode")

    mode.classList.toggle("bg-light")

    let img = document.querySelector('#profile img')
    if (mode.classList.contains("bg-light")) {
        img.setAttribute('src', './assets/my_avatar_sun.jpg')
    } else {
        img.setAttribute('src', './assets/my_avatar.png')
    }

}
