

function mostrar(x){
    document.getElementById("result").innerHTML = ``;
    var kginput = document.getElementById('gasto').value;
    var divresult = document.getElementById('resultdiv');
    divresult.replaceChildren()

    
    if(kginput >= 1 & kginput <= 200){
        document.getElementById("result").innerHTML = `<p id="textresultcalc">Você deve tomar no mínimo ${(kginput*35/1000).toFixed(2)}L de água por dia</p>`;

        var i = 0
        
        while(i < Math.trunc(kginput*35/1000)){
            i++
            divresult.innerHTML += '<img src="midia/litroagua.png" alt="" class="imglitro">'
        }

        /*for(var i = 0; i <= Math.trunc(kginput*35/1000); i++){
            divresult.appendChild(img);
            console.log('aaa')
        }*/

        
    }
    else if(kginput <= 0.99){
        document.getElementById("result").innerHTML = `O valor mínimo é 1kg`;
    }

    else{
        document.getElementById("result").innerHTML = `O valor máximo é 200kg`;
    }
}