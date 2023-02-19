export const data = [
  {
    id: 0,
    name: 'Rom Hacking',
    type: 'other',
    mini_descript: '',
    descript:
      'O projeto de rom hacking é uma edição de um jogo, originalmente desenvolvido pela SEGA o jogo chamado Kid Chameleon é um jogo labirinto e diversos mapas... Um desenvolvedor do github fez um "disassembly" no arquivo binário do jogo com isso ele disponibilizou a destruturação em linguagem assembly para quem quiser realizar edições no jogo, junto com ferramentas desenvolvidas por próprios programadores para edição de "mapas, blocos, backgroud do jogo" e um editor hexadecimal para alterar valores em endereços específicos eu realizei o desenvolvimento da minha própria hack rom, intitulada como "Kid Chameleon The Last Showdown" tem seus próprios mapas, paletta de cores e atalhos, o projeto foi realizado por min, porém, com a ajuda de toda uma comunidade por trás do discord oficial do kid chameleon.  Contudo, esse projeto não envolveu uma lógica de programação avançada, pois como as principais funcionalidades do editor para mapas do kid chameleon abstraia grande parte da complexidade do assembly, fazendo que me precupasse apenas com o design dos mapas e da construção da rom hack, com isso, foi meu primeiro trabalho e contato com design, que me fez ter vontade de me tornar um desenvolvedor web.',
    project:
      'Nesse projeto foi utilizado, Editor hexadecimal, Assembly, e Criatividade de Design',
    skills: ['Assembly'],
    about: 'Veja um pouco mais sobre o projeto:',
    links: [
      'https://www.romhacking.net/hacks/5018/',
      'https://www.youtube.com/watch?v=RPqi99KjSD8&ab_channel=Christodoulopoulos',
      'https://github.com/MarceloDevCruz/kid-chameleon-the-last-showdown',
    ],
    image: '',
  },
  {
    id: 1,
    name: 'Consumindo API',
    type: 'backend',
    mini_descript: '',
    descript:
      'Utilizando os conceitos dos cursos e da faculdade, elaborei uma página html para exibir os dados relacionados a COVID-19 de um determinado estado do Brasil, a página web contem um campo input para o usuário digitar CEP que deseja pesquisar, por meio do JavaScript validando o campo de CEP e incluindo a máscara de CEP corretamente. Através da API de CEP consultando o estado pesquisado e passando-o como parâmetro da requisição para a API do COVID-19 e exibindo os dados de retorno na mesma página onde foi digitado o CEP.',
    project: 'Nesse projeto foi utilizado, JavaScript, Css, Html.',
    skills: ['JavaScript', 'css', 'html', 'fetch', 'api'],
    about: 'Veja um pouco mais sobre o projeto:',
    links: [
      'https://luminous-nasturtium-a35da4.netlify.app/',
      'https://github.com/MarceloDevCruz/dw2A4/tree/master/Atividades/A4',
    ],
    image: '',
  },
  {
    id: 2,
    name: 'Mercado - Estrutura de Dados',
    type: 'backend',
    mini_descript: '',
    descript:
      'Projeto da disciplina de Estrutura de dados onde tivemos que desenvolver um sistema em linguagem C para o caixa do mercado com controle de entrada e saida dos itens do mercado, para isso, tivemos que obrigatóriamente utilizar algumas estruturas de dados conhecidas pelo mercado, como a Fila e a Pilha, além de utilizar busca binária para sessão de log do usuário no sistema além de utilizar e implementar o algoritmo de quick sort para ordenação de itens, também utilizando novos requisistos, utilizei métodos para leitura, escrita e remoção de arquivos de documento. O sistema foi criado como uma aplicação desktop que utiliza de um terminal para a sua execução.',
    project:
      'Nesse projeto foi utilizado, Estrutura de Dados, pilha e fila, linguagem de programação C.',
    skills: ['C', 'pilha', 'fila', 'Estrutura de Dados'],
    about: 'Veja um pouco mais sobre o projeto:',
    links: [
      'https://github.com/MarceloDevCruz/Estrutura-de-dados-em-C',
      'https://www.youtube.com/watch?v=oLinYmxOZHk&ab_channel=Christodoulopoulos',
    ],
    image: '',
  },
  {
    id: 3,
    name: 'Comente Sobre',
    type: 'backend',
    mini_descript: '',
    descript:
      'Projeto que fiz utilizando a arquitetura de software MVC Model View Controller, Comente-sobre é um CRUD que tem autenticação de usuários no sistema onde usei o banco de dados MySQL para persistir os dados de login e de comentários de post dos projeto, as funcionalidades desse projeto consiste em, escrever um posto qualquer com um título e uma descrição, ou seja o comentário que você deseja fazer para o seu post e com isso você pode compartilhar para outros usuários que tenham uma conta o seu post, você também tem a opção de editar, e excluir seus post, na página home você pode encontrar todos os post de todos os outros usúarios, também foi realizado features de ordenação dos post, dos mais antigos até os mais recentes, e ainda uma feature de busca onde o ORM vai filtrar tanto buscas com o título quanto buscas dentro do comentário do usuário. Na persistencia de dados foi usado o pacote do bcrypts para criptografar a senha passada para o banco de dados para requisistos de segurança. Além disso, para esse projeto pretendo adicionar outras novas features no futuro, como funcionalidade de like e também de comentário em um determinado post.',
    project:
      'Para desenvolver esse projeto foi usado: NodeJS, Bootstrap ,bcrypts, express, handlebars, MySql, sequelize, validator e outras dependências...',
    skills: [
      'NodeJs',
      'mvc',
      'bootstrap',
      'SQL',
      'MySql',
      'bcrypt',
      'express',
      'handlebars',
      'sequelize',
      'validator',
    ],
    about: 'Veja um pouco mais sobre o projeto:',
    links: ['https://github.com/MarceloDevCruz/comente-sobre'],
    image: '',
  },
  {
    id: 4,
    name: 'Unsplashgram - API',
    type: 'backend',
    mini_descript:
      'Unsplashgram é uma rede social feita em NodeJs e ReactJs, e com o banco de dados MongoDb, foi projetado pensando em fullstack, usando no banco de dados mongoDb com uma instância em cloud, o MongoDb Atlas para armazenar posts e fotos dos usuários, ele tem as funcionalidades de comentários, likes, postar novas fotos e fazer update do usuário, além de login e registro.',
    descript:
      'Foi criada uma api para o unsplashgram em NodeJs com express onde aprendi todos os verbos http GET POST PUT e DELETE colocando em prática ao longo do projeto, como por exemplo métodos de atualização de um usuário, com o PUT, método de retornar todos os post da página home, com o GET, deletar um post com o DELETE, e também enviar um novo post com o verbo POST, para a estrutura de páginas foi usado o MVC, onde o model foi controlado com a ORM mongoose, onde faz verificações nos dados antes de mandar para o banco de dados, é uma ótima alternativa para ter um melhor controle em banco de dados não relacionais, para o controller foram feitas as regras de negócio do projeto, basicamente foi tratado como os dados seria tratados e como iriam proceder, e também por último o view, que foi aplicado separado, que é a própria arquitetura front-end... Além das pastas dos models e controllers, foram criados middlewares, para verificação de dados e validações de informações repassadas do usuário para o sistema, também uma pasta apenas para o tratamento e gerenciamento de rotas. Foi construido um sistema de login cadastro e autenticação de usuários, preocupado com a segurança do sistema utilizei a depedência bcryptjs, no qual cuida da segurança de senha dos usuários, criando um hash onde ele gerência as senhas para o sistema, assim, fazendo que nunca seja exposto senhas dos usuários em um possível ataque no banco de dados, foi usado também o jsonwebtoken, que é uma estrutura protegida com criptografia, pelo qual dados passam pelo mesmo fazendo assim que o sistema seja capaz de identificar a autenticidade de um usuário pelo token que é salva no próprio localstorage do navegador do usuário.',
    project:
      'Para realizar esse projeto foi usado as seguintes tecnologias: node, express, MVC, bcryptjs, jsonwebtoken, .env, mongoose, multer, nodemon e Postman para teste de rotas.',
    skills: [
      'NodeJs',
      'express',
      'mvc',
      'bcryptjs',
      'jsonwebtoken',
      '.env',
      'mongoose',
      'multer',
      'postman',
    ],
    about: '',
    links: [
      'https://github.com/MarceloDevCruz/instagram/tree/main/backend',
      'https://unplashgram-api.onrender.com/',
    ],
    image: '',
  },
  {
    id: 5,
    name: 'Worksheets - CRUD',
    type: 'frontend',
    mini_descript: '',
    descript:
      'Projeto em react onde usei CRUD, "Create, Read, Update e Delete", uma pequena aplicação de criação de Worksheets utilizando a biblioteca React e suas bases (React Router, Hooks e custom hooks, context) e também banco de dados em cloud Firebase do google, além de fazer autenticação de novos usuários, para esse projeto usei uma estrutura de páginas separadas em public e src, onde fiz da forma de como se encontra no mercado de trabalho, criando pastas separadas para cada contexto de utilização Além disso, fiz todo o projeto estruturando o código em inglês que também é uma abordagem feita no mercado de trabalho atualmente, também o projeto está responsivo para todas as telas utilizadas hoje em dia, além de um design minimalista e criativo.',
    project:
      'Nesse projeto foi utilizado, html, css, javascript, es6, React, React router, context, Firebase, CRUD',
    skills: ['ReactJs', 'Firebase', 'crud', 'context', 'css modules'],
    about: 'Veja um pouco mais sobre o projeto:',
    links: [
      'https://github.com/MarceloDevCruz/worksheets-react',
      'https://udockers-react-worksheets.netlify.app/',
    ],
    image: '',
  },
  {
    id: 6,
    name: 'Pomodoro APP',
    type: 'frontend',
    mini_descript: '',
    descript:
      'Pomodoro é uma técnica para aumentar a potência dos estudos, ele se baseia em dividir o tempo de suas tarefas, em pausas curtas e longas , além disso, o projeto foi realizado para acrescentar a funcionalidade de edição do tempo do pomodoro, tanto para tarefas quanto para pausas curtas e longas, após o crônometro do tempo chegar a 0, será ativado o alarme que tocará indicando qual será a sua próxima tarefa no qual terá que realizar, nesse projeto, tentei aprimorar minhas habilidades de sass e css, com o design mais interessante e na adição de backgrounds vetorizados que da o aspecto mais modernos para sites, também na parte de responsividade tentei focar não só em apenas um padrão pré-definidos de telas, mas sim na medida em que o site poderia quebrar ou soar estranho, também utilizei o eslint e prettier para a padronização do código.',
    project:
      'Para realizar esse projeto foi usado as seguintes tecnologias: reactJs, sass, eslint, prettier, figma, context, redux, react-icons',
    skills: ['ReactJs', 'sass', 'eslint', 'prettier', 'figma', 'context'],
    about: 'Veja um pouco mais sobre o projeto:',
    links: [
      'https://github.com/MarceloDevCruz/pomodoro-app',
      'https://mfc-pomodoro.netlify.app/',
    ],
    image: '',
  },
  {
    id: 7,
    name: 'TMDB Consumindo API',
    type: 'frontend',
    mini_descript: '',
    descript:
      'Projeto e desafio do curso de ReactJs proposto para o consumo da API TMDB, uma api gratuita de infomações de filmes internacionais, para esse projeto foi criado componentes e páginas especificas para cada função do site, para a inicialização do projeto foi usado o vite, que propõe uma criação e build de projetos mais rápidas e também de menor custo computacional do que o CRA.',
    project:
      'Nesse projeto foi utilizado, html, css, javascript, es6, React, React router, vite, Consume de API',
    skills: ['ReactJs', 'api', 'vite', 'react-router', 'sass'],
    about: 'Veja um pouco mais sobre o projeto:',
    links: [
      'https://github.com/MarceloDevCruz/react-tmdb',
      'https://react-tmdb-mfc.netlify.app/',
    ],
    image: '',
  },
  {
    id: 8,
    name: 'Gerador de senhas',
    type: 'frontend',
    mini_descript: '',
    descript:
      'Projeto em ReactJs, junto com sass, um pré-processador css e também eslint junto com prettier que facilitam na produtividade e padronização de código prototipado com o Figma, o gerador de senhas, realiza a tarefa de criar uma senha aleatória para o usuário, facilitando o trabalho de segurança da informação ao realizar uma senha forte composta de letras, números e simbolos, além disso tem a capacidade de escolher quantos caracteres específicos para a criação da senha além de especificar quais conjuntos de caracteres serão usados para a criação. totalmente responsivo foi pensado em praticar minhas habilidades em reactJs, usando um simples custom hook além da utilização de contextos com o context provider, além de adicionar algumas ferramentes para qualidade do código o eslint e o prettier, além do editor config, também seguindo os padrões BEM e também 7-1 architeture para padronização do css.',
    project:
      'Para realizar esse projeto foi usado as seguintes tecnologias: node, reactJs, sass, eslint, prettier, figma, context, react-icons',
    skills: [
      'ReactJs',
      'NodeJs',
      'sass',
      'eslint',
      'prettier',
      'figma',
      'context',
    ],
    about: 'Veja um pouco mais sobre o projeto:',
    links: [
      'https://github.com/MarceloDevCruz/password-generator',
      'https://password-generate-mfc.netlify.app/',
    ],
    image: '',
  },
  {
    id: 9,
    name: 'Unsplashgram - FrontEnd',
    type: 'frontend',
    mini_descript:
      'Unsplashgram é uma rede social feita em NodeJs e ReactJs, e com o banco de dados MongoDb, foi projetado pensando em fullstack, usando no banco de dados mongoDb com uma instância em cloud, o MongoDb Atlas para armazenar posts e fotos dos usuários, ele tem as funcionalidades de comentários, likes, postar novas fotos e fazer update do usuário, além de login e registro.',
    descript:
      'Frontend criado para a api unsplashgram, com a tecnologia ReactJs para componentização, router-dom, para criar uma página SPA, junto com sass para pré-processar o css, , nesse projeto eu faço o consumo da API que criei, uma rede social com design responsivo e prototipado com o figma, inicialmente foi criada páginas para registro, login, home, edição de usuário, post individual, e criação de post. Foi usado Redux para gerêncimento de dados e eventos globais na aplicação, com o auxilio do redux-devtools, foi usado padrão de páginas service/slice para melhorar a padronização e facilitação do código na hora de implementação do redux e para adição futuras de features, além disso também foi usado custom hooks para autorização do usuário no sistema, e também na busca de post com query.',
    project:
      'Para realizar esse projeto foi usado as seguintes tecnologias: ReactJs, react-icons, react-redux, vite, sass, postcss, figma.',
    skills: ['ReactJs', 'context', 'sass', 'postcss', 'figma'],
    about: 'Veja um pouco mais sobre o projeto:',
    links: [
      'https://github.com/MarceloDevCruz/instagram/tree/main/frontend',
      'https://unsplashgram.netlify.app/login',
    ],
    image: '',
  },
  {
    id: 10,
    name: 'Yugioh-commerce',
    type: 'frontend',
    mini_descript: '',
    descript:
      'Projeto realizado em reactJs, usando Router dom, context api para manipulação de estados globais, e também axios para requisições assicronas, yugioh é um card game baseado no anime e manga do mesmo nome, onde existe diversos tipos de cards, criaturas de raça e cartas especiais, no total existem mais de 12000 cards e para esse projeto foi pensado na utilização e implementação do recurso de paginação, também filtragem dos tipos de cartas, além disso para praticar minhas habilidades de lógica de programação mais especificamente métodos de array, como filter, map e criação de Arrays literais, também fiz a implementação de temas de paleta de cores onde tem o tema padrão light, e o tema dark, o projeto está totalmente responsivo, foi planejado uma prototipação de baixa fidelidade para ter apenas noção de como poderia ficar o projeto.',
    project:
      'Para realizar esse projeto foi usado as seguintes tecnologias: reactJs, sass, eslint, prettier, figma, context, react-icons, axios.',
    skills: [
      'ReactJs',
      'sass',
      'eslint',
      'prettier',
      'figma',
      'context',
      'pagination',
      'axios',
      'figma',
      'themes',
    ],
    about: 'Veja um pouco mais sobre o projeto:',
    links: [
      'https://github.com/MarceloDevCruz/Yugioh-commerce',
      'https://yugioh-shop-mfc.netlify.app/',
    ],
    image: '',
  },
];
