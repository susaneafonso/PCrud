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
        const confirmar = window.confirm("Você realmente deseja registrar este item?");
        if (confirmar){
        console.log(data)
        const response = await api.post('/produtos', data)
        alert("Registro Efetuado!")
        }
}

inp_btn_salve.onclick = () => {
        inclusao()
   
 }

}
const btn_cancelar=document.getElementById("btn_cancelar")
btn_cancelar.onclick=()=>{
    const confirmar = window.confirm("Você realmente deseja cancelar o registro e retornar à página principal?");
        if (confirmar){
           window.close()
}
}
document.addEventListener("DOMContentLoaded", init)







