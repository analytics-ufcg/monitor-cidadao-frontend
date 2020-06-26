# Monitor Cidadão (front-end)


O Monitor Cidadão é um sistema desenvolvido através da parceria entre a CampinaTec e o laboratório Analytics da Universidade Federal de Campina Grande-PB com finalidade possibilitar aos cidadãos o acompanhamento dos contratos realizados pelos municípios do estado da Paraíba.


## Front-end


Aqui se encontra o front-end da aplicação, que foi desenvolvido em Angular. 
Funciona a partir do back-end localizado nesse [repositório](https://github.com/analytics-ufcg/monitor-cidadao-backend).



## Executando front-end 

 
A execução do front-end Angular pode ser feita com o auxílio do docker ou manualmente.

### Instruções de execução manual

Antes de tudo, garanta que você tenha instalado em sua máquina o **npm** e o **Angular CLI**.

Instale os pacotes necessários (cd monitor-cidadao-frontend):

> npm install

Para executar, basta estar na pasta **monitor-cidadao-frontend** via terminal e inserir o comando:

> ng serve --open

Você pode testar se tudo deu certo com o link abaixo:

>  [http://localhost:4200/home](http://localhost:4200/home)

### Instruções de execução com o Docker 
As etapas abaixo irão executar o back-end e o front-end. Dessa forma, antes de tudo, faça clone do repositório do back-end e o configure de acordo com as instruções da pasta do projeto. 

#### Executando 
Garanta que você tenha o docker e docker-compose instalados e execute os seguintes comandos:
> sudo docker-compose build

Após isso, execute o comando responsável por processar o conteúdo do arquivo de composição e configurar os volumes, redes e contêineres especificados.
> sudo docker-compose up

Você pode testar se tudo deu certo com o link abaixo:
>  [http://localhost:4200/home](http://localhost:4200/home)