// class User{
//     public email:string;
//     private name:string;
//     readonly city:string = "Jaipur";
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;

//     }
// } 
class User{
// protected - acess modifier  - can be used in same class and classes whcih inherits 
    protected _courseCount=1

    readonly city:string = "Jaipur";
    constructor(
        public email:string,
        public name:string,
        // private userId:number 

    ){

        }
        private deleteToken(){
            console.log("Token deleted")
        }


        get getAppleEmail(): string{
            return `apple${this.email}`;
        }

        get courseCount():number{
            return this._courseCount
        }
        // no return type like void in set
        set courseCount(courseNum){
            if(courseNum<=1){
                throw new Error("Course count should be more than 1")
            }
            this._courseCount = courseNum

        }
} 
class SubUser extends User{
    isFamily: boolean=true
    changeCourseCount(){
        this._courseCount=4
    }
}


const exampleVar = new User("shivain", "lal")
// sussy.city;

// sussy.deleteToken()

