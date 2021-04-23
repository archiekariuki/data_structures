class Queue{

constructor(){
    this.data = [];
}

add(record){
    this.data.unshift(record);
}

remove(){
    return this.data.pop();
}

}

const q = new Queue();

q.add(3);
q.add(4);

console.log(q);
