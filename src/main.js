// import { login } from "../usuario/login"
document.addEventListener('DOMContentLoaded', function () {
  

    const api = axios.create({
        baseURL: "https://tesstw.onrender.com",
    });

    const dpai = "linhas"
    const linhas_prod = document.querySelector(`.${dpai}`)
    const paginacao = document.querySelector('.paginacao')

    const itensPorPagina = 21
    let paginaAtual = 1
    let dados = []

    async function consultar() {
        try {
            if (!linhas_prod) {
                
                console.error(`Element with class "${dpai}" not found in the document.`)
                return
            }

            const response = await api.get('/produtos')
            dados = response.data.result
            dados.sort((a, b) => a.cod - b.cod)
            criarBotoesPaginacao()
            mostrarPagina(paginaAtual)

        } catch (error) {
            console.error("Error:", error)
        }
    }
    document.getElementById('tabela').addEventListener('change', function () {
        redirectCli(this.value);
    });

    function redirectCli(selectedValue) {
        if (selectedValue === 'costumer') {
            window.location.href = '../clientes/index.html'
        }
       
    }   
    
    
    

        const btn_search= document.getElementsByClassName("btn_search")[0]

        btn_search.onclick=async()=>{
          
            const search=document.getElementById("pesquisar").value
            console.log(search)
            // async function buscar(){
            const response = await api.get('/produtos/'+ search)
            const dados=response.data
            console.log(response)

            // if(search==="" && dados!=0){
            //      console.log(search+"vazio")
            //      mostrarPagina()
            // } 
            // mostrarPagina(paginaAtual)

            linhas_prod.innerHTML = ''

            startIndex = 0
            endIndex = 10
            if(search == ""){

                setTimeout(() => {
                    window.location.href = window.location.href;
                }, 5000)
              } 
            

            if (dados.length === 0) {
                linhas_prod.innerHTML = '<p>Nenhum resultado encontrado.</p>';
                setTimeout(() => {
                    window.location.href = window.location.href;
                }, 5000)
              } 
            
              
              else {
                // criarBotoesPaginacao();/// preciso arrumar a paginação da pesquisa
                // mostrarPagina(paginaAtual);

            for (let i = startIndex; i < Math.min(endIndex, dados.length); i++) {
                const element = dados[i]
    
                const linhas = document.createElement("div")
                linhas.setAttribute("class", "linhas")
    
                const id = document.createElement("div")
                id.setAttribute("class", "id")
                id.innerHTML = element.cod
                linhas.appendChild(id)
    
                const nome = document.createElement("div")
                nome.setAttribute("class", "nome")
                nome.innerHTML = element.nome.slice(0,19)
                linhas.appendChild(nome)
    
                const fabricante= document.createElement("div")
                fabricante.setAttribute("class", "fabricante")
                fabricante.innerHTML = element.fabricante
                linhas.appendChild(fabricante)
    
                const quantidade = document.createElement("div")
                quantidade.setAttribute("class", "quantidade")
                quantidade.innerHTML = element.qtda
                linhas.appendChild(quantidade)
    
                const custo = document.createElement("div")
                custo.setAttribute("class", "custo")
                custo.innerHTML = element.custo
                linhas.appendChild(custo)
    
                const preco = document.createElement("div")
                preco.setAttribute("class", "preco")
                preco.innerHTML = element.preco
                linhas.appendChild(preco)
    
                const descricao = document.createElement("div")
                descricao.setAttribute("class", "descricao")
                descricao.innerHTML = element.descri.slice(0,10)
                linhas.appendChild(descricao)
    
                const data = document.createElement("div")
                data.setAttribute("class", "data")
                data.innerHTML = element.data.slice(0,19)
                linhas.appendChild(data)
                 

               const changes= document.createElement("div")  
               changes.setAttribute("class","changes")  
               linhas.appendChild(changes)

            
               const alterar= document.createElement("img")  
               alterar.setAttribute("class","alterar")  
               changes.appendChild(alterar)

               const excluir= document.createElement("img")  
               excluir.setAttribute("class","excluir")   
               changes.appendChild(excluir)

            
            linhas.appendChild(changes)

                linhas_prod.appendChild(linhas)

            }
            
        
        }
      
    }
       
    function mostrarPagina(pagina) {
        const startIndex = (pagina - 1) * itensPorPagina
        const endIndex = startIndex + itensPorPagina

        linhas_prod.innerHTML = ''

        for (let i = startIndex; i < Math.min(endIndex, dados.length); i++) {
            const element = dados[i]

            const linhas = document.createElement("div")
            linhas.setAttribute("class", "linhas")

            const id = document.createElement("div")
            id.setAttribute("class", "id")
            id.innerHTML = element.cod
            linhas.appendChild(id)

            const nome = document.createElement("div")
            nome.setAttribute("class", "nome")
            nome.innerHTML = element.nome.slice(0,19)
            linhas.appendChild(nome)

            const fabricante= document.createElement("div")
            fabricante.setAttribute("class", "fabricante")
            fabricante.innerHTML = element.fabricante
            linhas.appendChild(fabricante)

            const quantidade = document.createElement("div")
            quantidade.setAttribute("class", "quantidade")
            quantidade.innerHTML = element.qtda
            linhas.appendChild(quantidade)

            const custo = document.createElement("div")
            custo.setAttribute("class", "custo")
            custo.innerHTML = element.custo
            linhas.appendChild(custo)

            const preco = document.createElement("div")
            preco.setAttribute("class", "preco")
            preco.innerHTML = element.preco
            linhas.appendChild(preco)

            const descricao = document.createElement("div")
            descricao.setAttribute("class", "descricao")
            descricao.innerHTML = element.descri.slice(0,10)
            linhas.appendChild(descricao)

            const data = document.createElement("div")
            data.setAttribute("class", "data")
            data.innerHTML = element.data.slice(0,19)
            linhas.appendChild(data)

            const changes= document.createElement("div")  
            changes.setAttribute("class","changes")  
            linhas.appendChild(changes)

            
            const alterar= document.createElement("img")  
            alterar.setAttribute("class","alterar")  
            alterar.setAttribute("src","./css/img/editar.png")
            changes.appendChild(alterar)

            const excluir= document.createElement("img")  
            excluir.setAttribute("class","excluir")  
            excluir.setAttribute("src","./css/img/lixeira.png")  
            changes.appendChild(excluir)

            
            linhas.appendChild(changes)


            linhas_prod.appendChild(linhas)
        }
    }





    function criarBotoesPaginacao() {
        const totalPaginas = Math.ceil(dados.length / itensPorPagina)

        paginacao.innerHTML = ''

        const btn_before = document.createElement('div')
        btn_before.classList.add('page')
        btn_before.textContent = 'Anterior'
        btn_before.addEventListener('click', function () {
            if (paginaAtual > 1) {
                paginaAtual--
                mostrarPagina(paginaAtual)
                atualizarEstiloBotoesPaginacao()
            }
        })
        paginacao.appendChild(btn_before)

        for (let i = paginaAtual; i <= Math.min(paginaAtual + 3, totalPaginas); i++) {
            const button = document.createElement('div')
            button.classList.add('page')
            button.textContent = i
            button.addEventListener('click', function () {
                paginaAtual = i
                mostrarPagina(paginaAtual)
                atualizarEstiloBotoesPaginacao()
            })
            paginacao.appendChild(button)
        }

        const btn_after = document.createElement('div')
        btn_after.classList.add('page')
        btn_after.textContent = 'Próximo'
        btn_after.addEventListener('click', function () {
            if (paginaAtual < totalPaginas) {
                paginaAtual++
                mostrarPagina(paginaAtual)
                atualizarEstiloBotoesPaginacao()
            }
        })
        paginacao.appendChild(btn_after)

        atualizarEstiloBotoesPaginacao()
    }

    function atualizarEstiloBotoesPaginacao() {
        const botoes = document.querySelectorAll('.page');
        botoes.forEach(btn => btn.classList.remove('active'));
        botoes[paginaAtual - 1].classList.add('active');
    }
 
    function Alterar() {
        linhas_prod.addEventListener('click', function (event) {
            const target = event.target;
            if (target.classList.contains('alterar')) {
                console.log("Clicada");
    
                const linhaClicada = target.closest('.linhas');
    
                const nme = linhaClicada.querySelector('.nome').textContent;
                const fabri = linhaClicada.querySelector('.fabricante').textContent;
                const cst = linhaClicada.querySelector('.custo').textContent;
                const quanti = linhaClicada.querySelector('.quantidade').textContent;
                const prec = linhaClicada.querySelector('.preco').textContent;
                const descri = linhaClicada.querySelector('.descricao').textContent;
                const cod= linhaClicada.querySelector('.id').textContent;
    
                console.log('Clicada:', nme, fabri, cst, prec, descri, quanti, cod);
    
                const novaJanela = window.open('../alterarp/index.html', 'form', 'fullscreen=0,resizable=0,height=550,width=600');
    
                setTimeout(() => {
                    novaJanela.postMessage({ nme, fabri, quanti, cst, prec, descri,cod }, '*');
                }, 500);
            }
        });
    }


function exclusao() {
        linhas_prod.addEventListener('click', async function (event) {
            const target = event.target;
            if (target.classList.contains('excluir')) {
                console.log("Clicada");
    
                const confirmar = window.confirm("Você realmente deseja excluir este item?");
                if (confirmar){
                    const linhaClicada = target.closest('.linhas');
                    const cod= linhaClicada.querySelector('.id').textContent;

                 try{
                    const response = await api.delete('/produtos/' + cod)  
                    alert("Registro excluído!")
                 }
                 catch (error) {
                    console.error("Erro ao excluir o item:", error);
                }

                }
        }})
    }

exclusao()

Alterar()
consultar()






})
   



