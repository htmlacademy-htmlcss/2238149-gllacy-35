const initDropdownMenu = () => {
  const dropdown = document.querySelector('.dropdown');
  const navigationDropdownButton = document.querySelector('.navigation-dropdown-button');
  const searchForm = document.querySelector('.search-form');
  const searchButton = document.querySelector('.search-button');
  const loginForm = document.querySelector('.login-form');
  const loginButton = document.querySelector('.heder-menu-entrance');
  const headerCartDropdown = document.querySelector('.header-cart-dropdown');
  const hederMenuCart = document.querySelector('.heder-menu-cart');

  if (!dropdown) {
    return;
  }

  const hederMenu = {
    catalog: {
    menu: dropdown,
    button: navigationDropdownButton,
    },
    search: {
    menu: searchForm,
    button: searchButton,
    },
    login: {
    menu: loginForm,
    button: loginButton,
    },
    cart: {
    menu: headerCartDropdown,
    button: hederMenuCart
    }
  };

  Object.values(hederMenu).forEach(function(element) {
    element.button.addEventListener('click', (evt) => {
      evt.preventDefault();
    element.menu.classList.toggle('open-popup');
    });
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      const popupOpen = document.querySelector('.open-popup');
      popupOpen.classList.remove('open-popup');
    }
  });
};

const initSearchReset = () => {
  const resetSearchBtn = document.querySelector('.search-erase-button');
  const searchInput = document.querySelector('.search-input');

  if (!searchInput) {
    return;
  }

  resetSearchBtn.addEventListener('click', () => searchInput.value = '');
};

const initModal = () => {
  const contactsButton = document.querySelector('.contacts-button');
  const modalContainer = document.querySelector('.modal-container');
  const modalCloseButton = document.querySelector('.modal-close-button');

  if (!contactsButton) {
    return;
  }

  contactsButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalContainer.classList.remove('modal-container-close');
  });

  modalCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalContainer.classList.add('modal-container-close');
  });

  modalContainer.addEventListener('click', (evt) => {
    if(evt.target.closest('.modal-feedback')) {
     return;
    }
    evt.preventDefault();
    modalContainer.classList.add('modal-container-close');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modalContainer.classList.add('modal-container-close');
    }
  });
};

const initSlider = () => {
  const sliderPrev = document.querySelector('.slider-prev');
  const sliderNext = document.querySelector('.slider-next');
  const slides = document.querySelectorAll('.slider-item');
  const paginationButtons = document.querySelectorAll('.slider-pagination-button');

  if (!slides.length) {
    return;
  }

  let currentSlide = 0;

  const removeSlideActiveState = () => {
    slides[currentSlide].classList.remove('slider-active');
    paginationButtons[currentSlide].classList.remove('pagination-current');
  };

  const addSlideActiveState = () => {
    slides[currentSlide].classList.add('slider-active');
    document.body.style.backgroundColor = slides[currentSlide].dataset.theme;
    paginationButtons[currentSlide].classList.add('pagination-current');
  };

  sliderPrev.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeSlideActiveState();
    if (currentSlide === 0) {
      currentSlide = slides.length -1;
    } else {
      currentSlide -= 1;
    }
    addSlideActiveState();
  });

  sliderNext.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeSlideActiveState();
    if (currentSlide === slides.length -1) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
    addSlideActiveState();
  });

  paginationButtons.forEach((element, index) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      removeSlideActiveState();
      currentSlide = index;
      addSlideActiveState();
    });
  });
};

initDropdownMenu();
initSearchReset();
initModal();
initSlider();
