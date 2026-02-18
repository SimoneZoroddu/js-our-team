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
const emailFieldEl = document.querySelector('.emailFiel')
const imgFieldEl = document.querySelector('.imgField')


formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  renderNewMarkup()
})

//console.log(teamMembers);

// prova con trigger with keypress
// funziona ma lo mette all inizio invece con add lo mette alla fine
const inputEl = document.querySelectorAll('input')

for (let i = 0; i < inputEl.length; i++) {
  const singleInput = inputEl[i];
  singleInput.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {  // questo if e da mettere subito per dire che l evento (in questo caso keypress.. pressione del tasto)é uguale a 'Enter' allora si applicano le regole sotto
      e.preventDefault()
      console.log('funziona con l enter');

      const name = nameFieldEl.value
      const role = roleFieldEl.value
      const email = emailFieldEl.value
      const img = imgFieldEl.value

      rowEl.insertAdjacentHTML("afterbegin", renderMarkup([{ name, role, email, img }]))
    }
  })
}


const button_addEl = document.querySelector('.button_add')

button_addEl.addEventListener('click', function () {
  //console.log('funziona il click');
  if (formEl.classList.contains('d-none')){
    //console.log('e un blocco');
    formEl.classList.remove('d-none')
    button_addEl.innerHTML = 'Reclick for hide all'
  } else {
    formEl.classList.add('d-none')
    button_addEl.innerHTML = 'Want to join our team? Press here'
}
})