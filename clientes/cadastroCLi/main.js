function init() {
    const api = axios.create({
        baseURL: "https://tesstw.onrender.com"
    })

const form = document.getElementById("form_pd")
const inp_btn_salve = document.getElementById("btn_salve")

async function inclusao() {
        

        const nome=document.getElementById("nome").value
        const email=document.getElementById("email").value
        const uf=document.getElementById("uf").value
        const password=document.getElementById("password").value
        const level = document.getElementById("level1").checked ? 1 : 0
        
        const data = {
          "nome": nome,
          "email": email,
          "uf": uf,
          "password": password,
          "level": level,
      }
        console.log(data)
        const confirmar = window.confirm("Você realmente deseja registrar este item?");
        if (confirmar){
        const response = await api.post('/clientes/', data)
        alert("Registro Efetuado!")
    }
}

inp_btn_salve.onclick = () => {
        inclusao()
   
 }

}
const btn_cancelar=document.getElementById("btn_cancelar")
btn_cancelar.onclick=()=>{
    const confirmar = window.confirm("Você realmente deseja cancelar a alteração e retornar à página principal?");
        if (confirmar){
           window.close()
}
}
document.addEventListener("DOMContentLoaded", init)





