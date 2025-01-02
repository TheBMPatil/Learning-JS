async function getData() {
//   let resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  let resp = await fetch("https://jsonplaceholder.typicode.com/posts/10");
  let data = await resp.json();
  console.log(data);
}
getData();


