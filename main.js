const imgApresentacao = document.querySelector("#apresentacao img")
const textoApresentacao = document.querySelector("#apresentacao p")
const cursor = document.querySelectorAll("#apresentacao>i")
const imgsApresentacao = [
    {
        img: './image/dashbord/p_nav.jpg',
        alt: 'Painel de navegação',
        texto: 'Painel de navegação campleto e simples para usabilidade dos usuários, podendo ser construido conforme a necessidade de nossos clientes.'
    },
    {
        img: './image/dashbord/graf1.jpg',
        alt: 'Grafico personalizado 1',
        texto: 'Atendemos as necessidades presentes e mostramos da maneira mais simples e amigável possivel, através dos gráficos.'
    },
    {
        img: './image/dashbord/graf2.jpg',
        alt: 'Grafico personalizado 2',
        texto: 'Podendo personaliza-los, seja ela para calcular consumo ou somar produção e tudo sendo possivel gerar relátorios personalizados em excel.'
    }
]
function setParametros(object) {
    imgApresentacao.src = object.img
    imgApresentacao.alt = object.alt
    textoApresentacao.innerHTML = object.texto
}

cursor.forEach((element) => {
    element.addEventListener('click', (event) => {
        pararRotina()
        const tipo = event.target.getAttribute('type')
        if (tipo === 'retorna') {
            if (indexApresentacao === 0) {
                indexApresentacao = imgsApresentacao.length - 1
                setParametros(imgsApresentacao[indexApresentacao])
            }else {
                indexApresentacao -= 1
                setParametros(imgsApresentacao[indexApresentacao])
            }
        }
        else if (tipo === 'adianta') {
            if (indexApresentacao === imgsApresentacao.length - 1) {
                indexApresentacao = 0
                setParametros(imgsApresentacao[indexApresentacao])
            }else {
                indexApresentacao += 1
                setParametros(imgsApresentacao[indexApresentacao])
            }
        }
        iniciarRotina()
    })
})

let indexApresentacao = 0
let rotinaImagens = ''

function iniciarRotina() {
    rotinaImagens = setInterval(() => {
        setParametros(imgsApresentacao[indexApresentacao])
        indexApresentacao += 1
        if (indexApresentacao === imgsApresentacao.length) indexApresentacao = 0
    }, 4000)    
}
function pararRotina() {
    clearInterval(rotinaImagens)
}
iniciarRotina()