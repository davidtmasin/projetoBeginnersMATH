


// Função da 2ª section
function calcularPotencia(){
    let n1 = document.getElementById('base').value
    let n2 = document.getElementById('expoente').value
    
    // let resultado = n1 ** n2
    let resultado = Math.pow(n1,n2)
    alert("O resultado de " + n1 + " elevado a " + n2 + " é igual a " + resultado + ".")

    document.getElementById('base').value = ""
    document.getElementById('expoente').value = ""
}