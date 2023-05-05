const urlUser = "http://localhost:3000/users/";
const urlPost = " http://localhost:3000/posts/";
const urlComments = "http://localhost:3000/comments/";

const mainPage = document.querySelector("#main");

fetch(urlPost)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((e) => {
      const mySection = document.createElement("section");
      mySection.setAttribute("class", "d-flex border border-secondary rounded ");
      const divContainer = document.createElement("div");
      divContainer.setAttribute("class", "d-flex flex-column")
      const divIcons = document.createElement("div");
      divIcons.setAttribute("class", "d-flex ")
      const titlePost = document.createElement("h3");
      const paragraph = document.createElement("p");
      const btnIcon1 = document.createElement("button");
      btnIcon1.setAttribute("class", "btn btn-small")
      const btnIcon2 = document.createElement("button");
      btnIcon2.setAttribute("class", "btn btn-small")

     
     
      titlePost.innerText = e.title;
      paragraph.textContent = e.body;
      btnIcon1.innerHTML = '<i class="bi bi-pencil-square"></i>';
      btnIcon1.id = "btnToggle";
      btnIcon2.innerHTML = '<i class="bi bi-x-circle"></i>';
      // titlePost.setAttribute("class", "d-flex");
      mainPage.appendChild(mySection);
      mySection.appendChild(divContainer);
      divContainer.appendChild(titlePost);
      divContainer.appendChild(paragraph);      
      mySection.appendChild(divIcons);
      divIcons.appendChild(btnIcon1);
      divIcons.appendChild(btnIcon2);

      btnIcon1.addEventListener("click", pushBtnToggle);

      function pushBtnToggle() {
        fetch(urlUser)
          .then((res) => res.json())
          .then((data) => {
            data.forEach((e) => {
              mainPage.replaceChildren();
              const divPost = document.createElement("div");
              
              mainPage.appendChild(divPost);
              divPost.appendChild(titlePost);
              divPost.appendChild(paragraph);
              const user = document.createElement("h4");
              user.textContent = "USER";
              divPost.appendChild(user);
              const userName = document.createElement("span");
              userName.textContent = e.name;
              const userEmail = document.createElement("span");
              userEmail.textContent = e.email;
              divPost.appendChild(userName)
              divPost.appendChild(userEmail)
              const btnComment = document.createElement("button");
              btnComment.te
            });
          });
      }
    });
    console.log(data);
    // const btnIconToggle = document.querySelector("#btnToggle");
  });
