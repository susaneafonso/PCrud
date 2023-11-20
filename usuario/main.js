



async function teste(){

    const api= axios.create({
        baseUrl:"https://tesstw.onrender.com"
    }
    )
    const nome="susane"
    const email="susirams@gmail.com"
    const uf="rj"
    const password="12345"
    const level="1"

    data = {
     "nome": nome,
     "email":email,
     "uf":uf,
     "password":password,
     "level":level
    }
    const Response= await axios.post('https://tesstw.onrender.com/clientes',data)
    console.log(Response)
}
teste()