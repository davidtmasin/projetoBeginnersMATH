// Função da 1ª section
function mostrarParteInteira(){
    let numFracionado = document.getElementById('fracionado').value
    let numInteiro = Math.round(numFracionado)
    alert(numInteiro + ".")
    document.getElementById('fracionado').value = ""
}


// Função da 2ª section
function calcularPotencia(){
    let n1 = document.getElementById('base').value
    let n2 = document.getElementById('expoente').value
    
    // let resultado = n1 ** n2
    let resultado = Math.pow(n1,n2).toFixed(2)
    alert("O resultado de " + n1 + " elevado a " + n2 + " é igual a " + resultado + ".")

    document.getElementById('base').value = ""
    document.getElementById('expoente').value = ""
}

// Função da 3º section
function calcCirculo(){
    const pi = Math.PI
    let raioCircunf = document.getElementById('raioCircunf').value
    let calcCircunf = (2 * pi * raioCircunf).toFixed(2)

    alert("A fórmula C = 2 * π * raio resulta em " + calcCircunf + ".")
    document.getElementById('raioCircunf').value = ""
}