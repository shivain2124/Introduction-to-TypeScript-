// const User = {
//     name : "hitest",
//     email: "shivain@gmail.com",
//     isActive : true
// }

// function createUser({name:string,isPaid:boolean}){}

// createUser({name:"shivain",isPaid:false})  

// function createCourse():{name:string,price:number}{
//     return {name:"react",price:399}
// }

type User={
    readonly _id:string;
    name:string;
    email: string;
    isActive:boolean;
    credCard?: number;
}

// function createUser(user:User): User{
//     return {name:"",email:"",isActive:true}
// }

// createUser({name:"",email:"",isActive:true})

let myUser:User = {
    _id:"123",
    name:"shivain",
    email:"shivain@gmail.com",
    isActive:false
}

myUser.email="l@gmail.com"
// myUser._id="asas"

type cardNumber = {
    cardnum:string
}
type cardDate={
    cardDate:string
}

type cardDetails=cardNumber & cardDate & {
    cvv:number
}


export {} 