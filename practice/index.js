
let options = {
    title : "jeongdo",
    height : 200,
    width : 100
};

let { title, ...rest} = options

console.log(title);
console.log(rest);
console.log(rest.height);
console.log(rest.width);