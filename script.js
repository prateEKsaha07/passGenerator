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
    console.log(cmd_chars);

    while(length > password.length){
        password += cmd_chars[Math.floor(Math.random()*cmd_chars.length)];
    }
    console.log(password);
    password_box.value = password;
} 
// the copy password function

function copyPassword(){
    password_box.select();
    document.execCommand("copy");
}



// code by prateek saha