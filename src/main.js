document.addEventListener('DOMContentLoaded', function () {
    const api = axios.create({
        baseURL: "https://tesstw.onrender.com",
    });

    const dpai = "linhas";
    const linhas_prod = document.querySelector(`.${dpai}`);
    // console.log("linhas_prod:", linhas_prod);

    async function consultar() {
        try {
            if (!linhas_prod) {
                console.error(`Element with class "${dpai}" not found in the document.`);
                return;
            }

            const response = await api.get('/produtos');
            const dados = response.data.result;

            // data.forEach(element => {
                for (let i = 0; i < Math.min(dados.length, 21); i++) {
                
                const element = dados[i];
    
                const linhas = document.createElement("div");
                linhas.setAttribute("class", "linhas");

                const id = document.createElement("div");
                id.setAttribute("class", "id");
                id.innerHTML = element.cod;
                linhas.appendChild(id);

                const nome = document.createElement("div");
                nome.setAttribute("class", "nome");
                nome.innerHTML = element.nome; 
                linhas.appendChild(nome);

                
                const fabricante= document.createElement("div");
                fabricante.setAttribute("class", "fabricante");
                fabricante.innerHTML = element.fabricante;
                linhas.appendChild(fabricante);

                
                const quantidade = document.createElement("div");
                quantidade.setAttribute("class", "quantidade");
                quantidade.innerHTML = element.qtda;
                linhas.appendChild(quantidade);

                
                const custo = document.createElement("div");
                custo.setAttribute("class", "custo");
                custo.innerHTML = element.custo;
                linhas.appendChild(custo);

                
                const preco = document.createElement("div");
                preco.setAttribute("class", "preco");
                preco.innerHTML = element.preco;
                linhas.appendChild(preco);

                
                const descricao = document.createElement("div");
                descricao.setAttribute("class", "descricao");
                descricao.innerHTML = element.descri.slice(0,10)
                linhas.appendChild(descricao);

                const data = document.createElement("div");
                data.setAttribute("class", "data");
                data.innerHTML = element.data.slice(0,19)
                linhas.appendChild(data);

                // Repeat the process for other elements...

                
                linhas_prod.appendChild(linhas);
                console.log(linhas_prod)
              
                }  
        } catch (error) {
            console.error("Error:", error);
        }
    }

    consultar();
});