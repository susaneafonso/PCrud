
document.addEventListener('DOMContentLoaded', function () {
const api = axios.create({
    baseURL: "https://tesstw.onrender.com",
    
})


async function consultar() {
  
    const response = await api.get('/produtos')
    const data=response.data.result
    console.log(data)
    
    data.forEach(element => {

         const linhas_prod= document.getElementsByClassName("linhas_prod")
         const linhas= document.createElement("div")
         const id=document.createElement("div")
         id.setAttribute("class","id") 
         id.innerHTML=element.cod
         
         

         const nome=document.createElement("div")
         nome.setAttribute("class","nome") 
         nome.value=element.nome

         const fabricante=document.createElement("div")
         fabricante.setAttribute("class","fabricante") 
         fabricante.innerHTML=element.fabricante

         const quantidade=document.createElement("div")
         quantidade.setAttribute("class","quantidade") 
         quantidade.innerHTML=element.qtda

         const custo=document.createElement("div")
         custo.setAttribute("class","custo") 
         custo.innerHTML=element.custo

         const preco=document.createElement("div")
         preco.setAttribute("class","preco") 
         preco.innerHTML=element.preco

         const descricao=document.createElement("div")
         descricao.setAttribute("class","descricao") 
         descricao.innerHTML=element.descri

         const data=document.createElement("div")
         data.setAttribute("class","data") 
         data.innerHTML=element.data
         

         linhas.setAttribute("class","dt")
         linhas.appendChild(id)
         linhas.appendChild(nome)
         linhas.appendChild(fabricante)
         linhas.appendChild(quantidade)
         linhas.appendChild(custo)
         linhas.appendChild(preco)
         linhas.appendChild(descricao)
         linhas.appendChild(data)
         linhas_prod.appendChild(linhas)

         console.log(id,nome,fabricante)

})}
consultar()

})

    
