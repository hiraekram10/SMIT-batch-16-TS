// console.log('hi');
// let a :string = "hira"
// console.log(a);
// type studentInfo ={
//     fullName :string;
//     rollNo : number;
// }
// type personalInfo = {
//     address:string;
//     email:string;
//     phone:number
// }
// // type Info = studentInfo | personalInfo  //union
// type Info = studentInfo & personalInfo //intersection 
// let myObj:Info=  {
//    address:'uirwyt',
//    email:"34kjhsdbf",
//    phone:982475,
//    fullName:"khassdf",
//    rollNo:2364776
// }
// interface personalInfo {
//       address:string;
//    email:string;
//      phone:number
// }
// let myObj:personalInfo =  {
//   address:'weoiry',
//   email:'ksdhfg',
//   phone:924785
// }
// tuples
// let error:[number,string] = [404,'product not found']
//enum
// enum Status {
//     pending =500,
//     success=200,
//     notFound = 404
// }
// try {
//    var a= aksdladjkf 
// } catch (error) {
//     console.log(error,Status.notFound);
// }
// enum message  {
//     sucess= 'data fetched',
//     error = 'not found'
// }
// let num: number = 400
// if(num <= 200){
//     console.log({message:message.sucess});
// }else{
//      console.log({message:message.error});
// }
// clas
// 
class Student {
    constructor(username, email, phone) {
        this.userName = username;
        this.email = email;
        this.phone = phone;
    }
}
let studen1 = new Student("user", "user@gmail.com", 9845794857);
console.log(studen1);
export {};
//# sourceMappingURL=index.js.map