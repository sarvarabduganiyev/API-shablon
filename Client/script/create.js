const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const release_date = document.querySelector("#release-date").value;
  const imageURL = document.querySelector("#imageURL").value;
  const developer = document.querySelector("#developer").value;

  const newGame = {
    title: title,
    description: description,
    "release-date": release_date,
    imageURL: imageURL,
    developer: developer,
  };
  postData("http://localhost:3000/games",newGame).then((data) => {
     if(data === true){
         const par = document.createElement("p");
         par.classList.add("bg-green-500","text-white","text-3xl","text-center","w-full","py-6");
         par.innerHTML = "Succsess";
         document.querySelector("body").prepend(par);
     }
     else{
        const par2 = document.createElement("p");
        par2.classList.add("bg-red-500","text-white","text-3xl","w-full","py-6","mb-6","text-center");
        par2.innerHTML = "Danger";
        document.querySelector("body").prepend(par2);
     }

  });
});
