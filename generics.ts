const score : Array<number> = [];
const names: Array<string> =[];

function identityOne(val:boolean | number): boolean | number{
    return val;
} 

function identityTwo(val:any){
    return val;
}

//long
function identityThree<Type>(val:Type) : Type{
    return val
}
// identityThree(true);

//short
function identityFour<T>(val:T):T{
    return val
}

interface Bootle{
    brand:string,
    type: number,
}

// identityFour<Bootle>({})

function getSearchProduct<T>(products: T[]) : T{
    // dbs operations
    const index=3
    return products[index];
}

const getMoreSearchProducts = <T,>(products: T[]): T =>{
    // dbs operations
    const index=4;
    return products[index]
}

interface Database{
    connection:string,
    username:string,
    password:string
}


function anotherFunction<T,U extends Database>(valOne:T , valTwo:U):object{
    return{
        valOne,
        valTwo,
    }

}
// anotherFunction(3,{});

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T> {
    public cart: T[]=[]

    addToCart(products: T){
        this.cart.push(products);
    }
}





