let deleteUserElement = document.getElementById("delete-despesa");

let deleteBackElements = document.getElementById("despesaDelete-back")

deleteUserElement.addEventListener("click", (event) => {
    let userId = deleteUserElement.getAttribute("user-id");
    console.log(userId)
    fetch(`/despesa/delete/${userId}`, {
            method: "DELETE"
        })
        .then(() => {
            window.location.href = "/despesa"
        })

});

deleteBackElements.addEventListener("click", (event) => {
    window.location.href = "/despesa"
})