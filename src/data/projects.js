import todoLiCalendar from "../assets/img/todo-li-calendar.PNG";
import todoLiList from "../assets/img/todo-li-list.PNG";
import vojoDash from "../assets/img/vojo-dashboard.PNG";
import vojoLand from "../assets/img/vojo-landing.PNG";
import hallOfMirrorsDash from "../assets/img/hall-of-mirrors-dashboard.PNG";
import hallOfMirrorsLand from "../assets/img/hall-of-mirrors-landing.PNG";
import helpCascadeDash from "../assets/img/help-cascade-dashboard.PNG";
import helpCascadeLand from "../assets/img/help-cascade-landing.PNG";
import norseMorseText from "../assets/img/norse-morse-text.PNG";
import norseMorseMorse from "../assets/img/norse-morse-norse.PNG";
import hostileAliensLand from "../assets/img/hostile-aliens-landing.PNG";
import hostileAliensGame from "../assets/img/hostile-aliens-landing.PNG";

const projects = [
  {
    title: "Todo Li",
    description:
      "Originally a todo list application centered around the integration of a database with the utilization of CRUD. Extended with the addition of authentication, private routing and a personal calendar feature.",
    tools: ["react", "firebase"],
    summary: "summary",
    primaryImg: todoLiCalendar,
    secondayImg: todoLiList,
    imgAlt: "A Todo List and Calendar application",
    webLink: " https://todo-li.charlie-richardson.co.uk/landing-page",
    gitHubLink: "https://github.com/Charlie-robin/todo-li",
    mainProject: true,
  },

  {
    title: "Vojo",
    description:
      "Client project, working from validated user stories we produced a prototype application to spec. This allows the user to log in,  fill out a questionnaire and with the addition of a DNA swab kit receive personalized health and dietary advice via the client's algorithm.",
    tools: ["react", "firebase"],
    summary: "summary",
    primaryImg: vojoDash,
    secondayImg: vojoLand,
    imgAlt: "Vojo",
    webLink: "https://vojo-bbe4f.firebaseapp.com/landing-page",
    gitHubLink: "",
    mainProject: true,
  },

  {
    title: "Hall of Mirrors",
    description:
      "Initially focused on functions and events being passed up and down the component tree with props.  Extended with hosting and practical application of REST API's to obtain a random number that defines how many spooky mirrors you will see. Be brave and enter...",
    tools: ["react", "firebase"],
    summary: "summary",
    primaryImg: hallOfMirrorsLand,
    secondayImg: hallOfMirrorsDash,
    imgAlt: "A website of mirrors containing nology coaches with spinning eyes",
    webLink: "https://hall-of-mirrors.charlie-richardson.co.uk/landing-page",
    gitHubLink: "https://github.com/Charlie-robin/hall-of-mirrors",
    mainProject: true,
  },

  {
    title: "Help Cascade",
    description:
      "Self-initiated brief to create a visual help cascade. The website lets you choose how long you need to timebox a problem then will prompt you to escalate when time is up. It gives advice and inspiration while letting you know where you are on the cascade and what steps to take.",
    tools: ["HTML", "CSS/SCSS", "Javascript"],
    summary: "summary",
    primaryImg: helpCascadeDash,
    secondayImg: helpCascadeLand,
    imgAlt: "A timeboxing website with cues when and how to escalate",
    webLink: "http://help-cascade.charlie-richardson.co.uk/",
    gitHubLink: "https://github.com/Charlie-robin/help-cascade",
    mainProject: false,
  },

  {
    title: "Norse Morse",
    description:
      "The only Norse themed morse code translator. The project focuses on the use of objects and array iterators. Text is converted into morse and morse can be converted back. A feature to convert both into runes is in progress.",
    tools: ["HTML", "CSS/SCSS", "Javascript"],
    summary: "summary",
    primaryImg: norseMorseText,
    secondayImg: norseMorseMorse,
    imgAlt: "A Norse themed morse code translator",
    webLink: "http://norse-morse.charlie-richardson.co.uk/",
    gitHubLink: "https://github.com/Charlie-robin/morse-coder",
    mainProject: false,
  },
  {
    title: "Hostile Aliens",
    description:
      "OOP timed tech test. It was specified that this was to be within a single HTML file under 150 lines of code. The aliens consisted of three different classes of ship with similar characteristics but with different values. CSS has been used sparingly to keep it under 150 lines. ",
    tools: ["HTML", "CSS", "Javascript"],
    summary: "summary",
    primaryImg: hostileAliensLand,
    secondayImg: hostileAliensGame,
    imgAlt:
      "A space invader inspired tech test focused on Object oriented programming",
    webLink: "http://hostile-aliens.charlie-richardson.co.uk/",
    gitHubLink: "https://github.com/Charlie-robin/hostile-aliens",
    mainProject: false,
  },
];

export default projects;
