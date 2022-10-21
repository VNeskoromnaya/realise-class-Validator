const form = document.querySelector("#form");
const btnSubmit = document.querySelector("#btnSubmit");
const email = document.querySelector("input[type='email']");
const domain = document.querySelector("input[type='url']");
const date = document.querySelector("input[type='date']");
const phone = document.querySelector("input[type='tel']");

const errorEmail = document.querySelector(".errorEmail");
const errorDomain = document.querySelector(".errorDomain");
const errorDate = document.querySelector(".errorDate");
const errorPhone = document.querySelector(".errorPhone");
const errors = [errorEmail, errorDomain, errorDate, errorPhone];

btnSubmit.addEventListener("click", () => {
  errors.forEach((elem) => {
    elem.innerHTML = "";
  });
  if (checkForm()) {
    let userData = new UserData(
      email.value,
      domain.value,
      date.value,
      phone.value
    );
    console.log(userData);
  }
});

class UserData {
  constructor(email, domain, date, phone) {
    (this.email = email),
      (this.domain = domain),
      (this.date = date),
      (this.phone = phone);
  }
}

class Validator {
  isEmail(emailToCheck) {
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    return mailFormat.test(emailToCheck);
  }

  isDomain(domainToCheck) {
    let domainFormat =
      /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/i;
    return domainFormat.test(domainToCheck);
  }

  isDate(dateToCheck) {
    let dateFormat =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return dateFormat.test(dateToCheck);
  }

  isPhone(phoneToCheck) {
    // let phoneFormat = /^((\+38)+([0-9]){10})$/;
    let phoneFormat =
      /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){8,10}\d$/;
    return phoneFormat.test(phoneToCheck);
  }
}

class ValidatorStatic {
  static isEmail(emailToCheck) {
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    return mailFormat.test(emailToCheck);
  }

  static isDomain(domainToCheck) {
    let domainFormat =
      /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/i;
    return domainFormat.test(domainToCheck);
  }

  static isDate(dateToCheck) {
    let dateFormat =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return dateFormat.test(dateToCheck);
  }

  static isPhone(phoneToCheck) {
    // let phoneFormat = /^((\+38)+([0-9]){10})$/;
    let phoneFormat =
      /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){8,10}\d$/;
    return phoneFormat.test(phoneToCheck);
  }
}

function checkForm() {
  let isEmailValid = checkEmailInput();
  let isDomainValid = checkDomainInput();
  let isDateValid = checkDateInput();
  let isPhoneValid = checkPhoneInput();
  return isEmailValid && isDomainValid && isDateValid && isPhoneValid;
}

function checkEmailInput() {
  let isEmail = false;
  let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  if (email.value == "") {
    errorEmail.innerHTML += "You must enter your email! <br>";
  } else if (!email.value.match(mailFormat)) {
    errorEmail.innerHTML +=
      "Email should be in a correct format (e.g. example@mail.com)";
  } else {
    isEmail = true;
  }
  return isEmail;
}

function checkDomainInput() {
  let isDomain = false;
  let domainFormat =
    /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/i;
  if (domain.value == "") {
    errorDomain.innerHTML += "You must enter your url! <br>";
  } else if (!domain.value.match(domainFormat)) {
    errorDomain.innerHTML +=
      "Url should be in a correct format (e.g. example.com)";
  } else {
    isDomain = true;
  }
  return isDomain;
}

function checkDateInput() {
  let isDate = false;
  if (date.value == "") {
    errorDate.innerHTML += "You must enter the date! <br>";
  } else {
    isDate = true;
  }
  return isDate;
}

function checkPhoneInput() {
  let isPhone = false;
  let phoneFormat =
    /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){8,10}\d$/;
  if (phone.value == "") {
    errorPhone.innerHTML += "You must enter your phone! <br>";
  } else if (!phone.value.match(phoneFormat)) {
    errorPhone.innerHTML +=
      "Phone should be in a correct format (e.g. +380xxxxxxxxx or 0xxxxxxxxx)";
  } else {
    isPhone = true;
  }
  return isPhone;
}
