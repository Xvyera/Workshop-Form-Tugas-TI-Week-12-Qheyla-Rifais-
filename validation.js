const form = document.getElementById("form")
const message = document.getElementById("message");
const txtname = document.getElementById("txtname")
const txtemail = document.getElementById("txtemail")

function resetForm() {
    document.getElementById("form").reset();
}

function SubmitForm(event) {
    event.preventDefault(); 

    if (txtname.value.trim() == "" || txtemail.value.trim() == "") {
        message.innerHTML = "Please fill in your name and email.";
        message.style.backgroundColor = "#EECCCC";
        message.style.color = "black";
        message.style.padding = "10px 20px";
        message.style.margin = "4px";
        
    } else {
        message.innerHTML = "Thank you for your interest in our workshop. We will send you a confirmation mail if your name is added to the guest list.";
        message.style.backgroundColor = "#CCEECC";
        message.style.color = "black";
        message.style.padding = "10px 20px";
        message.style.margin = "4px";
       
    }
}

