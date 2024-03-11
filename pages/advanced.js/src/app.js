// let clients = ["John","Marry","Kate"];
// let clientsHighPriority = ["Tob","Pete"];
// let clientsLowPriority = ["Vicky","Lessly"];
// clients.unshift(...clientsHighPriority);
// clients.push(...clientsLowPriority);

// for (let i = 0; i<=clients.length; i++) {
//    console.log(clients[i]);  
// };





let user_1 = new User("Johny",20,true)
let user_2 = new User("Marry",21,false)
let user_3 = new User("Pete",22,true)
let user_4 = new User("Liam",15,true)
let user_5 = new User("Emy",8,false)
let user_6 = new User("Teo",9,true)

let message_1 = new Message('Hey!','sent', user_1,user_2)


// let mesage_1 ={
//     content:"Hi,how are you?",
//     status:"sent",
//     from_user:user_1,
//     to_user:user_2,
// }