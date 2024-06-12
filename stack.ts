class stack<T>{
   head: stackNodo<T> | null;
   //prev: stackNodo | null;
   size: number;
   constructor(){
    this.head=null;
    //this.prev=null;
    this.size=0;
   }

   push(nodo: stackNodo<T>):void{
    if(this.head==null){
        this.head=nodo;
        this.size += 1;
    }else{
        let temp: stackNodo<T>;
        temp = this.head;
        this.head=nodo;
        this.head.prevn=temp;
        //this.prev=nodo.prevn;
        this.size += 1;
    }
   }

   pop():T | null | stackNodo<T>{
    if(this.head==null){
        return this.head;
    }else{
        let temp: stackNodo<T>
        temp = this.head;
        this.head=this.head.prevn;
        this.size -= 1;
        return temp.value;
    }
   }

}

class stackNodo<T>{
    value: T | null;
    // next: stackNodo | null;
    prevn: stackNodo<T> | null;

    constructor(value: T){
        this.value=value;
        // this.next=null;
        this.prevn=null;
    }

}
let arr = [1, 2, 3, 4];
let pila2 = new stack();

let pila = new stack();
console.log(pila);
pila.pop();
let nodo1 = new stackNodo(1);
console.log(nodo1);
let nodo2 = new stackNodo("Miguel");
console.log(nodo2);
let nodo3 = new stackNodo(pila2);
console.log(nodo3);
let nodo4 = new stackNodo(arr);
console.log(nodo4);
pila.push(nodo1);
console.log(pila);
pila.push(nodo2);
console.log(pila);
pila.push(nodo3);
console.log(pila);
pila.push(nodo4);
console.log(pila);
console.log(JSON.stringify(pila));
console.log(pila.pop());
console.log(pila);

// {"head":{"value":[1,2,3,4],"prevn":
//     {"value":{"head":null,"size":0},"prevn":
//     {"value":"Miguel","prevn":
//         {"value":1,"prevn":null}}}},"size":4}