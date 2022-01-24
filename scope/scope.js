
// 스코프는 변수와 상수, 매개변수가 언제 어디서 정의되는지 결정합니다.

// const x = 3;
// function f(){
//     console.log(x);
//     console.log(y);
// }

// {
//     const y = 5;
//     f();
// }

// 변수 x는 함수 f를 정의할 때 존재하지만, y는 그렇지 않습니다. y는 다른 스코프에 존재합니다.

// ------ ------ 블록 스코프

// console.log('before block');
// {
//     console.log('inside block');
//     const x = 3;
//     console.log(x);
// }
// console.log(`outside block x = ${x}`);



// ------ ------ 클로저 ( 함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의하는 경우 )

// let globalFunc;
// {
//     let blockVar = 'a';
//     globalFunc = function(){
//         console.log(blockVar);
//     }
// }
// globalFunc();

let f;
{
    let o = { note : 'jeongdo'};
    f = function(){
        return o;
    }
}
const test = f();
test.note = 'hi'
console.log(test);

// ------ ------ 즉시 호출하는 함수, IEFF 자체는 함수이므로 스코프 밖으로 무언가를 내보낼 수 있다.
// 클로저를 만들고 클로저에서 무언가 반환받을 때에 유용하게 쓸 수 있다.


// ------ ------ 호이스팅 
