const glow = document.getElementById("cursor-glow");

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    glow.style.background = `
      radial-gradient(
        400px circle at ${x}px ${y}px,
        rgba(255, 255, 255, 0.1),
        transparent 80%
      )
    `;
  });




const careerCards = document.querySelectorAll(".career-card");

careerCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    careerCards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.classList.add("blur-sm");
      }
    });
  });

  card.addEventListener("mouseleave", () => {
    careerCards.forEach((otherCard) => {
      otherCard.classList.remove("blur-sm");
    });
  });
});



const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    projectCards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.classList.add("blur-sm");
      };
    });
  });


  card.addEventListener("mouseleave", () => {
    projectCards.forEach((otherCard) => {
      otherCard.classList.remove("blur-sm")
    });
  });
});
