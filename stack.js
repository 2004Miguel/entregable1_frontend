var stack = /** @class */ (function () {
    function stack() {
        this.head = null;
        //this.prev=null;
        this.size = 0;
    }
    stack.prototype.push = function (nodo) {
        if (this.head == null) {
            this.head = nodo;
            this.size += 1;
        }
        else {
            var temp = void 0;
            temp = this.head;
            this.head = nodo;
            this.head.prevn = temp;
            //this.prev=nodo.prevn;
            this.size += 1;
        }
    };
    stack.prototype.pop = function () {
        if (this.head == null) {
            return this.head;
        }
        else {
            var temp = void 0;
            temp = this.head;
            this.head = this.head.prevn;
            this.size -= 1;
            return temp.value;
        }
    };
    return stack;
}());
var stackNodo = /** @class */ (function () {
    function stackNodo(value) {
        this.value = value;
        // this.next=null;
        this.prevn = null;
    }
    return stackNodo;
}());
var arr = [1, 2, 3, 4];
var pila2 = new stack();
var pila = new stack();
console.log(pila); //stack { head: null, size: 0 }
//pila.pop();
var nodo1 = new stackNodo(1);
console.log(nodo1); //stackNodo { value: 1, next: null, prev: null }
var nodo2 = new stackNodo("Miguel");
console.log(nodo2);
var nodo3 = new stackNodo(pila2);
console.log(nodo3);
var nodo4 = new stackNodo(arr);
console.log(nodo4);
pila.push(nodo1);
console.log(pila); //stack { head: stackNodo { value: 1, next: null, prev: null }, size: 1 }
pila.push(nodo2);
console.log(pila);
pila.push(nodo3);
console.log(pila);
pila.push(nodo4);
console.log(pila);
console.log(JSON.stringify(pila));
console.log(pila.pop());
console.log(pila);
