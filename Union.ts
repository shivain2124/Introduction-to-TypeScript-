let score:number | string = 33;

score=44;
score="55";


type User={
    name:string;
    id:number;
}
type Admin={
    username:string;
    id:number;
}

let shivain:User | Admin={name:"shivain",id:334}

shivain={username:"hc",id:334}


// function getDbId(id:number | string){
//     console.log(`DB id is: $(id)`);
// }
getDbId(3)
getDbId("3")
function getDbId(id:number | string){
    // console.log(`DB id is: $(id)`);
    if(typeof id==="string"){
        id.toLowerCase()
    }
}

// array

const data:(string | number)[] = [1,2,3,"4"]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment="aisle"
// seatAllotment = "crew"