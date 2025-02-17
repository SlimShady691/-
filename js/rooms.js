document.addEventListener('DOMContentLoaded', function() {
    const slides = [
      {
        img: '/image/rooms_page/1.png',
        title: '"СТАНДАРТ"',
        subtitle: 'Одноместный номер с полуторной кроватью состоит из прихожей, спальни и санузла. В распоряжении гостей жк телевизор (спутниковое ТВ), холодильник, сплит-ситема, телефон. Имеется доступ к сети интернет.'
      },
      {
        img: '/image/rooms_page/2.png',
        title: '"БИЗНЕСКЛАСС"',
        subtitle: 'Однокомнатный номер с двуспальной кроватью состоит из прихожей, спальни и санузла. В распоряжении гостей жк телевизор (спутниковое ТВ), холодильник, сплит-ситема, телефон. Имеется доступ к сети интернет.'
      },
      {
        img: '/image/rooms_page/3.png',
        title: '"ЛЮКС"',
        subtitle: 'Двухкомнатный номер состоит из прихожей, спальни, санузла и гостиной, которую можно использовать как зону питания и рабочее место. Номер оборудован мягкой и корпусной мебелью, холодильником, жк телевизором (спутниковое ТВ), сплит-системой. Имеется доступ к сети интернет.'
      },
      {
        img: '/image/rooms_page/4.png',
        title: '"СВАДЕБНЫЙ"',
        subtitle: 'Свадебный номер состоит из прихожей, спальни, санузла и гостиной, которую можно использовать как зону питания и рабочее место. Номер оборудован мягкой и корпусной мебелью, холодильником, жк телевизором (спутниковое ТВ), сплит-системой. Имеется доступ к сети интернет.'
      }
    ];

    let currentSlide = 0;

    const sliderImg = document.querySelector('.slider__img');
    const sliderTitle = document.querySelector('.name');
    const sliderSubtitle = document.querySelector('.name__subtitle');
    const dots = document.querySelectorAll('.dot');
    const rightArrow = document.querySelector('.slider__arrow.right');
    const leftArrow = document.querySelector('.slider__arrow.left');
    const sliderDotsContainer = document.querySelector('.slider__dots');

    // Функция для обновления активной точки
    function updateDots(index) {
      document.querySelector('.dot.active').classList.remove('active');
      dots[index].classList.add('active');
    }

    // Функция смены слайда с fade-анимацией
    function changeSlide(newIndex) {
      // Добавляем класс fade для плавного исчезновения элементов
      sliderImg.classList.add('fade');
      sliderTitle.classList.add('fade');
      sliderSubtitle.classList.add('fade');
      leftArrow.classList.add('fade');
      rightArrow.classList.add('fade');
      sliderDotsContainer.classList.add('fade');

      // Ждем окончания fade-out (0.5s)
      setTimeout(() => {
        currentSlide = newIndex;

        // Обновляем данные слайда
        sliderImg.src = slides[currentSlide].img;
        sliderTitle.textContent = slides[currentSlide].title;
        sliderSubtitle.textContent = slides[currentSlide].subtitle;

        // Обновляем активную точку
        updateDots(currentSlide);

        // Убираем класс fade — элементы плавно появляются (fade-in)
        sliderImg.classList.remove('fade');
        sliderTitle.classList.remove('fade');
        sliderSubtitle.classList.remove('fade');
        leftArrow.classList.remove('fade');
        rightArrow.classList.remove('fade');
        sliderDotsContainer.classList.remove('fade');
      }, 500);
    }

    // Обработчик клика по правой стрелке
    rightArrow.addEventListener('click', () => {
      let nextSlide = currentSlide + 1;
      if (nextSlide >= slides.length) {
        nextSlide = 0;
      }
      changeSlide(nextSlide);
    });

    // Обработчик клика по левой стрелке
    leftArrow.addEventListener('click', () => {
      let prevSlide = currentSlide - 1;
      if (prevSlide < 0) {
        prevSlide = slides.length - 1;
      }
      changeSlide(prevSlide);
    });
  });