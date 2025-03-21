let title = document.querySelector("#title");
let description = document.querySelector("#description");
let image = document.querySelector("#image");
let changeTextBtn = document.querySelector("#change-text-btn");
let toggleImageBtn = document.querySelector("#toggle-image-btn");
let updateDescriptionBtn = document.querySelector("#update-description-btn");

changeTextBtn.addEventListener("click", function () {
    title.innerHTML = "Заголовок змінено";
});

image.addEventListener("click", function () {
    if (image.getAttribute("src") === "https://placehold.co/300x300") {
        image.setAttribute("src", "https://placehold.co/350x350");
    } else {
        image.setAttribute("src", "https://placehold.co/300x300");
    }
});

toggleImageBtn.addEventListener("click", function () {
    image.classList.toggle("border");
    image.classList.toggle("border-dark");
    image.classList.toggle("shadow-lg");
});

updateDescriptionBtn.addEventListener("click", function () {
    let descriptions = [
        "Опис оновлено! Новий зміст тут.",
        "Ще один випадковий текст для опису.",
        "Це новий текст, замість старого.",
        "Опис змінено, дякую за кліки!"
    ];
    let randomIndex = Math.floor(Math.random() * descriptions.length);
    description.innerHTML = descriptions[randomIndex];
});
