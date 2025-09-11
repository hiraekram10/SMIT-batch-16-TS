// function word(discount){
//   var dis = discount
//    return true
// }
// var funcReturn = word(200)

// console.log(funcReturn);

// console.log(word(200));



// function greeting(name){
//   var firstname = name
//   return true
// }



// var funcRet = greeting('sana')
// var greetMssg = funcRet + 'hello' + 'how are u'
// console.log(greetMssg);

// var 2 copes --global , functional const,let
// function greeting(name){

//  var  firstname = 'hello'

// }
// greeting()
// console.log(firstname);


// var userInp = document.getElementById('userInp')
// function userVal (e){
//     // console.log(e.code)
//     if(e.code === 'Enter'){
//         console.log(e.target.value);
//     }  
// }






var add = document.getElementById('add')
function checkProduct(e) {
    if ( e.code === 'Enter') {
        var userkiValue = e.target.value
        console.log(e);
        
        var proList = ["facewash", 'cleanser', 'scrub', "foundation"]
        if (proList.indexOf(userkiValue) === -1) {
            add.innerHTML = 'product is not avalable'
            return userkiValue
        } else {
            add.innerHTML=  'available'
            return userkiValue
        }
    }



}
var usInp = checkProduct()
console.log(usInp);
var a = 'hello'
console.log(a);































