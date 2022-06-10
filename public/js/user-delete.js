let deleteUserElement = document.getElementById("delete-user");

let deleteBackElements = document.getElementById("delete-back")

deleteUserElement.addEventListener("click", (event) => {
  let userId = deleteUserElement.getAttribute("user-id");
  console.log(userId)
  fetch(`/user/delete/${userId}`, {
      method: "DELETE"
    })
    .then(() => {
      window.location.href = "/user"
    })

});

deleteBackElements.addEventListener("click", (event)=>{
  window.location.href = "/user"
})