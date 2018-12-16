let [a, b, c] = [1, 2, 3];

// 解构赋值允许制定默认值

let [foo = true] = [];

console.log(foo);

// 对象的解构赋值 按照属性名取值

let {x, y} = {x: "aaa", y: "bbb"};


[x, y] = [y, x];  // 交换变量值

// 返回一个数组
function example() {
    return ['x', 'y', 'z'];
}

let [a1, a2, a3] = example();
for (let i = 0; i < example().length; i++) {
    console.log(example()[i]);
}

// 返回一个对象
function f() {
    return {
        x1: 1,
        y1: 2
    };
}

let {x1, y1} = example();
console.log(x1);


// 提取JSON的值
let jsonData = {
    id: 42,
    status: true,
    data: [111, 112]
};

let {id, status, data: number} = jsonData;


