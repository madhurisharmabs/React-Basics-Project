// const url = "https://jsonplaceholder.typicode.com/posts"

// async function fn() {
//     await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => console.log(json))
//     await fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);

//         })
// }

// fn()


//without async and await
// const url = "https://fakestoreapi.com/products/1"
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data));

// with async and await
const url = "https://jsonplaceholder.typicode.com/posts";
async function promiseFn() {
    await fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => console.log(data));
}

promiseFn();

