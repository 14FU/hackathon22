function addUIItem(txt) {
    let li = document.createElement("li");
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    const delBttn = document.createElement("button");
    delBttn.textContent = "x";
    delBttn.classList.add("fas", "fa-trash-alt");
    li.appendChild(delBttn);
    delBtn.addEventListener("click", (e) => {
      li.parentNode.removeChild(li);
      savedTasks = savedTasks.filter((e) => e !== txt);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });
  }
  let input = document.querySelector("#todo");
  let bttn = document.querySelector("#btn");
  let list = document.querySelector("#list");
  // load saved tasts
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // add UI elements for any saved task
  savedTasks.forEach(addUIItem);
  
  bttn.addEventListener("click", () => {
    let txt = input.value;
    if (txt === "") {
      alert("Please write something to do!");
    } else {
      savedTasks.push(txt);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
      input.value = "";
      addUIItem(txt);
    }
  });
  
  list.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    }
  });