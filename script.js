const obj = {  // Objects.
  id: 101,
  name : 'Abhishek',
  origin: 'India'
};

// id - key, 101 - value.
// print data of objects

console.log(obj);  // print all data of obj.
console.log(typeof obj); // object

// Access value of keys one by one.

console.log(obj.id);  // 101
console.log(obj.name); // Abhishek
console.log(obj.origin); // India


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// How print only key and value. see below >>>>>>>

let obj_key = Object.keys(obj);
console.log(obj_key); // print Keys:  id, name, origin.

let obj_value = Object.values(obj);
console.log(obj_value); // print Values:  101, Abhishek, India.
