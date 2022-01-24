

function sayHello(){
    return "hello!"
}

// return 키워드를 사용하면 함수를 즉시 종료하고 값을 반환합니다.
// 그 값이 함수 호출의 값입니다.
// return을 명시적으로 호출하지 않으면 반환 값은 undefined가 됩니다.

// 함수도 객체입니다. 따라서 다른 객체와 마찬가지로 넘기거나 할당할 수 있다. 
// 함수 호출과 참조의 차이를 이해하는 것은 중요하다.
// sayHello();
// sayHello;
// 둘의 차이, 호출과 참조

// ---------------------------------------------------------------------


function test(x){
    console.log(`내부 x = ${x}`);
    x = 3;
    console.log(`내부 x = ${x} 할당 후`);
}

let x = 5;

console.log(`함수 호출 전 x=${x}`);
test(x);
console.log(`함수 호출 후 x=${x}`);

// 함수 내부에서 x에 값을 할당하더라도 함수 바깥의 변수 x에는 아무 영향도 없다. 이름은 같지만, 둘은 다른 개체이다.

function test2(x){
    console.log(`할당 전 x=${x.name} x=${x.age}`);
    x.name = 'hello';
    x.age = 24;
    console.log(`할당 후 x=${x.name} x=${x.age}`);
}

let o = {
    name : 'jeongdo',
    age : 28
}

console.log(`함수 호출 전 o=${o.name} o=${o.age}`);
test2(o);
console.log(`함수 호출 후 o=${o.name} o=${o.age}`);

// 함수 test2 안에서 객체 o를 수정했고, 함수 바깥에서도 적용되었음을 확인할 수 있다. 원시 값과 객체의 핵심적인 차이다.


// --------------------------------------------------------------------
// --------------------------------------------------------------------

// --------- --------- 해체 할당 ES6에서 새로 도입함. 객체나 배열을 변수로 '해체'할 수 있다.

const obj = {b : 2, c : 3, d : 4}; // 선언과 할당을 같은 문에서 실행했다.
const { a, b, c } = obj;

console.log(a);
console.log(b);
console.log(c);

// --------- --------- 객체를 해체할 때는 반드시 변수 이름과 객체의 프로퍼티 이름이 일치해야 합니다. 
// 프로퍼티 이름이 유효한 식별자인 프로퍼티만 해체 후 할당됩니다. obj에 a 프로퍼티가 없으므로 a는 undefined를 할당.

const obj = { b:2, c:3, d:4 };
let a, b, c;
({a,b,c} = obj)
console.log(a, b, c);

// --------- --------- 배열을 해체할 때는 배열 요소에 대응할 변수 이름을 마음대로 사용할 수 있으며 배열 순서대로 대응한다.
const arr = [1, 2, 3];
let [x, y] = arr;

// // 확산 연산자 ...를 사용하면 남은 요소를 새 배열에 할당할 수 있습니다.

const arr2 = [1, 2, 3, 4, 5]
let [z, ...test3] = arr2;

console.log(test3);

// --------- --------- 매개변수 해체 ( 객체 )

function getSentence({ name, age, hell }){
    return `${name} ${age} ${hell}`
}

const o = {
    name : 'jeongdo',
    age : 28,
    adress : 'incheon'
}

console.log(getSentence(o));
// 프로퍼티 이름은 반드시 유효한 식별자여야 한다. 해당 프로퍼티가 없는 변수는 undefined를 할당받습니다.

// --------- --------- 매개변수 해체 ( 배열 )

function getSentence2( [name, ...words] ){
    return `${name} ${words}`
}

const arr = ['jeongdo', 28, 'incheon'];

console.log(getSentence2(arr));

// 확산 연산자 ...를 사용하여 남는 매개변수를 이용할 수 있다.

// call과 apply, bind

const bruce = {name : "Bruce"};
const madeline = {name : "Madeline"};

function greet(){
    return `hello i'm ${this.name}`;
}

// greet();
console.log(greet.call(bruce));
console.log(greet.call(madeline));


function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

// call의 첫 번째 매개변수는 this로 사용할 값이고, 매개변수가 더 있으면 호출하는 함수로 전달된다.
update.call(bruce, 1995);
console.log(bruce);

// apply는 배열 요소를 함수 매개변수로 사용해야 할 때 유용하다. 

const updateBruce = update.bind(bruce);
updateBruce(1994, 'hello')