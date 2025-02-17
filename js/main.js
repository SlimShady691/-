const swiper = new Swiper('.swiper', {
  direction: 'horizontal', // Оставляем горизонтальный слайдер
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, // Позволяет двигать вручную
    hide: false, // Оставляет видимым
  },
});

document.addEventListener("DOMContentLoaded", function () {
  function setupDatepicker(iconSelector, inputSelector) {
    const icon = document.querySelector(iconSelector);
    const input = document.querySelector(inputSelector);

    if (icon && input) {
      icon.addEventListener("click", function () {
        input.type = "date"; // Меняем тип на date
        input.showPicker(); // Открываем календарь
      });

      input.addEventListener("change", function () {
        input.type = "text"; // Возвращаем тип, чтобы убрать значок календаря
        if (input.value) {
          let formattedDate = new Date(input.value).toLocaleDateString("ru-RU");
          input.value = formattedDate; // Форматируем дату в удобный вид
        }
      });
    }
  }

  setupDatepicker(".icon-checkin", "#checkin");
  setupDatepicker(".icon-checkout", "#checkout");
});


