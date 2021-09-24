import "bootstrap";
import "./style.css";

//Variables
const CARDNUMBER = document.querySelector("#cardNumber");
const CVC = document.querySelector("#cardCVC");
const AMOUNT = document.querySelector("#amount");
const FIRSTNAME = document.querySelector("#fname");
const LASTNAME = document.querySelector("#lname");
const CITY = document.querySelector("#city");
const STATE = document.querySelector("#state");
const POSTALCODE = document.querySelector("#postal");

window.onload = () => {
  sendButton();
  isValidNumber(CARDNUMBER);
  isValidNumber(CVC);
  isValidNumber(AMOUNT);
  isValidText(FIRSTNAME);
  isValidText(LASTNAME);
  isValidText(CITY);
  isValidText(STATE);
  isValidNumber(POSTALCODE);
};

const isValidText = element => {
  element.addEventListener("input", event => {
    checkOnlyText(element.value) ? validInput(element) : invalidInput(element);
  });
};

const isValidNumber = element => {
  element.addEventListener("input", event => {
    checkOnlyNumber(element.value)
      ? validInput(element)
      : invalidInput(element);
  });
};

const invalidInput = input => {
  input.style.background = "";
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
};
const validInput = input => {
  input.style.background = "";
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};

const checkOnlyText = text => {
  return /^[a-zA-Z ]+$/.test(text);
};
const checkOnlyNumber = text => {
  return /^[0-9 ]+$/.test(text);
};

const sendButton = () => {
  document.querySelector("#send").addEventListener("click", event => {
    event.preventDefault();

    if (
      CARDNUMBER.value == "" ||
      CVC.value == "" ||
      AMOUNT.value == "" ||
      FIRSTNAME.value == "" ||
      LASTNAME.value == "" ||
      CITY.value == "" ||
      STATE.value == "" ||
      POSTALCODE.value == ""
    ) {
      let alert = document.createElement("div");
      let alertMessage = document.querySelector("#alert");
      if (alertMessage.innerHTML != "") {
        alertMessage.removeChild(alertMessage.firstChild);
      }
      alert.innerHTML = "You should fill up what you left empty";
      alert.classList.add("alert", "alert-danger", "border-danger");
      alert.id = "alert";
      alertMessage.appendChild(alert);
    }
    if (CARDNUMBER.value == "") {
      CARDNUMBER.style.background = "#fcb6bb";
    }
    if (CVC.value == "") {
      CVC.style.background = "#fcb6bb";
    }
    if (AMOUNT.value == "") {
      AMOUNT.style.background = "#fcb6bb";
    }
    if (FIRSTNAME.value == "") {
      FIRSTNAME.style.background = "#fcb6bb";
    }
    if (LASTNAME.value == "") {
      LASTNAME.style.background = "#fcb6bb";
    }
    if (CITY.value == "") {
      CITY.style.background = "#fcb6bb";
    }
    if (STATE.value == "") {
      STATE.style.background = "#fcb6bb";
    }
    if (POSTALCODE.value == "") {
      POSTALCODE.style.background = "#fcb6bb";
    }
  });
};
