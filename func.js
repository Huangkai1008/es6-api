// 函数参数默认值
function log(x, y = 'world') {
    console.log(x, y);
}

log('hello');


function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

const p = new Point();

console.log(p);

// 参数默认值是惰性传值的
let x = 99;

function foo(p = x + 1) {
    console.log(p);
}



x = 100;
foo(x);

// 与解构赋值默认值结合使用
function foo({
    x,
    y = 5
}) {
    console.log(x, y);
}

foo({
    x: 1,
    y: 2
});

console.log(typeof {
    a: 1,
    b: 2
})