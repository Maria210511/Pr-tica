const getMarcas = (e) =>{
    const tarefas = fetch('https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json')
   tarefas.then(resposta => resposta.json()).then(marcas =>{
    const ul = document.createElement('ul')
    marcas.forEach(marca =>{
        const li = document.createElement('li')
        const logo = document.createElement('img')
        logo.src = marca.image?.optimized
        li.appendChild(logo)
        ul.appendChild(li)
        console.log(marca)
    })
    document.body.appendChild(ul)
   })
   .catch(erro => console.log(erro))

}
const btnMostrar = document.querySelector("#mostrarCarros");
btnMostrar.addEventListener("click", getMarcas);