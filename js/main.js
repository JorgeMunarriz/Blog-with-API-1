const urlUser = "http://localhost:3000/users/";
const urlPost = " http://localhost:3000/posts/";
const urlComments = "http://localhost:3000/comments/";

const mainPage = document.querySelector("#main");

fetch(urlPost)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((ele) => {
      const mySection = document.createElement("section");
      mySection.setAttribute(
        "class",
        "d-flex border border-secondary rounded "
      );
      const divContainer = document.createElement("div");
      divContainer.setAttribute("class", "d-flex flex-column");
      const divIcons = document.createElement("div");
      divIcons.setAttribute("class", "d-flex ");
      const titlePost = document.createElement("button");
      const paragraph = document.createElement("p");
      const btnIcon1 = document.createElement("button");
      btnIcon1.setAttribute("class", "btn btn-small");
      const btnIcon2 = document.createElement("button");
      btnIcon2.setAttribute("class", "btn btn-small");

      titlePost.innerText = ele.title;
      paragraph.textContent = ele.body;
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

      titlePost.addEventListener("click", pushBtnToggle);

      function pushBtnToggle() {
        fetch(urlUser)
          .then((res) => res.json())
          .then((data) => {
            data.forEach((e) => {
              mainPage.replaceChildren();
              const sectionPost = document.createElement("section");
              sectionPost.setAttribute("class", "section")

              const modal = document.createElement("div");
              modal.setAttribute("class", "modal fade");
              modal.setAttribute("id", "modal");
              modal.setAttribute("tabindex", "-1");
              modal.setAttribute("aria-labelledby", "exampleModalLabel")
              modal.setAttribute("aria-hidden", "true")
              const modalDialog = document.createElement("div");
              modalDialog.setAttribute("class", "modal-dialog");
              const modalContent = document.createElement("div");
              modalContent.setAttribute("class", "modal-content");
              const modalHeader = document.createElement("div");
              modalHeader.setAttribute("class", "modal-header");
              const modalTittle = document.createElement("h5");
              modalTittle.setAttribute("class", "modal-tittle");
              modalTittle.setAttribute("id", "modalLabel");              
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
              modalB.textContent = "USER"
              const modalP2 = document.createElement("p");
              modalP2.setAttribute("id", "UserName");
              modalP2.textContent = "${userName}";
              const modalP3 = document.createElement("p");
              modalP3.setAttribute("id", "UserEmail");
              modalP3.textContent = "${userEmail}";
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
              modalHeader.appendChild(modalCancel)
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


              sectionPost.appendChild(titlePost);
              sectionPost.appendChild(paragraph);



              // const user = document.createElement("h4");
              // user.textContent = "USER";
              // sectionPost.appendChild(user);
              const userName = ele.name;
              // userName.textContent = ele.name;
              const userEmail = ele.email;
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
