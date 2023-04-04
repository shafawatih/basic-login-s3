let dbUsers = [
    {
        username: "shafa" ,
        password: "12345" ,
        name: "shafa" ,
        email: "shafawatih7012@gmail.com"
    },

    {
        username: "jojo" ,
        password: "password" ,
        name: "Jojo" ,
        email: "jojo@gmail.com"
    },

    {
        username: "koko" ,
        password: "8900" ,
        name: "Koko" ,
        email: "koko@gmail.com"
    }
]

function login(reqUsername, reqPassword){
    let matchUser = dbUsers.find( 
        user => user.username == reqUsername
    )
    
 //   if (!matchUser) return "User not Found !"

//    if(matchUser.password == reqPassword){
//        return matchUser
//    } else{
//        return "Invalid Password"
//    }

    function register (reqUsername, reqPassword, reqName, reqEmail){
        dbUsers.push({
            username: reqUsername,
            password: reqPassword,
            name: reqName,
            emai: reqEmail
        })
    }


//try to login
console.log(login("shafa", "password"))
//login("koko", "8900")
//login("shafa", "12345")

register("shafa","12345", "shafa", "shafawatih7012@gmail.com")


 //   for(let i = 0; i< dbUsers.length; i++){
 //       console.log(dbUsers[i])
 //       if(dbUsers[i].username == reqUsername
 //           )
 //  }
 //   console.log(matchUser)
}
