getData("http://localhost:3000/games").then( game => {
  const gridDiv = document.querySelector("#gridDiv");
  game.forEach( element => {
    const myDiv = document.createElement("div");
    myDiv.classList.add("bg-white","rounded-lg","overflow-hidden","mb-10","shadow-2xl","border");
    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", element.imageURL); 
    cardImg.setAttribute("alt", element.title);
    cardImg.classList.add("cursor-pointer");
    cardImg.classList.add("w-full");
    myDiv.append(cardImg);
    const innerdiv = document.createElement("div");
    innerdiv.setAttribute("class","p-8 sm:p-9 md:p-7 xl:p-9 text-center");
    myDiv.append(innerdiv);
    const link1 = document.createElement("a");
    link1.setAttribute("target","_blank");
    link1.setAttribute("href",`./detail.html?id=${element.id}`);
    link1.setAttribute("class","font-semibold  text-xl  xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary");
    link1.innerHTML = element.title;
    innerdiv.append(link1);
    gridDiv.append(myDiv);
  });
});
