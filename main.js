window.onload = function() {    
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let whoExcuse = who[Math.floor(Math.random() * who.length)];
    let actionExcuse = action[Math.floor(Math.random() * action.length)];
    let whatExcuse = what[Math.floor(Math.random() * what.length)];
    let whenExcuse = when[Math.floor(Math.random() * when.length)];

    let excuse = whoExcuse+" "+actionExcuse+" "+whatExcuse+" "+whenExcuse;
    document.getElementById("generator").innerHTML = excuse;
}