function init() {
    const api = axios.create({
        baseURL: "https://tesstw.onrender.com"
    })

const form = document.getElementById("form_pd")
const inp_btn_salve = document.getElementById("btn_salve")

async function inclusao() {
        
        const nome=document.getElementById("nome").value
        const fabricante=document.getElementById("fabricante").value
        const descricao=document.getElementById("descricao").value
        const quantidade=document.getElementById("quantidade").value
        const preco=document.getElementById("preco").value
        const custo=document.getElementById("custo").value

        const data = {
          "nome": nome,
          "fabricante": fabricante,
          "descri": descricao,
          "qtda": quantidade,
          "preco": preco,
          "custo": custo,
      }
        console.log(data)
        const response = await api.post('/produtos', data)
}

inp_btn_salve.onclick = () => {
        inclusao()
 }

}

document.addEventListener("DOMContentLoaded", init)







