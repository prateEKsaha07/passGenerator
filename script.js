const password_box = document.getElementById("password");
const length = 12;
// console.log(password_box);

const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowercase = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "0123456789";
const symbols ="!@#$%^&*()_+{}|:?[]\;',./";

function create_password(){
    let password =" ";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    console.log(password);
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    console.log(password);
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    console.log(password);

    cmd_chars = uppercase + lowercase + symbols + numbers;   

    while(length > password.length){
        password += numbers[Math.floor(Math.random*cmd_chars.length)];
    }
    console.log(password);
} 
create_password();

// code by prateek saha