const urlUser = "http://localhost:3000/users/";
const urlPost = " http://localhost:3000/posts/";
const urlComments = "http://localhost:3000/comments/";
const bodyPage = document.querySelector("#body")

const divContainer = document.createElement("div")
divContainer.setAttribute("class", "container border bg-light")
bodyPage.appendChild(divContainer)
const divHeader = document.createElement("div")
divHeader.setAttribute("class", "row justify-content-center my-3 bg-info border gx-1")
divContainer.appendChild(divHeader)
const header = document.createElement("header")
header.setAttribute("id", "header")
divHeader.appendChild(header)
const divH1 = document.createElement("div");
divH1.setAttribute("class", "col text-center");
header.appendChild(divH1);
const h1 = document.createElement("h1");
h1.setAttribute("class", "display-6")
h1.textContent = "Blog with API";
divH1.appendChild(h1)
const mainPage = document.createElement("main");
mainPage.setAttribute("id", "mainPost")
mainPage.setAttribute("class", "col" )
divContainer.appendChild(mainPage);

const postsBody = document.createElement("div")
const loadCommentsBtn = document.querySelector("#loadCommentsBtn");
const saveChangesBtn = document.querySelector("#saveChangesBtn");
let elementNumber = 0;
let targetToChange = undefined;
let pickedPost = undefined;

fetch(urlPost)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      elementNumber++;
      const mainPost = document.createElement("div");
      mainPost.setAttribute("class", "col")
      const postBody = document.createElement("div");
      postBody.setAttribute("id","postBody");
      postBody.setAttribute("class", "row justify-content-center align-items-flex-center")
      const postSection = document.createElement("section");
      postSection.setAttribute(
        "class",
        "d-flex border border-secondary rounded "
      );
      const divContainer = document.createElement("div");
      divContainer.setAttribute("class", "d-flex flex-column");
      const divIcons = document.createElement("div");
      divIcons.setAttribute("class", "d-flex ");
      const titlePost = document.createElement("button");
      titlePost.innerText = element.title;
      titlePost.classList.add("btn");
      titlePost.classList.add("btn-outline-dark");
      titlePost.setAttribute("type", "button");
      titlePost.setAttribute("data-bs-toggle", "modal");
      titlePost.setAttribute("data-bs-target", "#modal");
      titlePost.setAttribute("data-id", element.id);
      titlePost.setAttribute("data-userId", element.userId);
      titlePost.setAttribute("id", "openPost");
      const paragraph = document.createElement("p");
      const btnIcon1 = document.createElement("button");
      btnIcon1.setAttribute("class", "btn btn-small");
      const btnIcon2 = document.createElement("button");
      btnIcon2.setAttribute("class", "btn btn-small");

      paragraph.textContent = element.body;
      btnIcon1.setAttribute("class", "btn btn-dark");
      btnIcon1.setAttribute("type", "button")
      btnIcon1.setAttribute("data-bs-toggle", "modal")
      btnIcon1.setAttribute("data-bs-target", "#editorModal")
      btnIcon1.setAttribute("data-elementnumber", "1")

      btnIcon1.id = "btnToggle";
      btnIcon2.innerHTML = '<i class="bi bi-x-circle"></i>';
      // titlePost.setAttribute("class", "d-flex");
      mainPage.appendChild(mainPost);
      mainPost.appendChild(postSection)
      postSection.appendChild(divContainer);
      divContainer.appendChild(titlePost);
      divContainer.appendChild(paragraph);
      postSection.appendChild(divIcons);
      divIcons.appendChild(btnIcon1);
      divIcons.appendChild(btnIcon2);

      titlePost.addEventListener("click", pushBtnToggle);

      function pushBtnToggle() {
        fetch(urlUser)
          .then((res) => res.json())
          .then((data) => {
            data.forEach((e) => {
              mainPage.replaceChildren();
              const userName = e.name;
              const userEmail = e.email;
              const sectionPost = document.createElement("section");
              sectionPost.setAttribute("class", "section");
              sectionPost.style.display = "block";
              sectionPost.style.width = "500px";
              sectionPost.style.height = "50vh";

              const modal = document.createElement("div");
              modal.setAttribute("class", "modal fade");
              modal.setAttribute("id", "modal");
              modal.setAttribute("tabindex", "1");
              modal.setAttribute("aria-labelledby", "exampleModalLabel");
              modal.setAttribute("aria-hidden", "true");
              modal.style.display = "block";
              const modalDialog = document.createElement("div");
              modalDialog.setAttribute("class", "modal-dialog");
              const modalContent = document.createElement("div");
              modalContent.setAttribute("class", "modal-content");
              const modalHeader = document.createElement("div");
              modalHeader.setAttribute("class", "modal-header");
              const modalTittle = document.createElement("h5");
              modalTittle.setAttribute("class", "modal-tittle");
              modalTittle.setAttribute("id", "modalLabel");
              modalTittle.textContent = element.title;
              const modalCancel = document.createElement("button");
              modalCancel.setAttribute("type", "button");
              modalCancel.setAttribute("class", "btn-close");
              modalCancel.setAttribute("data-bs-dismiss", "modal");
              modalCancel.setAttribute("aria-label", "Close");
              const modalBody = document.createElement("div");
              modalBody.setAttribute("class", "modal-body");
              modalBody.setAttribute("id", "modalMainBody");
              const modalP = document.createElement("p");
              modalP.setAttribute("class", "lead");
              modalP.setAttribute("id", "modalBody");
              const modalP1 = document.createElement("p");
              const modalB = document.createElement("b");
              modalB.setAttribute("id", "user");
              modalB.textContent = "USER";
              const modalP2 = document.createElement("p");
              modalP2.setAttribute("id", "UserName");
              modalP2.textContent = `${userName}`;
              const modalP3 = document.createElement("p");
              modalP3.setAttribute("id", "UserEmail");
              modalP3.textContent = `${userEmail}`;
              const modalBtnLoadComments = document.createElement("button");
              modalBtnLoadComments.setAttribute("type", "button");
              modalBtnLoadComments.setAttribute("class", "btn btn-dark");
              modalBtnLoadComments.setAttribute("id", "loadCommentsBtn");
              const modalHr = document.createElement("hr");
              const modalCommentSection = document.createElement("div");
              modalCommentSection.setAttribute("class", "row");
              modalCommentSection.setAttribute("id", "commentSection");
              const modalDivRowComment = document.createElement("div");
              modalDivRowComment.setAttribute("class", "row");
              const modalCommentP1 = document.createElement("p");
              modalCommentP1.setAttribute("id", "commentsName");
              const modalCommentP2 = document.createElement("p");
              modalCommentP2.setAttribute("id", "commentsEmail");
              const modalCommentP3 = document.createElement("p");
              modalCommentP3.setAttribute("id", "comment");

              const modalFooter = document.createElement("div");
              modalFooter.setAttribute("class", "modal-footer d-md-block");
              const modalBtnClose = document.createElement("button");
              modalBtnClose.setAttribute("type", "button");
              modalBtnClose.setAttribute("class", " btn btn-secondary m-0");
              modalBtnClose.setAttribute("data-bs-dismiss", "modal");
              modalBtnClose.textContent = "Close";
              // const modalBtnSave = document.createElement("button");
              // modalBtnSave.setAttribute("type", "button");
              // modalBtnSave.setAttribute("class", " btn btn-secondary");
              // modalBtnSave.setAttribute("data-bs-dismiss", "modal");
              // modalBtnSave.textContent = "Save changes";

              mainPage.appendChild(sectionPost);
              sectionPost.appendChild(modal);
              modal.appendChild(modalDialog);
              modalDialog.appendChild(modalContent);
              modalContent.appendChild(modalHeader);
              modalHeader.appendChild(modalTittle);
              modalHeader.appendChild(modalCancel);
              modalContent.appendChild(modalBody);
              modalBody.appendChild(modalP);
              modalBody.appendChild(modalP1);
              modalBody.appendChild(modalB);
              modalBody.appendChild(modalP2);
              modalBody.appendChild(modalP3);
              modalBody.appendChild(modalBtnLoadComments);
              modalBody.appendChild(modalHr);
              modalBody.appendChild(modalCommentSection);
              modalCommentSection.appendChild(modalDivRowComment);
              modalDivRowComment.appendChild(modalCommentP1);
              modalDivRowComment.appendChild(modalCommentP2);
              modalDivRowComment.appendChild(modalCommentP3);
              modalContent.appendChild(modalFooter);
              modalFooter.appendChild(modalBtnClose);

              // sectionPost.appendChild(titlePost);
              // sectionPost.appendChild(paragraph);

              // const user = document.createElement("h4");
              // user.textContent = "USER";
              // sectionPost.appendChild(user);

              // userName.textContent = ele.name;

              // sectionPost.appendChild(userName);
              // sectionPost.appendChild(userEmail);
              // const btnComment = document.createElement("button");
              // btnComment.te;
            });
          });
      }
    });
    console.log(data);
    // const btnIconToggle = document.querySelector("#btnToggle");
  });
