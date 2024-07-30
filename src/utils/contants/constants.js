import notesImg from '../images/notes.svg'
import weatherImg from '../images/weather.svg';
import deliveryImg from '../images/delivery.svg';
import linkImg from '../images/link.svg';
import ticTacToeImg from '../images/tictactoe.svg';
import githubIcon from '../images/github.png'
import linkedinIcon from '../images/linkedin.png'
import instaIcon from '../images/instagram.png'
import mediumIcon from '../images/medium.png'
import emailIcon from '../images/email.png'

export const skillset = [
    {
        id:1,
        name : "Javascript",
        image : "./src/utils/images/javascript.png"
    },
    {
        id:2,
        name : "ReactJS",
        image : "./src/utils/images/react.png"
    },
    {
        id:3,
        name : "Redux Tool Kit",
        image : "./src/utils/images/redux.png"
    },
    {
        id:4,
        name : "NodeJS",
        image : "./src/utils/images/node.png"
    },
    {
        id:5,
        name : "Angular",
        image : "./src/utils/images/angular.png"
    },
    {
        id:6,
        name : "MongoDB",
        image : "./src/utils/images/mongodb.png"
    },
    {
        id:7,
        name : "VS Code",
        image : "./src/utils/images/vscode.png"
    },
    {
        id:8,
        name : "CSS",
        image : "./src/utils/images/css.png"
    },
    {
        id:9,
        name : "HTML",
        image : "./src/utils/images/html.png"
    },
]

export const projects = [
    {
        id :1,
        name: "NOTES APP",
        githubUrl:"https://github.com/ParvathySree/notes-app",
        webUrl:"https://notes-app-qjc5.vercel.app/",
        skills: "ReactJS, ExpressJS, PostgreSQL, MaterialUI",
        img: notesImg
    },
    {
        id :2,
        name: "WEATHER APP",
        githubUrl:"",
        webUrl:"https://weather-app-5fe73.web.app/",
        skills: "ReactJS, Open Weather Map API",
        img:weatherImg
    },
    {
        id :3,
        name: "GROCERY DELIVERY APP",
        githubUrl:"https://github.com/ParvathySree/delivery-app",
        webUrl:"",
        skills: "ReactJS, ExpressJS, Redux Tool Kit, MongoDB, Material UI",
        img:deliveryImg
    },
    {
        id :4,
        name: "LINK SHORTNER",
        githubUrl:"https://github.com/ParvathySree/Link-Shortner-App",
        webUrl:"",
        skills: "ReactJS, ExpressJS, MongoDB, Material UI",
        img:linkImg
    },
 
    {
        id :5,
        name: "TIC TAC TOE",
        githubUrl:"https://github.com/ParvathySree/TicTacToe-React",
        webUrl:"https://parvathysree.github.io/TicTacToe-React/",
        skills: "ReactJS",
        img:ticTacToeImg
    },
 

]

export const socials = [
    {
        id:1,
        icon:githubIcon,
        link:"https://github.com/ParvathySree"
    },
    {
        id:2,
        icon:linkedinIcon,
        link:"https://www.linkedin.com/in/sreeparvathypl/"
    },
    {
        id:1,
        icon:instaIcon,
        link:"https://www.instagram.com/___parvathy/"
    },
    {
        id:1,
        icon:mediumIcon,
        link:"https://medium.com/@plsreeparvathy"
    },
    {
        id:1,
        icon:emailIcon,
        link:"mailto:plsreeparvathy@gmail.com"
    },
]