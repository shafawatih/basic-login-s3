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
        username: "utem" ,
        password: "0000" ,
        name: "fkekk" ,
        email: "utem@gmail.com"
    }
]

function login(reqUsername, reqPassword){
 //   let matchUser = dbUsers.find( 
 //       user => user.username == reqUsername
 //   )
    
      let matchUser = dbUsers.find(

        x => x.username == reqUsername
      )


   if (!matchUser) return "User not Found !"

   if(matchUser.password == reqPassword){
            return matchUser
    } else{
        return "Invalid Password"
    }
}
    function register(reqUsername, reqPassword, reqName, reqEmail){
        dbUsers.push({
            username: reqUsername,
            password: reqPassword,
            name: reqName,
            email: reqEmail
        })
    }


//try to login
console.log(login("shafa", "password"))
//login("koko", "8900")
//login("shafa", "12345")

register("utem","0000", "fkekk", "utem@gmail.com")
console.log( login("utem","0000"))
 //   for(let i = 0; i< dbUsers.length; i++){
 //       console.log(dbUsers[i])
 //       if(dbUsers[i].username == reqUsername
 //           )
 //  }
 //   console.log(matchUser)
