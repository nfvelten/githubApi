# gitApi
Created: 2021-10-20 16:50

 O teste consiste em consultar a API do Github para buscar repositórios, utilizando React JS.
 ## Requisitos:
Os filtros abaixo devem resultar em uma lista de repositórios do Github, não é requisito efetuar paginação, basta trazer os 50 primeiros repositórios.
Observe que só é possível filtrar repositórios por linguagem após digitar algum texto.
1. Filtrar repositórios por texto.
2. Filtrar repositórios por texto + linguagem.
3. Filtrar repositórios por texto + múltiplas linguagens.
4. Mostrar detalhes dos repositórios (nome, descrição, linguagem e link externo).
5. Adicionar ao longo do código comentários que esclareçam a lógica utilizada em suas funções.
6. O layout desta aplicação fica a seu critério, responsividade será um diferencial.
A não conclusão do teste não será desclassificatória, serão avaliados critérios como uso de lógica, conhecimento da tecnologia e organização.
A entrega deve ser feita através de um repositório público no Github.
Adicione um arquivo com instruções para execução do projeto.
Hospedagem do projeto será um diferencial e poderá ser feita em qualquer host de páginas estáticas. (AWS, Github Pages, Vercel e etc) 
## Processo
1. Usei o Next para inicializar o projeto.
2. Apos isso instalei o axios e o material ui.
3. Fiz a configuraçao do axios com o ID e o secret do github, armazenado em uma variavel de ambiente .env.
4. Criei uma funcao para fazer o fetch da API, e armazenei o resultado com o useState.
5. Depois criei um form para poder requisitar o nome e a linguagem do repositorio.
6. Utilizei o useState para poder armazenar os valores do input.
7. Funcao onChange e onSubmit para enviar o formulario e requisitar os repositorios.
8. Mapeei os repositorios com .map e desetruturizei o resultado para pegar os valores {name, description, url, language}.
9. Utilizei um component de card do material ui para poder listar as informaçoes
10. Botao para redirecionar ao repositorio adicionado.
11. Subi o repositorio da aplicaçao para o GitHub.
12. Fiz o deploy pela Vercel.
# Para rodar
1. para rodar a aplicaçao basta utilizar yarn dev na cli