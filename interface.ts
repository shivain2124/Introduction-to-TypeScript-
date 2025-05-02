 interface User {
    readonly dbId:number
    email:string,
    userId :number,
    googleId?:string
    // startTrail:()=>string

    startTrail():string
    getCoupon(couponname:string,value:number):number
 }

 interface User{
    githubToken:string
 }
interface Admin extends User{
    role:"admin" | "ta" | "learner"
}

 const shivain: Admin = {dbId:22,email:"s@s.com",
    userId:2124,
    role:"admin",
    githubToken:"github",
    startTrail:()=>{
        return "trail started"
    },
    getCoupon:(name:"shivain",off:10)=>{
        return 10;
    }
 }
