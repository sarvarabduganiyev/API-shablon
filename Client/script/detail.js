const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");
console.log(myParam);

getData(`http://localhost:3000/games/${myParam}`).then((data) => {
    const myDiv = document.querySelector("#idQosh");

    const header = document.createElement("header");
    header.classList.add("mt-5");

    header.innerHTML = data.title;
    const img = document.createElement("img");
    img.setAttribute("src", data.imageURL);
    header.classList.add("text-3xl");
    const par = document.createElement("p");
    par.innerHTML = data.description;
    par.classList.add("text-xl");
    myDiv.append(header, img, par);
});
const delateBtn = document.querySelector("#delateBtn");
delateBtn.addEventListener("click", () => {
    deleteData(`http://localhost:3000/games/${myParam}`).then((data) => {
        if (data === true) {
            const par = document.createElement("p");
            par.classList.add(
                "bg-green-500",
                "text-white",
                "text-3xl",
                "text-center",
                "w-full",
                "py-6"
            );
            par.innerHTML = "Succsess";
            document.querySelector("body").prepend(par);
            myDiv.remove();
        } else {
            const par2 = document.createElement("p");
            par2.classList.add(
                "bg-red-500",
                "text-white",
                "text-3xl",
                "w-full",
                "py-6",
                "mb-6",
                "text-center"
            );
            par2.innerHTML = "Danger";
            document.querySelector("body").prepend(par2);
        }
    });
});
