
let pessoas = []

let formPessoas = document.getElementById("formPessoas")

formPessoas.addEventListener("submit", (e) => {
    e.preventDefault()
    let datosFormulario = new FormData(e.target)
    const pessoa = new Pessoa(datosFormulario.get("nome"), datosFormulario.get("documento"), datosFormulario.get("telefone"))
    pessoas.push(pessoa)
    localStorage.setItem('pessoas',JSON.stringify(pessoas))
    formPessoas.reset()
})

function validar(){
    let todo_correcto = true

    if(document.getElementById('nome').value.length < 2 ){
        todo_correcto = false;
    }
    
    if(document.getElementById('documento').value.length < 11 ){
        todo_correcto = false;
    }
    
    if(document.getElementById('telefone').value.length <12){
        todo_correcto = false;
    }
    
    return todo_correcto;
}

let nome = document.getElementById('nome');
let telefone = document.getElementById('telefone');
let documento = document.getElementById('documento');
let error = document.getElementById('error')


let form = document.getElementById('formPessoas', 'form2', 'form3');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        let mensajeError = [];
        if(nome.value === null || nome.value === ''){
            mensajeError.push('Ingresar seu nome');
        }
        if(documento.value === null || documento.value === ''){
            mensajeError.push('documento');
        }
        if(documento.value === null || telefone.value === ''){
            mensajeError.push('e telefone');
        }
            error.innerHTML = mensajeError.join(', ');
    })

function obtener(){ 
    let pessoa = JSON.parse(localStorage.getItem('pessoa'));

    document.innerHTML = `
    
    `;
}




