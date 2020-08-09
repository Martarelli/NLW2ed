//procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)
//executar uma ação
function cloneField() {
    //duplicar campo, que campos?
    const newFieldConteiner = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos, que campos?
    const fields = newFieldConteiner.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })
    //colocar na pagina, onde?
    document.querySelector('#schedule-items').appendChild(newFieldConteiner)
}