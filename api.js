function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
}


function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>displayUser(data));
}
function displayUser(data){
  const ul= document.getElementById('users');
  for(const user of data){
    console.log(user.name);
    const li = document.createElement('li');
    li.innerText=`name:${user.name} email:${user.email}`;
    ul.appendChild(li);
  }
}
const stuInfo = JSON.stringify({ name: "James", roll: 3 }); console.log(stuInfo.name);
