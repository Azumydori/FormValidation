import "bootstrap";
import "./style.css";

const CARDNUMBER = document.querySelector("#cardNumber");
const CVC = document.querySelector("#CVC");
const AMOUNT = document.querySelector("#amount");

const FIRSTNAME = document.querySelector("#firstName");
const LASTNAME = document.querySelector("#lastName");

const CITY = document.querySelector("#city");
const POSTALCODE = document.querySelector("#postalCode");
const STATE = document.querySelector("#inputState");
const SEND = document.querySelector("#sendForm");

window.onload = () => {
  SEND.addEventListener("submit", event => {
    event.preventDefault();
  });
  checkName(FIRSTNAME);
  checkLName(LASTNAME);
  checkAmount(AMOUNT);
  checkCVC(CVC);
  checkCity(CITY);
  checkState(STATE);
  checkPostalCode(POSTALCODE);
  checkCreditCardNumber(CARDNUMBER);
};

const isString = text => {
  return /^[a-zA-Z]+$/.test(text);
};
const isNumber = text => {
  return /^[0-9]+$/.test(text);
};

const VALIDINPUT = event => {
  event.classList.remove("is-invalid");
  event.classList.add("is-valid");
};
const INVALIDINPUT = event => {
  event.classList.remove("is-valid");
  event.classList.add("is-invalid");
};

const checkName = () => {
  FIRSTNAME.addEventListener("focusout", event => {
    if (isString(FIRSTNAME.value)) {
      return VALIDINPUT(FIRSTNAME);
    } else {
      return INVALIDINPUT(FIRSTNAME);
    }
  });
};

const checkLName = element => {
  element.addEventListener("focusout", event => {
    if (isString(LASTNAME.value)) {
      return VALIDINPUT(LASTNAME);
    } else {
      return INVALIDINPUT(LASTNAME);
    }
  });
};

const checkAmount = element => {
  AMOUNT.addEventListener("focusout", event => {
    if (isNumber(AMOUNT.value) && AMOUNT.value > 0) {
      return VALIDINPUT(AMOUNT);
    } else {
      return INVALIDINPUT(AMOUNT);
    }
  });
};

const checkCVC = () => {
  CVC.addEventListener("focusout", event => {
    if (
      (isNumber(CVC.value) && CVC.value.length <= 3) ||
      (CVC.value.length <= 4 && CVC > 0)
    ) {
      return VALIDINPUT(CVC);
    } else {
      return INVALIDINPUT(CVC);
    }
  });
};

const checkPostalCode = () => {
  POSTALCODE.addEventListener("focusout", event => {
    if (
      (isNumber(POSTALCODE.value) && POSTALCODE.value.length == 5) ||
      POSTALCODE.value.length == 10
    ) {
      return VALIDINPUT(POSTALCODE);
    } else {
      return INVALIDINPUT(POSTALCODE);
    }
  });
};

const checkCity = () => {
  CITY.addEventListener("focusout", event => {
    if (isString(CITY.value)) {
      return VALIDINPUT(CITY);
    } else {
      return INVALIDINPUT(CITY);
    }
  });
};

const checkState = () => {
  STATE.addEventListener("focusout", event => {
    if (isString(STATE.value)) {
      return VALIDINPUT(STATE);
    } else {
      return INVALIDINPUT(STATE);
    }
  });
};

const checkCreditCardNumber = () => {
  CARDNUMBER.addEventListener("focusout", event => {
    if (
      (isNumber(CARDNUMBER.value) && CARDNUMBER.value.length <= 16) ||
      CARDNUMBER.value.length == 19
    ) {
      return VALIDINPUT(CARDNUMBER);
    } else {
      return INVALIDINPUT(CARDNUMBER);
    }
  });
};
