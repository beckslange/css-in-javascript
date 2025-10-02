function handleClick() {
  //alert("hooray");
  let heading = document.querySelector("h1");
  let subheading = document.querySelector("h2");
  let paragraph = document.querySelector("p");
  let hidden = document.querySelector("h3");
  heading.style.color = "green";
  heading.style.borderRadius = "50px";
  heading.style.backgroundColor = "blue";
  heading.classList.remove("heading");
  subheading.classList.add("highlight");
  paragraph.classList.toggle("toggle");
  //hidden.style.display = "none"; - this is one way to do it, below is another
  hidden.classList.add("hidden");
  //^^.add is not working for me
}
//what this means is that when we click on the button it selects the h1 and changes it
//to whatever style i just told it to change to

let buttonElement = document.querySelector("#my-button");
buttonElement.addEventListener("click", handleClick);
//console.log(buttonElement);
//console.log(buttonElement.setAttribute("disabled", "warning"));
//setAttribute makes it so that you can change any attribute on the page

/*buttonElement.style.color = "red";
we can change any element from CSS in JS*/

buttonElement.style.background = "red";

/*let heading = document.querySelector("h1");
heading.style.color = "green";*/
