var addAluno = document.querySelector("#adicionar-aluno");


addAluno.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Clicado");
    var form = document.querySelector("#form-adiciona");
    var aluno = obtemAluno(form);
    var erros = validaAluno(aluno);
    if(erros.length > 0){
        printErros(erros);
        return;
    }
    addAlunoNaTabela(aluno);
    form.reset();
})

function obtemAluno(form){
    aluno = {
        nome: form.nome.value,
        bimestre_1: form.bimestre_1.value,
        bimestre_2: form.bimestre_2.value,
        bimestre_3: form.bimestre_3.value,
        bimestre_4: form.bimestre_4.value,
        media: calculaMedia(form.bimestre_1.value, form.bimestre_2.value, form.bimestre_3.value, form.bimestre_4.value)
    }
    return aluno;
}

function createTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function montaTr(aluno){
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");
    alunoTr.appendChild(createTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(createTd(converteDecimal(aluno.bimestre_1), "info-bimestre1"));
    alunoTr.appendChild(createTd(converteDecimal(aluno.bimestre_2), "info-bimestre2"));
    alunoTr.appendChild(createTd(converteDecimal(aluno.bimestre_3), "info-bimestre3"));
    alunoTr.appendChild(createTd(converteDecimal(aluno.bimestre_4), "info-bimestre4"));
    alunoTr.appendChild(createTd(aluno.media, "info-media"));
    return alunoTr;
}

function addAlunoNaTabela(aluno){
    var tabela = document.querySelector("#tabela-alunos");
    var alunoTr = montaTr(aluno);
    var resultadoFinal = testeAprova(aluno.media);
    printResultadoFinal(resultadoFinal, alunoTr);
    tabela.appendChild(alunoTr);
    console.log(aluno.media);
    
}

function validaAluno(aluno){
    erros = [];
    function verificaNota(nota){
        if(nota > 10 || nota < 0){
            erros.push("Nota inválida.");
        }
    }

    if(aluno.nome.length == 0){
        erros.push("O nome não pode ser vazio.");
    }


    if(aluno.bimestre_1.length == 0){
        erros.push("Preencha o campo do 1º Bimestre");

    }

    verificaNota(bimestre_1);

    if(aluno.bimestre_2.length == 0){
        erros.push("Preencha o campo do 2º Bimestre.");
    }

    verificaNota(bimestre_2);

    if(aluno.bimestre_3.length == 0){
        erros.push("Preencha o campo do 3º Bimestre.");
    }

    verificaNota(bimestre_3);


    if(aluno.bimestre_4.length == 0){
        erros.push("Preencha o campo do 4º Bimestre.");
    }

    verificaNota(bimestre_4);

    return erros;
}

function printErros(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function converteDecimal(valor){
    var resul = 0;
    resul = parseFloat(valor);
    return resul.toFixed(1);
}



