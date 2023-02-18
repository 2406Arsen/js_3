//Map, Set, WeakMap, WeakSet

const obj = {
    name: 'value of name',
    age: 15
}
// console.log(Object.entries(obj))
const entries = [
    ['name', 'value of name'],
    ['age', 15],
    // [
    //     {
    //         obj: 'obj value'
    //     },
    //     'value of Object key'
    // ]
]
// [['key','value'],['key2','value2']]

// console.log(Object.fromEntries(entries))
const map = new Map(entries)
const testObj = {
    obj: 'obj value'
}
map.set(testObj, 'value of Object key')


// map.clear()
// console.log(map.has('testObj'));
// console.log(
//     Object.entries(obj).map(([key, value]) => [

// ]));

//===========  Set =============
const numArray = [1, 2, 3, 3, 2, 1, 5, 8, 3, 4, 5, 6]
const set = new Set(numArray)
// console.log(
//     set.values()
// );
// console.log(set);

const getUniqNumbersFromArray = (arg) => [...new Set(arg)]


// console.log(getUniqNumbersFromArray(numArray))

// WeakMap WeakSet

// const weakMap = new WeakMap()
let obj2 = { name: 'name2' }
const arr = [obj2]
// obj2 = null

// console.log(arr);


const map2 = new WeakMap([[obj2, 'hello']])
obj2 = null
// console.log(map2);


//homework

const section = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste minus magnam laudantium, iusto dolorum perferendis, quisquam doloribus non mollitia asperiores officiis id voluptas incidunt nihil corrupti similique expedita maxime!";

const letterCount = new Map();

// for (let i = 0; i < section.length; i++) {
//     const letter = section[i].toLowerCase();
//     if (/[a-z]/.test(letter)) {
//         letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
//     }
// }

for (let i = 0; i < section.length; i++) {
    const letter = section[i].toLowerCase();
    if (letterCount.has(letter)) {
        letterCount.set(letter, letterCount.get(letter) + 1);
    } else {
        letterCount.set(letter, 1);

    }
}

console.log(letterCount);