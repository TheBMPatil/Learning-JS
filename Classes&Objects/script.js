class Humen {
  name; //public
  #age; //private
  #wt;
  ht;

  constructor(name, age, we, h) {
    this.name = name;
    this.#age = age;
    this.ht = h;
    this.#wt = we;
  }

  //Getters
  get weight() {
    return this.#wt;
  }
  //Setters
  set weight(val) {
    this.#wt = val;
  }

  walking() {
    console.log("I am walking ", this.#age); //using thhis inside accessible
  }

  running() {
    console.log("I am running");
  }
}

let obj = new Humen("Bhagvat", 23, 58, 123);
let ob2 = new Humen("Ram", 23, 46, 158);

obj.walking();
console.log(obj.name);
console.log(ob2.name);
// console.log(obj.#age)
