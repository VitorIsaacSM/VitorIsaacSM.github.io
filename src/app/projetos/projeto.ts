export interface Projeto {
    titulo: string;
    descricao: string;
    websiteLink?: string;
    repoLink?: string;
    utilizado: string[];
    gif?: string;
    imagem: string;
}

export const MEUS_PROJETOS: Projeto[] = [
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
    }
]