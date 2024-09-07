
function pesquisar(){
    let section = document.getElementById("resultado_pesquisa")
    let CampoPesquisa = document.getElementById("campo-pesquisa").value

    if(!CampoPesquisa){
        section.innerHTML = "<p>Digite alguma coisa na aba de pesquisa<\p>"
        return
    }

    CampoPesquisa = CampoPesquisa.toLowerCase()

    let resultados = ''
    let instituicao = ''
    let banca = ''

    for(let concurso of concursos){

        instituicao = concurso.instituicao.toLocaleLowerCase()
        banca = concurso.Banca.toLocaleLowerCase()
        if(banca.includes(CampoPesquisa) || instituicao.includes(CampoPesquisa)){
            resultados += `
        <div class="item-resultado">
            <h2>${concurso.Banca}</h2>
            <h3>${concurso.instituicao}</h3>
            <h3>${concurso.salario}  Salario</h3>
        </div>`
    }
        }  

    if(!resultados){
        resultados = "<p>O concurso não foi encontrado em nosso banco de dados<\p>"
    }

        
    section.innerHTML = resultados
}

