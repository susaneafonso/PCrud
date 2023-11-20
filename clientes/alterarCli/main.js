// document.addEventListener('DOMContentLoaded', function () {
//     window.addEventListener('message', function (event) {
//         const mensagem = event.data;
//         console.log('mensagem recebida');
//         console.log('Nome:', mensagem.nme);
//         console.log('email:', mensagem.email);
//         console.log('uf:', mensagem.uf);
//         console.log('level:', mensagem.level);
//         console.log('cod:', mensagem.cod);

//         document.getElementById("nome").placeholder = mensagem.nme;
//         document.getElementById("email").placeholder = mensagem.email;

//         init(mensagem.cod);
//     });

//     const form = document.getElementById("form_pd");
//     const inp_btn_salve = document.getElementById("btn_salve");

//     function init(cod) {
//         // ... (código anterior)

//         inp_btn_salve.onclick = () => {
//             alteracao();
//         };
//     }

//     // Move a definição da função alteracao para fora da função init
//     async function alteracao() {
//         const nome = document.getElementById("nome").value;
//         const email = document.getElementById("email").value;
//         const uf = document.getElementById("uf").value;
//         const password = document.getElementById("password").value;
//         const level = document.getElementById("level1").checked ? 1 : 0;

//         const data = {
//             "nome": nome,
//             "email": email,
//             "uf": uf,
//             "password": password,
//             "level": level
//         };

//         console.log(data);

//         try {
//             const response = await axios.put('https://tesstw.onrender.com/clientes/' + cod, data);
//             console.log(response);
//         } catch (error) {
//             console.error("Erro ao alterar o item:", error);
//         }
//     }

//     document.addEventListener("DOMContentLoaded", init);
// });
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('message', function (event) {
        const mensagem = event.data;
                console.log('mensagem recebida');
                console.log('Nome:', mensagem.nme);
                console.log('email:', mensagem.email);
                console.log('uf:', mensagem.uf);
                console.log('level:', mensagem.level);
                console.log('cod:', mensagem.cod);
        
                document.getElementById("nome").placeholder = mensagem.nme;
                document.getElementById("email").placeholder = mensagem.email;

        init(mensagem.cod)
    });

    function init(cod) {
        const api = axios.create({
            baseURL: "https://tesstw.onrender.com"
        });

        const form = document.getElementById("form_pd");
        const inp_btn_salve = document.getElementById("btn_salve");

        async function alteracao() {
            const nome = document.getElementById("nome").value;
           const email = document.getElementById("email").value;
           const uf = document.getElementById("uf").value;
          const password = document.getElementById("password").value;
          const level = document.getElementById("level1").checked ? 1 : 0;

            const data = {
                "nome": nome,
                "email": email,
                "uf": uf,
                "password": password,
                "level": level
            };
            console.log(data);
            const response = await api.put('/clientes/' + cod, data);
        }

        inp_btn_salve.onclick = () => {
            alteracao();
        };

        document.addEventListener("DOMContentLoaded", init);
    }
    const btn_cancelar=document.getElementById("btn_cancelar")
    btn_cancelar.onclick=()=>{
        const confirmar = window.confirm("Você realmente deseja cancelar a alteração e retornar à página principal?");
            if (confirmar){
               window.close()
    }
}
});
    