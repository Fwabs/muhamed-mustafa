var userList = []

function addUser(){
    var bankUsers = {
        clientName : prompt("Please Enter Your Name"),
        clientId :prompt("Please Enter Your ID"),
        clientBalance : prompt("Please Enter Your Balance")
    }
    userList.push(bankUsers)
    console.table(userList)
}

addUser()
addUser()
addUser()

function editUserBalanceById(){
    var id =  prompt('enter user id')
    x = userList.findIndex(item => item.clientId == id)
    z = prompt("Enter Your New balance...")
    userList[x].clientBalance = z
    console.log(userList)
}
editUserBalanceById()

function deleteUserById(){
    var del =  prompt('Enter ID to Delete User!')
    b = userList.findIndex(item => item.clientId == del)
    userList.splice(b, 1)
    console.table(userList)
}
deleteUserById()