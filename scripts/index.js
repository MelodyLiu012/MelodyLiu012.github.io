
const scrollToHome = () => {
  document.querySelector('#home').scrollIntoView({ 
    behavior: 'smooth' 
  });
  styleNavBtn(homeBtn);
}
const scrollToAboutMe = () => {
  document.querySelector('#about-me').scrollIntoView({ 
    behavior: 'smooth' 
  });
  styleNavBtn(aboutMeBtn);
}
const scrollToProjects = () => {
  document.querySelector('#projects').scrollIntoView({ 
    behavior: 'smooth' 
  });
  styleNavBtn(projectsBtn);
}
const scrollToContact = () => {
  document.querySelector('#contact').scrollIntoView({ 
    behavior: 'smooth' 
  });
  styleNavBtn(contactBtn);
}


const homeBtn = document.querySelector('#home-btn');
const aboutMeBtn = document.querySelector('#about-me-btn');
const projectsBtn = document.querySelector('#projects-btn');
const contactBtn = document.querySelector('#contact-btn');

const styleNavBtn = (btn) => {
  if (btn.id == 'home-btn') homeBtn.classList.add('selectedPageBtn');
  else homeBtn.classList.remove('selectedPageBtn');

  if (btn.id == 'about-me-btn') aboutMeBtn.classList.add('selectedPageBtn');
  else aboutMeBtn.classList.remove('selectedPageBtn');

  if (btn.id == 'projects-btn') projectsBtn.classList.add('selectedPageBtn');
  else projectsBtn.classList.remove('selectedPageBtn');

  if (btn.id == 'contact-btn') contactBtn.classList.add('selectedPageBtn');
  else contactBtn.classList.remove('selectedPageBtn');
}