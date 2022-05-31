
fetch('https://dummyjson.com/todos/1').then(function (response) {
  return response.json();
}).then (function (response) {
  finalresult(response);
})

let todo_cnt = document.querySelector(".ch1");


function finalresult(todo) {

  let title = document.createElement("h3");
  title.textContent = todo.todo;

  let checkbox = todo.completed;
  console.log(checkbox);
  if ( checkbox === false) {
    document.getElementById("tik-1").removeAttribute("checked"); 
  }

  todo_cnt.appendChild(title);

}


fetch('https://dummyjson.com/todos/2').then(function (response) {
  return response.json();
}).then (function (response) {
  finalresult_1(response);
})

let todo_cnt_2 = document.querySelector(".ch2");


function finalresult_1(todo) {


  let title = document.createElement("h3");
  title.textContent = todo.todo;

  let checkbox = todo.completed;
  
  if ( checkbox === false) {
    document.getElementById("tik-2").removeAttribute("checked"); 
  }


  todo_cnt_2.appendChild(title);

}

fetch('https://dummyjson.com/todos/3').then(function (response) {
  return response.json();
}).then (function (response) {
  finalresult_3(response);
})

let todo_cnt_3 = document.querySelector(".ch3");


function finalresult_3(todo) {


  let title = document.createElement("h3");
  title.textContent = todo.todo;

  let checkbox = todo.completed;
  if ( checkbox === false) {
    document.getElementById("tik-3").removeAttribute("checked"); 
  }

  todo_cnt_3.appendChild(title);

}

fetch('https://dummyjson.com/todos/4').then(function (response) {
  return response.json();
}).then (function (response) {
  finalresult_4(response);
})


let todo_cnt_4 = document.querySelector(".ch4");


function finalresult_4(todo) {


  let title = document.createElement("h3");
  title.textContent = todo.todo;

  let checkbox = todo.completed;
  if ( checkbox === false) {
    document.getElementById("tik-4").removeAttribute("checked"); 

  }

  todo_cnt_4.appendChild(title);

}