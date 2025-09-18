// var para = document.querySelector('#halfPara')
// var btn = document.querySelector('button')
// var empty = document.querySelector('#empty')

// function showMore(){
//     // para.setAttribute('class',"hello")
//  para.innerText += 'the branch of science concerned with the substances of which matter is composed, the investigation of their properties and reactions, and the use of such reactions to form new substances.'
//    btn.style.display= 'none'
//    empty.innerHTML =' <button onclick="showLesss()">show less</button>'

// }

// // console.log(document.childNodes[1].childNodes[1].firstChild);
// console.log(document.childNodes[1].childNodes[1].lastChild.nodeName);
// // console.log(para.hasAttribute('class')); true false
// // console.log(para.getAttribute('class'));  --> value of attribute
// console.log(para.attributes);


// var student = {
//     fullName :'user',
//     rollNo :6473,
//     isPresent: true,
//     Quiz: ['html','css','js1']
// }
// console.log(student.Quiz[1]);


var empty = document.querySelector('#empty')

function mssgSend(e) {
    var userkiVlue = e.target.value
    if (e.keyCode == 13) {
        empty.innerHTML += `<li> ${userkiVlue} </li>`
        e.target.value = ''
console.log();

        if (["hi", "hello", "how are you"].includes(userkiVlue)) {
            setTimeout(function () {
                empty.innerHTML += `<li> hello </li>`

            }, 3000)
        } 
    }



}


var name = 'something'
// console.log(name + "good morning");
// Template literals --. es6


// console.log(`${name} good morning ${name} hello kiya krrahi ho ${1}`);









