var alunos = document.querySelectorAll(".aluno");
console.log(alunos);

function converte(num){
    var num = parseFloat(num);
    return num;
}

function testeAprova(media){
    var result = true;
    if(media < 6){
        result = false;
    }
    return result
}

function printResultadoFinal(resultadoFinal, aluno){
    if(!resultadoFinal){
        aluno.classList.add("aluno-reprovado");
    }else{
        aluno.classList.add("aluno-aprovado");
    }
}

function calculaMedia(nota1, nota2, nota3, nota4){
    var media = 0; 
    media = (converte(nota1) + converte(nota2) + converte(nota3) + converte(nota4));
    media = media/4;
    return media.toFixed(1);
}

for(var i = 0; i < alunos.length; i++){
    var aluno = alunos[i];
    var tdNota1 = aluno.querySelector(".info-bimestre1");
    var nota1 = tdNota1.textContent;
    var tdNota2 = aluno.querySelector(".info-bimestre2");
    var nota2 = tdNota2.textContent;
    var tdNota3 = aluno.querySelector(".info-bimestre3");
    var nota3 = tdNota3.textContent;
    var tdNota4 = aluno.querySelector(".info-bimestre4");
    var nota4 = tdNota4.textContent;

    var tdMedia = aluno.querySelector(".info-media");
    
    var media = calculaMedia(nota1, nota2, nota3, nota4);

    tdMedia.textContent = media;

    var resultadoFinal = testeAprova(media);
    
    printResultadoFinal(resultadoFinal, aluno);
}