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
    description: "description",
    primaryImg:  todoLiCalendar ,
    secondayImg:  todoLiList ,
    imgAlt: "A Todo List and Calendar application",
    webLink: " https://todo-li.charlie-richardson.co.uk/landing-page",
    gitHubLink: "https://github.com/Charlie-robin/todo-li",
    mainProject: true
  },

  {
    title: "Vojo",
    description: "description",
    primaryImg:  vojoDash ,
    secondayImg:  vojoLand ,
    imgAlt: "Vojo",
    webLink: "https://vojo-bbe4f.firebaseapp.com/landing-page",
    gitHubLink: "https://github.com/nology-tech/vojo",
    mainProject: true
  },

  {
    title: "Hall of Mirrors",
    description: "description",
    primaryImg:  hallOfMirrorsLand ,
    secondayImg:  hallOfMirrorsDash ,
    imgAlt: "A website of mirrors containing nology coaches with spinning eyes",
    webLink: "https://hall-of-mirrors.charlie-richardson.co.uk/landing-page",
    gitHubLink: "https://github.com/Charlie-robin/hall-of-mirrors",
    mainProject: true
  },

  {
    title: "Help Cascade",
    description:"description" ,
    primaryImg:  helpCascadeDash ,
    secondayImg:  helpCascadeLand ,
    imgAlt: "A timeboxing website with cues when and how to escalate",
    webLink: "http://help-cascade.charlie-richardson.co.uk/",
    gitHubLink: "https://github.com/Charlie-robin/help-cascade",
    mainProject: false
  },

  {
    title: "Norse Morse",
    description: "description",
    primaryImg:  norseMorseText ,
    secondayImg:  norseMorseMorse ,
    imgAlt: "A Norse themed morse code translator",
    webLink: "http://norse-morse.charlie-richardson.co.uk/",
    gitHubLink: "https://github.com/Charlie-robin/morse-coder",
    mainProject: false
  },
  {
    title: "Hostile Aliens",
    description: "description",
    primaryImg:  hostileAliensLand,
    secondayImg:  hostileAliensGame ,
    imgAlt: "A space invader inspired tech test focused on Object oriented programming",
    webLink: "http://hostile-aliens.charlie-richardson.co.uk/",
    gitHubLink: "https://github.com/Charlie-robin/hostile-aliens",
    mainProject: false
  }

];

export default projects;
