// Função da 1ª section
function mostrarParteInteira(){
    let numFracionado = document.getElementById('fracionado').value
    let numInteiro = Math.round(numFracionado)
    alert(numInteiro)
    document.getElementById('fracionado').value = ""
}


// Função da 2ª section
function calcularPotencia(){
    let n1 = document.getElementById('base').value
    let n2 = document.getElementById('expoente').value
    
    // let resultado = n1 ** n2
    let resultado = Math.pow(n1,n2)
    alert("O resultado de " + n1 + " elevado a " + n2 + " é igual a " + resultado)

    document.getElementById('base').value = ""
    document.getElementById('expoente').value = ""
}

// Funções da 3º section
function compCircunferencia(){
    const pi = Math.PI
    let raioCircunf = document.getElementById('raioCircunf').value
    let calcCircunf = (2 * pi * raioCircunf).toFixed(3)

    alert("A fórmula C = 2 * π * raio resulta em " + calcCircunf)
    document.getElementById('raioCircunf').value = ""
   
}

function areaCircunferencia() {
    let raioDoCirculo = document.getElementById('raioCircunferencia').value
    let areaDoCirculo = (Math.PI * Math.pow(raioDoCirculo, 2)).toFixed(3)

    alert("A fórmula A =  π * r² resulta em " + areaDoCirculo)
    document.getElementById('raioCircunferencia').value = ""
}


// Função da 4ª section
function areaBaseCubo(){
    let arestaCubo = document.getElementById('arestaCubo').value
    let areaDaBase = (Math.pow(arestaCubo, 2)).toFixed(3)

    alert("A área da base vale " + areaDaBase)

    areaTotalCubo(areaDaBase)
    volumeDoCubo(arestaCubo)

    function areaTotalCubo(areaDaBaseDoCubo){
        let areaTotal = (areaDaBaseDoCubo * 6).toFixed(3)
        alert("A área total deste cubo vale " + areaTotal)
    }

    function volumeDoCubo(arestaDoCubo){
        let volumeCubo = (Math.pow(arestaDoCubo, 3)).toFixed(3)
        alert("O volume deste cubo vale " + volumeCubo)
    }

    document.getElementById('arestaCubo').value = ""
}

// Função da 5ª section
function raizQuadrada() {
    let numCalcRaiz = document.getElementById('raizQd').value
    let valorRaizQuadrada = Math.sqrt(numCalcRaiz).toFixed(3)

    alert("A raiz quadrada de " + numCalcRaiz + " vale " + valorRaizQuadrada)
    document.getElementById('raizQd').value = ""
}