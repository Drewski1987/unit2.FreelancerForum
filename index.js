const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
    
  ];
  
function init() {

const body = document.querySelector("#freelancers")
console.log(freelancers)

const h1 = document.createElement("h1")
h1.innerHTML = "freelancers forum"
console.log(h1)
body.append(h1);



function averagePrice () {
  const totalPrice = freelancers.reduce((total, person) => total+person.price,0)
  return (totalPrice / freelancers.length).toFixed(2)
}

function updatedAveragePrice() {
  const h3 = document.getElementById("averagePrice");
  h3.innerHTML = `Average Price: ${averagePrice()}`;

}

const h3 = document.createElement("h3")
h3.id = "averagePrice"
h3.innerHTML = `The Average starting Price: ${averagePrice()}`
body.append(h3);

const h2 = document.createElement("h2")
h2.innerHTML = "Available Freelancers"
body.append(h2);

const freelancersContainer = document.createElement("table")
freelancersContainer.id = "freelancerContainer"
body.append(freelancersContainer)

function renderFreelancers () {
  freelancersContainer.innerHTML = ""
  freelancers.forEach ( person => {
    const freelancer = document.createElement ("tr")
    freelancer.innerHTML = `<td> <strong> Name: </strong> ${person.name}</td>
                            <td> <strong> Occupation: </strong> ${person.occupation}</td>
                            <td> <strong> Price: </strong> $${person.price}</td>`;
      freelancersContainer.appendChild(freelancer);
  })
  updatedAveragePrice()
}
function addCarol () {
  const carol = { name: "Carol", occupation: "Programmer", price: 70 };
  freelancers.push(carol)
  renderFreelancers()
}
function addFreelancers (){
  const randomIndex = Math.floor(Math.random() * newFreelancers.length)
  const newfreelancer = newFreelancers[randomIndex]
  freelancers.push(newFreelancer)
  renderFreelancers()
}



  }
  init()