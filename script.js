const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordContainer = document.querySelector('.password-form')

let password = "";

function generateRandomPassword() {
    let passwordField = document.getElementById("output-form");
    password = '';

    for (let i = 0; i < 15; i++) {
        let char = characters[Math.floor(Math.random() * 91)];
        password += char;
    }

    passwordField.value=password;
}

passwordContainer.addEventListener('click', () => {
    navigator.clipboard.writeText(password).then(() => {
        console.log("Password copied to clipboard");
        const message = document.createElement('div');
        message.textContent = 'Password copied to clipboard';
        message.style.position = 'fixed'; 
        message.style.bottom = '35px';   
        message.style.left = '50%';      
        message.style.transform = 'translate(-50%)'; 
        message.style.borderRadius = '12px';

        message.style.backgroundColor = '#d6ffd6';
        message.style.padding = '5px';
        message.style.fontFamily = 'Inter', 'Times New Roman'; 
        message.style.textAlign = 'center';

        passwordContainer.appendChild(message);

        setTimeout(() => {
            message.remove(); 
        }, 2000);
    }, (err) => {
        console.error("Failed to copy password:", err);
    });
});