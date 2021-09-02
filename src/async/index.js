const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Somthing Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

const myFunction = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
myFunction();
console.log('After');


//Catching the errors
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.log(error);
    }
}

console.log('Before-1');
anotherFunction();
console.log('After-1');