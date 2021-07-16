// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap'
import HorizontalScroll from 'horizontal-scroll'


Rails.start()
Turbolinks.start()
ActiveStorage.start()


document.addEventListener('turbolinks:load', () => {
  
  const gridItems = document.querySelectorAll(".grid-background > div");
  // loop over grid items and create a random duration + delay for each
  gridItems.forEach((item) => {
    // calculate random number for delay
    const delay = getRandomInt(0, 5);

    // calculate random number for duration
    const duration = getRandomInt(3, 6);

    // set both
    item.style.animationDelay = `${delay}s`;
    item.style.animationDuration = `${duration}s`;
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const blocks = document.querySelectorAll('.scroll-block');
  const container = document.querySelector('.scroll-container');
  const hs = new HorizontalScroll.default({
    blocks : blocks,
    container: container,
});
});