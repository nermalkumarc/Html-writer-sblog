function submitAction()
{
var u = document.getElementById('logUser').value;
var p = document.getElementById('logPass').value;

var checkU="Admin";
var checkP="Admin";

if((u==="")||(p===""))
{
alert("Field missing, please fill all the fields ! ");
}
else if((checkU===u.toString())&&(checkP===p.toString()))
{
window.open("Home.html");
}
else
{
alert("Incorrect Username/Password !");
}
}

function registerAction()
{
var f = document.getElementById('fName').value;
var l = document.getElementById('lName').value;
var e = document.getElementById('regMail').value;
var pass = document.getElementById('regPass').value;

if((f==="")||(l==="")||(e==="")||(pass===""))
{
alert("Field missing, please fill all the fields !");
}
else
{
window.open("Login.html");
}
}





