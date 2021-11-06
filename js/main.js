//#region Forms
const forms = ['start-form', 'survey-form', 'survey-form2', 'survey-form3', 'survey-form4', 'survey-form5', 'survey-form6', 'end-form']; // not necessary 
const form0 = document.getElementById(forms[0]);
const form1 = document.getElementById(forms[1]);
const form2 = document.getElementById(forms[2]);
const form3 = document.getElementById(forms[3]);
const form4 = document.getElementById(forms[4]);
const form5 = document.getElementById(forms[5]);
const form6 = document.getElementById(forms[6]);
const form7 = document.getElementById(forms[7]);
//#endregion Forms

//#region Buttons
const start = document.getElementById('start');

const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const next3 = document.getElementById('next3');
const next4 = document.getElementById('next4');
const next5 = document.getElementById('next5');
const next6 = document.getElementById('next6');

const back1 = document.getElementById('back1');
const back2 = document.getElementById('back2');
const back3 = document.getElementById('back3');
const back4 = document.getElementById('back4');
const back5 = document.getElementById('back5');
//#endregion Buttons

// Toggle 
const why = document.getElementById('why');

//#region Form Transitions
function slideNext(from, to) {
  from.style.left = '-450px';
  to.style.left = '40px';
}
function slidePrev(from, to) {
  from.style.left = '450px';
  to.style.left = '40px';
}
start.onclick = function() {
  slideNext(form0, form1);
  why.style.opacity = '1';
}
back1.onclick = () => slidePrev(form2, form1);
next2.onclick = () => slideNext(form2, form3);
back2.onclick = () => slidePrev(form3, form2);
next3.onclick = () => slideNext(form3, form4);
back3.onclick = () => slidePrev(form4, form3);
next4.onclick = () => slideNext(form4, form5);
back4.onclick = () => slidePrev(form5, form4);
next5.onclick = () => slideNext(form5, form6);
back5.onclick = () => slidePrev(form6, form5);
next6.onclick = () => slideNext(form6, form7);
//#endregion

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

form2.addEventListener('submit', e => {
  e.preventDefault();
	validateCheck();
});

function validateCheck() {
  const radios = document.getElementsByName("rb");
  let formValid = false;

  let i = 0;
  while (!formValid && i < radios.length) {
      if (radios[i].checked) formValid = true;
      i++;        
  }

  //if (!formValid) alert("Must check some option!");
  return formValid;
}

//#region Validate Form1
const form = document.getElementById('survey-form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');

form.addEventListener('submit', e => {
  e.preventDefault();
	checkInputs();
});
function checkInputs() {
  // trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
  const ageValue = Number(age.value.trim()); 

	if(usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
	} 
  else if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  }
  else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  }
  else if(isNaN(ageValue)) {
    setErrorFor(ageValue, 'Not a number');
  }
  else {
    setSuccessFor(email);
    setSuccessFor(username);
    slideNext(form1, form2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
	//const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	//small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
//#endregion