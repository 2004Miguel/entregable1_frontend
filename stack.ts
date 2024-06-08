class stack{
   head: stackNodo | null;
   //prev: stackNodo | null;
   size: number;
   constructor(){
    this.head=null;
    //this.prev=null;
    this.size=0;
   }

   push(nodo: stackNodo):void{
    if(this.head==null){
        this.head=nodo;
        this.size += 1;
    }else{
        let temp: stackNodo;
        temp = this.head;
        this.head=nodo;
        this.head.prevn=temp;
        //this.prev=nodo.prevn;
        this.size += 1;
    }
   }

   pop():stackNodo | null | number{
    if(this.head==null){
        return this.head;
    }else{
        let temp: stackNodo
        temp = this.head;
        this.head=this.head.prevn;
        this.size -= 1;
        return temp.value;
    }
   }

}

class stackNodo{
    value: number | null;
    // next: stackNodo | null;
    prevn: stackNodo | null;

    constructor(value: number){
        this.value=value;
        // this.next=null;
        this.prevn=null;
    }

}

let pila = new stack();
console.log(pila);//stack { head: null, size: 0 }
let nodo1 = new stackNodo(1);
console.log(nodo1);//stackNodo { value: 1, next: null, prev: null }
let nodo2 = new stackNodo(2);
console.log(nodo2);
let nodo3 = new stackNodo(3);
console.log(nodo3);
pila.push(nodo1);
console.log(pila);//stack { head: stackNodo { value: 1, next: null, prev: null }, size: 1 }
pila.push(nodo2);
console.log(pila);
pila.push(nodo3);
console.log(pila);
//console.log(JSON.stringify(pila));
console.log(pila.pop());
console.log(pila);

// {"head":{"value":3,"prevn":
//     {"value":2,"prevn":
//         {"value":1,"prevn":null}}},
//         "size":3}