"use strict";
// class User{
//     public email:string;
//     private name:string;
//     readonly city:string = "Jaipur";
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// } 
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // protected - acess modifier  - can be used in same class and classes whcih inherits 
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // no return type like void in set
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const exampleVar = new User("shivain", "lal");
// sussy.city;
// sussy.deleteToken()
