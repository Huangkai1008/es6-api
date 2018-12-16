// let声明局部变量

for (let i = 0; i < 3; i ++){
    let i = 'abc';
    console.log(i);
}


// 暂时性死区
var tmp = 123;

if (true){
    tmp = 'abc';
    let temp;
}

// const声明只读常量
const PI = 3.1415;

