

/*


//带 * 号代表生成器
function* helloworldGen(){
    yield 'hello';
    yield 'world';
    return 'end';
}

//yield 表达式是暂停执行的 通过 next 函数才会让他重新执行 

var hello = helloworldGen();

console.log(hello.next());
// { value: 'hello', done: false }  value 表示 yield 的值 done 表示迭代器还没有结束 还可以继续
console.log(hello.next());
// { value: 'world', done: false }
console.log(hello.next());
// { value: 'end', done: true } 迭代器一直会执行到 retrun 如果没有 return 会执行完整个函数
console.log(hello.next());



//调用生成器 Generator 函数 返回一个遍历对象 以后每一次调用遍历器 next 方法都会返回 value 和 doen 属性 value 代表 yield 后面到表达式值 done 代表是否遍历结束。


//ES6 没有规定 * 号放置在什么地方 所以下面的写法都能成立
/*
function * foo(x, y) { ··· }
function *foo(x, y) { ··· }
function* foo(x, y) { ··· }
function*foo(x, y) { ··· }
 */

//Generator 可以不使用 yield 表达式:


function* sum(a,b){
    return a + b;
}


// var fun = sum(1,2);
// console.log(fun.next());
// { value: 3, done: true }

// 如果 sum 是一个普通函数 在调用 sum(1,2) 就会立即返回结果 。 这里通过 * 号实现了惰性求值。

// function* total(){
//     yield sum(yield 1,yield 2).next()
// }

// var t = total()

// let tmp
// while(!(tmp = t.next()).done){
//     console.log(tmp)
// }

// function* dataConsumer() {
//     console.log('Started');
//     console.log(`1. ${yield}`);
//     console.log(`2. ${yield}`);
//     return 'result';
// }

// var data = dataConsumer();
// console.log(data.next())

// function wrapper(generatorFunction) {
//     return function (...args) {
//       let generatorObject = generatorFunction(...args);
//       generatorObject.next();
//       return generatorObject;
//     };
//   }
  
//   const wrapped = wrapper(function* () {
//     console.log(`First input: ${yield}`);
//     return 'DONE';
//   });
  
//   var w = wrapped();
//   console.log(w.next("11"))


function wrapper(call){
    return () => {
        var c = call();
        c.next();
        return c;
    }
}
const wrapped = wrapper(function* () {
    console.log(`First input: ${yield}`);
    return 'DONE';
});

var w = wrapped();
console.log(w.next('2323'))


  