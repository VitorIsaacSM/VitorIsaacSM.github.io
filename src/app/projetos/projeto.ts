export interface Projeto {
    titulo: string;
    descricao: string;
    websiteLink?: string;
    repoLink?: string;
    utilizado: string[];
    gif?: string;
    imagem: string;
    download?: string;
}

export const MEUS_PROJETOS: Projeto[] = [
    {
        titulo: 'Photo-App',
        websiteLink: 'https://api-photo-app.herokuapp.com',
        repoLink: 'https://github.com/VitorIsaacSM/photo-app',
        descricao: 'Uma rede social com o foco em fotografias, poste suas fotos, curta e comente fotos de outros usuarios.',
        gif: 'https://media.giphy.com/media/cKyazfW6OGFd9KSArv/giphy.gif',
        utilizado: ['Angular', 'Node.js', 'Express.js', 'Bootstrap'],
        imagem: '../../assets/photo-app.png'
    },
    {
        titulo: 'Jdv-App',
        websiteLink: 'https://jdv-app.herokuapp.com/',
        repoLink: 'https://github.com/VitorIsaacSM/jdv-app',
        descricao: 'Aplicação web de um jogo da velha, onde você joga contra o computador, contém as dificuldades Fácil, Médio e Difícil.',
        gif: 'https://media.giphy.com/media/cm5yH1EotxneLfsA4Y/giphy.gif',
        utilizado: ['Angular', 'Sass', 'Node.js', 'Express.js', 'Java'],
        imagem: '../../assets/jdv.png'
    },
    {
        titulo: 'To-do-App',
        websiteLink: 'https://angular-todo-list-app.herokuapp.com',
        repoLink: 'https://github.com/VitorIsaacSM/to-do-app',
        descricao: 'Uma aplicação de lista de tarefas simples com cadastro de usuário, login e sessão.',
        gif: 'https://media.giphy.com/media/hrQt5qVOLj601FSX78/giphy.gif',
        utilizado: ['Angular', 'Bootstrap', 'Node.js', 'Express.js'],
        imagem: '../../assets/todo.png'
    },
    {
        titulo: 'Uno-project',
        websiteLink: null,
        repoLink: 'https://github.com/VitorIsaacSM/uno-project',
        descricao: 'Um jogo de UNO por linha de comando, onde você joga contra um bot. Inicialmente um projeto da disciplina de Laboratório de Programação, porém eu adicionei funcionalidades extras como sequências de +2 e +4',
        gif: null,
        utilizado: ['C'],
        imagem: '../../assets/uno.png',
        download: 'https://github.com/VitorIsaacSM/uno-project/raw/master/windows/uno.exe'
    },
    {
        titulo: 'Angular-node-test',
        websiteLink: 'https://angular-node-test-app.herokuapp.com/',
        repoLink: 'https://github.com/VitorIsaacSM/angular-node-test',
        descricao: 'Meu primeiro projeto utilizando Angular, um aplicativo com um Formulário, que lista os itens adicionados. Foi um projeto simples, mas importante pois aprendi a integrar Angular e NodeJS.',
        gif: null,
        utilizado: ['Angular', 'Node.js', 'Express.js'],
        imagem: '../../assets/ng-node.png'
    },
    {
        titulo: 'Hackatona PUCRS Anti-Praga',
        repoLink: 'https://github.com/VitorIsaacSM/antiPraga',
        descricao: 'Aplicação desenvolvida durante a Hackatona de engenharia de software 2019 da PUCRS, à qual fui responsavel pelo backend e banco de dados.',
        utilizado: ['Node.js', 'Express.js', 'MySQL'],
        imagem: '../../assets/antiPraga.png'
    },
    {
        titulo: 'Workshop de Angular',
        repoLink: 'https://github.com/VitorIsaacSM/workshop-angular',
        descricao: 'Um workshop sobre angular o qual eu ministrei, que teve como objetivo passar conhecimentos básicos de uma aplicação usando o framework.',
        utilizado: ['Angular', 'Bootstrap'],
        imagem: '../../assets/workshop.png'
    },
];
