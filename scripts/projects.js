const projectInfo = [
  {
    name: "OwOChat",
    img: "../assets/project-sc/owochat-sc.png",
    desc: "A global chat that owoifies your speech. Featuring an owo-ification level slider, owo and uwu counter, and multiple chat rooms.",
    techs: ["ReactJS", "Firebase"],
    sourceLink: "https://github.com/MelodyLiu012/OwOChat",
    deployedLink: "https://melodyliu012.github.io/OwOChat"
  },
  {
    name: "Pitter",
    img: "../assets/project-sc/pitter-sc.png", 
    desc: "A virtual room where you can write with rain and soothing music.",
    techs: [],
    sourceLink: "https://github.com/MelodyLiu012/Pitter",
    deployedLink: "https://melodyliu012.github.io/Pitter"
  },
  {
    name: "Robot Soccer",
    img: "../assets/project-sc/#",
    desc: "A 3D browser-based split-screen game made with Babylon.js",
    techs: ["BabylonJS"],
    sourceLink: "https://github.com/MelodyLiu012/RobotSoccer",
    deployedLink: "https://melodyliu012.github.io/RobotSoccer"
  },
  {
    name: "Calendar-Note-Tracker",
    img: "../assets/project-sc/#",
    desc: "A non-traditional note-taking app with organization by date. Useful for progress and task tracking, or any note-taking where the date is relevant.",
    techs: ["ReactJS"],
    sourceLink: "https://github.com/MelodyLiu012/Calendar-Note-Tracker",
    deployedLink: "https://melodyliu012.github.io/Calendar-Note-Tracker"
  },
  // {
  //   name: "Gungi",
  //   img: "../assets/project-sc/#",
  //   desc: "An online multiplayer board game based off of popular anime Hunter x Hunter.",
  //   techs: ["ReactJS"],
  //   sourceLink: "https://github.com/MelodyLiu012/Gungi",
  //   deployedLink: "https://melodyliu012.github.io/Gungi"
  // },

]

// class ProjectCard extends HTMLElement {
//   constructor () {
//     super();

//     this.innerHTML = 
//     `<div>
//       <div class="proj-title">OwOChat</div>
//       <img src="../assets/owochat-sc.png">
//       <p>A global chat that owoifies your speech. Includes an owoification level slider + owo and uwu counters.</p>
//       <div class="tech-tag-div">
//         <div class="tech-tag">React</div>
//         <div class="tech-tag">Firebase</div>
//       </div>
//     </div>`
//   }
// }

// Define the new web component
// if ('customElements' in window) {
// 	customElements.define('project-card', ProjectCard);
// }


let newHTML = "";
projectInfo.map( (proj) => {
  let tagsHTML = "";
  proj.techs.map( (tech) => (
    tagsHTML += `<div class="tech-tag">${tech}</div>`
  ))

  newHTML += (
    `
    <div class="project-card">
      <div class="proj-title-div">
        <div class="proj-title">${proj.name}</div>
        <div class="icon-div">
        <a class="link-icon" href="${proj.deployedLink}" target="_blank">
          <img src="../assets/demo-icon.png"  />
        </a>
        <a class="github-icon" href="${proj.sourceLink}" target="_blank">          
          <img src="../assets/github-icon.png" >
        </a>
        </div>
      </div>
      <img src="${proj.img}">
      <p>${proj.desc}</p>
      <div class="tech-tag-div">
        ${tagsHTML}
      </div>
    </div>
    `
  );
});
console.log(newHTML);

document.querySelector("#projects-div").innerHTML = newHTML;
