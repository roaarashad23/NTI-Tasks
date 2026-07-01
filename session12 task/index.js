
let userList =[];
function addUser(){
    let name = prompt ('enter your name');
    let id= Number(prompt("enter your id"));

    let idTaken =userList.find(user => user.id === id)
    while(idTaken){
        alert("change the id")
    }

    let balance = Number(prompt("enter your balance"));
    
    return { name, id, balance };
} 

for(let i=1 ; i<=2 ; i++){
    userList.push(addUser());
}
console.table(userList);
function check(){
    let x=Number(prompt("enter your id"));

    let foundUser = userList.find(user => user.id === x);

    if(foundUser){
         console.log("done")

         let y=Number(prompt("enter the amount withdraw"));
         if(foundUser.balance >= y){
            foundUser.balance -= y; 
            console.log('new balance: ' + foundUser.balance);
         }
         else
            console.log("not enough")
    }
    else
        return alert("not exist")
}
check();

function transfer(){
    let fromId = Number(prompt("enter your from id"));
    let foundUser1 = userList.find(user => user.id === fromId);
    if(foundUser1){
        console.log("right from id")
        let toId=Number(prompt("enter the to id"));
        let foundUser2 = userList.find(user => user.id === toId);
        if(foundUser2){
            let diff= Number(prompt("enter the transger amount"))
            foundUser1.balance -= diff;
            console.log(foundUser1.balance)
            foundUser2.balance += diff;
            console.log(foundUser2.balance)
        }

        console.table(userList)
    }
    else
        return alert("wrong id")
}

transfer()

function deleteUser(){
    let idToDelete = Number(prompt("enter your id to delete"));
    let foundUser = userList.findIndex(user => user.id === idToDelete);
    if(foundUser){
        userList.splice(foundUser , 1)
    }
    console.table(userList)
}

deleteUser()