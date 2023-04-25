function calcular(){
    var velocidade = document.querySelector('input#vel')
    var res = document.querySelector('div#res')
    var km = Number(vel.value)

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${km}Km/h</strong></p>`
    if(km > 60){
        res.innerHTML = `<p>Você está <strong>MULTADO</strong> por excesso de velocidade.</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}