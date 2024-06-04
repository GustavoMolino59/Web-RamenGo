class API {
    constructor(url){
        this.url = url
    }

    baseUrl(){
        return this.url
    }
    async  get(route){
        try {
            const response = await fetch(this.url + route, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key' : 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf'
                }
            }); // Envia a solicitação GET
            if (!response.ok) { // Verifica se a resposta é bem-sucedida
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json(); // Converte a resposta para JSON
            var keys = Object.keys(data);
            var primeiraChave = keys[0];
            const dataReturn = data[primeiraChave]
            return dataReturn;
        } catch (error) {
            console.error('Erro de conexão', error);
        }
    }
    
    async  post(route, data){
        try {
            const response = await fetch(this.url + route, {
                method: 'POST', // Método da solicitação
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key' : 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf'
                },
                body: JSON.stringify(data) // CAdicione os dados ao body
            });
            if (!response.ok) { 
                throw new Error('Error - Server response is: ' + response.statusText);
            }
            const responseData = await response.json(); // Converte a resposta para JSON
            return responseData // Exibe os dados no console
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error.message);
        }
    }
}
export const api = new API('https://api-ramengo-27af.onrender.com')

