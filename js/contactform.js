
const name = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const address = document.getElementById("address");
const error = document.getElementById("error");
const submitButton = document.querySelector("button");
const contactForm = document.querySelector("contact-form");



function formValidation() {

    let nameAlert = document.querySelector("#name-alert");
    let subjectAlert = document.querySelector("#subject-alert");
    let emailAlert = document.querySelector("#email-alert");
    let addressAlert = document.querySelector("#address-alert");
    let emailValidation = email.value;
    let atpos = emailValidation.indexOf("@");
    let dotpos = emailValidation.lastIndexOf(".");


    if (name.value == "") {
        nameAlert.innerHTML = `<p>field required</p>`;
        event.preventDefault();

    }

    if (subject.value.length <= 10) {
        subjectAlert.innerHTML = `<p>subject must have more than 10 letters</p>`;
        event.preventDefault();

    }

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailValidation.length) {
        emailAlert.innerHTML = `<p>Add a valid email account</p>`;
        event.preventDefault();

    }

    if (address.value.length <= 25) {
        addressAlert.innerHTML = `<p>address must have more than 25 letters</p>`;
        event.preventDefault();

    }

    else {
        return true;
    }

}

