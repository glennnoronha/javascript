//let username = window.prompt('What is your username?');
//console.log(username);

let username;

document.getElementById('mySubmit').onclick = function() {
    username = document.getElementById('myText').value;
    console.log(username);
    document.getElementById('myH2').textContent = `Hello, ${username}`
}