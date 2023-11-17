// obs: A alteração está sendo feita, mas quando os dados sao jogados no display, nao esta sendo organizado em ordem(arrumar)
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('message', function (event) {
        const mensagem = event.data
        console.log('mensagem recebida')
        console.log('Nome:', mensagem.nme)
        console.log('Fabricante:', mensagem.fabri)
        console.log('Quantidade:', mensagem.quanti)
        console.log('Custo:', mensagem.cst)
        console.log('Preço:', mensagem.prec)
        console.log('Descrição:', mensagem.descri)
        console.log('cod:', mensagem.cod)

        document.getElementById("nome").placeholder = mensagem.nme;
        document.getElementById("fabricante").placeholder = mensagem.fabri;
        document.getElementById("quantidade").placeholder = mensagem.quanti;
        document.getElementById("preco").placeholder = mensagem.prec;
        document.getElementById("custo").placeholder = mensagem.cst;
        document.getElementById("descricao").placeholder = mensagem.descri;

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
            const fabricante = document.getElementById("fabricante").value;
            const descricao = document.getElementById("descricao").value;
            const quantidade = document.getElementById("quantidade").value;
            const preco = document.getElementById("preco").value;
            const custo = document.getElementById("custo").value;

            const data = {
                "nome": nome,
                "fabricante": fabricante,
                "descri": descricao,
                "qtda": quantidade,
                "preco": preco,
                "custo": custo,
            };
            console.log(data);
            const response = await api.put('/produtos/' + cod, data);
        }

        inp_btn_salve.onclick = () => {
            alteracao();
        };

        document.addEventListener("DOMContentLoaded", init);
    }
});
    


