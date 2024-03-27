//fun to add new sec
function addaccsec() {
  // select the parent elm
  var wrapper = document.querySelector('.accordian-wrapper');
  //create new div
  var newaccsecDiv = document.createElement('div');
  newaccsecDiv.className = 'accordian';
  //new heading

  var newheading = document.createElement('h3');
  newheading.textContent = 'Skills';

  var newpara = document.createElement('p');
  newpara.textContent = 'I posses a very good command over the Full  Stack Development technologies like MERN which  can be seen in my work over the Github.';

  newaccsecDiv.appendChild(newheading);
  newaccsecDiv.appendChild(newpara);

  wrapper.appendChild(newaccsecDiv);
};

addaccsec();

// let valaboutimprove = document.getElementsByTagName('li');
// valaboutimprove[2].innerHTML = "Projects";

let heading = document.querySelectorAll("h3");
heading.forEach(function (h3) {
  h3.style.backgroundColor = '#dadbeb';

});

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});







