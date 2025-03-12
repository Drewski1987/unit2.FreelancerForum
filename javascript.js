const freelancers = [
    { name: "Alice", occupation: "Writer", price: "$30" },
    { name: "Bob", occupation: "Teacher", price: "$50" },
    { name: "Carol", occupation: "Programmer", price: "$70" },
  ];
  
  function render(){
const root = document.querySelector('#root')
console.dir(root)

const h1 = document.createElement("h1")
h1.innerHTML = "freelancers"
console.dir(root)

root.append(h1)

// const freelancersContainer = document.createElement("div")
// freelancersContainer.id = "freelancersContainer"
// freelancersContainer.classList.add()
// root.append(freelancersContainer)
  }