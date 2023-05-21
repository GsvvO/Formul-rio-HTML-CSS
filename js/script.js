let icon = document.querySelector(".passwordChange");
let password = document.getElementById("typeChange");

const passwordChange = () => {

    if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");
        icon.setAttribute("name", "eye-off-outline");
        icon.setAttribute("title", "Esconder senha");
    } else {
        password.setAttribute("type", "password");
        icon.setAttribute("name", "eye-outline");
        icon.setAttribute("title", "Mostrar senha");
    }
}

icon.addEventListener("click", passwordChange);
