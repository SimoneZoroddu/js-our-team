console.log('scripts');

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const rowEl = document.querySelector('.row')
rowEl.innerHTML = renderMarkup(teamMembers)


const formEl = document.querySelector('.form')
const nameFieldEl = document.querySelector('.nameField')
const roleFieldEl = document.querySelector('.roleField')
const emailFielEl = document.querySelector('.emailFiel')
const imgFieldEl = document.querySelector('.imgField')


formEl.addEventListener('submit', function (e) {
  e.preventDefault()
  const name = nameFieldEl.value
  //console.log(name);
  const role = roleFieldEl.value
  const email = emailFielEl.value
  const img = imgFieldEl.value
  teamMembers.push({name, role, email, img})
  //console.log({name, role, email, img});
  rowEl.innerHTML = renderMarkup(teamMembers)
})

//console.log(teamMembers);