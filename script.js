async function foo() {
  let obj;

  const res = await fetch("https://dummyjson.com/products/1");

  obj = await res.json();
  console.log(obj);

  const title = document.getElementById("info");
  title.innerHTML = obj.title;
  const price = document.getElementById("price");
  price.innerHTML = obj.price;
  const id = document.getElementById("id");
  id.innerHTML = obj.id;
  const thumbnail = document.getElementById("th");
  thumbnail.src = obj.thumbnail;
}

foo(0);
