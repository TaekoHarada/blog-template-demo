document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const toggleButton = document.createElement("button");
  toggleButton.innerText = "Menu";
  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  document.body.insertBefore(toggleButton, nav);
});

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 4.5,
    loop: true, // 無限ループ
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000, // 5秒ごとに自動でスライド
      disableOnInteraction: false,
    },
    speed: 800, // スライドのトランジションの速度を800ミリ秒に設定
  });
});
