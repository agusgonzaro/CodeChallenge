const button = document.getElementById("btn");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("nombre").value;
    const lastnameInput = document.getElementById("apellido").value;
    const birthdateInput = document.getElementById("nacimiento").value;

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
            "name": nameInput,
            "lastname": lastnameInput,
            "birthdate": birthdateInput
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
});
