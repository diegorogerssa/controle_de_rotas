
### Documentação da API

Esta documentação descreve as rotas disponíveis no backend para gerenciar listas. A API permite criar, atualizar, deletar e buscar listas. Abaixo estão os detalhes de cada rota, incluindo os métodos HTTP, endpoints, parâmetros e exemplos de requisições e respostas.

```http
http://localhost:3000/api

```


### Rotas

#### 1. Criar Lista

* **Método:** POST
* **Endpoint:** `/register`
* **Descrição:** Cria uma nova lista.
* **Corpo da Requisição:**

```json
[
	{
		"helper": "John Doe",
		"driver": "Jane Smith",
		"departureTime": "7H00",
		"day_of_the_week": "",
		"day": 12,
		"month": 9,
		"year": 2024
	}
]
```


* **Resposta de Sucesso:**
  ```json
  {
  	"message": "List created"
  }
  ```


#### 2. Deletar Lista

* **Método:** DELETE
* **Endpoint:** `/delete/:id`
* **Descrição:** Deleta uma lista pelo ID.
* **Parâmetros da URL:**

  * [`id`](vscode-file://vscode-app/snap/code/170/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) : O ID da lista a ser deletada.
* **Resposta de Sucesso:**

  ```json
  {
  	"message": "List deleted"
  }
  ```


#### 3. Buscar Listas

* **Método:** GET
* **Endpoint:** `/list`
* **Descrição:** Busca listas com base em parâmetros de consulta.
* **Parâmetros de Consulta:**
  * [`helper`](vscode-file://vscode-app/snap/code/170/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) (string): Nome do ajudante.
  * [`driver`](vscode-file://vscode-app/snap/code/170/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) (string): Nome do motorista.
  * [`day`](vscode-file://vscode-app/snap/code/170/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) (number): Dia do mês.
  * [`month`](vscode-file://vscode-app/snap/code/170/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) (number): Mês do ano.
  * [`year`](vscode-file://vscode-app/snap/code/170/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) (number): ano.
  * [`departureTime`](vscode-file://vscode-app/snap/code/170/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) (string): Hora de partida.
  * [`day_of_the_week`](vscode-file://vscode-app/snap/code/170/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) (string): Dia da semana.
* **Exemplo de Requisição:**
* ```bash
  GET /list?helper=JohnDoe&month=10
  ```


* **Resposta de Sucesso:**
* ```json
  [
  	{
  		"_id": "670329f18e970a1fde029f2c",
  		"helper": "John Doe",
  		"driver": "Jane Smith",
  		"departureTime": "7H00",
  		"day_of_the_week": "Quinta-feira",
  		"day": 12,
  		"month": 9,
  		"year": 2024,
  		"__v": 0
  	}
  ]
  ```


#### 4. Atualizar Lista

* **Método:** POST
* **Endpoint:** `/update/:id`
* **Descrição:** Atualiza uma lista pelo ID.
* **Parâmetros da URL:**
  * [`id`](vscode-file://vscode-app/snap/code/170/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) : O ID da lista a ser atualizada.
* **Corpo da Requisição:**
* ```json
  {
  	"message": "List updated"
  }
  ```
