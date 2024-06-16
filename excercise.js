function solve() {
  // Your solution goes here
  const goals = document.querySelector("ul");
  const li1 = document.createElement("li");
  li1.textContent = "Learn JavaScript";
  const li2 = document.createElement("li");
  li2.textContent = "Master JavaScript";
  goals.appendChild(li1);
  goals.appendChild(li2);
}
