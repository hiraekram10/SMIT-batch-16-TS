// var name = "sana"
// var newName =name.slice(0,1)
// var remaining = name.slice(1)
// console.log(newName.toUpperCase() + remaining);

var name = 'samiya khan'
var result;
var temp;


for (var i = 0; i < name.length; i++) {

    if (i === 0) {
        result = name[i].toUpperCase()

    }
    else if (name[i] === ' ') {
        temp = name[i + 1].toUpperCase()

    }
    else {
        if (temp) {
            result +=  temp
            temp =''
      
        } else {
            result += name[i]
        }
    }




}

console.log(result);



