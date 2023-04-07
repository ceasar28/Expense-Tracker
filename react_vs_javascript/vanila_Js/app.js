const button = document.querySelector("button");

// declaring the  modal
let modal;
let backdrop;

// adding event listerner to the button and a showModalHandler callback
button.addEventListener("click", showModalHandler);

// declaring the show modal callback
const showModalHandler = () => {
  if (modal) {
    return;
  }

  modal = document.createElement("div");
  modal.className = "modal";

  const modalText = document.createElement("p");
};
