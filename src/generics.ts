// 객체 
function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    };
}

const merged = merge({foo: 1}, {bar: 1, rab: 2});
console.log(merged);

function wrap<T>(param: T) {
    return {
        param
    }
};
const wrapped = wrap(10);

// interface에서 generic 사용
// interface Items<T> {
//     list: T[];
// }

// const items: Items<string> = {
//     list: ['a', 'b', 'c']
// };

// typeAlias에서 generic 사용
type Items<T> = {
    list: T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
}