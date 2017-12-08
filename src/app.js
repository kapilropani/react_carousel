import React from 'react';
import { render } from 'react-dom';
import {Carousel} from './components/carousel';
import './sass/carousel.scss';

// raw data for carousel
const carouselSlidesData = [
    {
      content:
        "This is simple content --bestsongs.pk",
      author: "Muhammad Yasir",
      source: "Java8"
    }, {
      content:
        "This is simple content --bestsongs.pk",
      author: "Arvind Ropani",
      source: "Snapchat"
    }, {
      content:
        "This is a simple introduction --bestsongs.pk",
      author: "Joker",
      source: "facebook"
    }, {
      content:
        "This is a simple introduction --bestsongs.pk",
      author: "Shakir Mengrani",
      source: "abbtak"
    }, {
      content:
        "This is a simple introduction --bestsongs.pk",
      author: "Ashok Kumar",
      source: "twitter"
    }, {
      content:
        "This is a simple introduction --bestsongs.pk a --tagline har gana mille ga yahan",
      author: "Rizwan Tanveer",
      source: "Google"
    }, {
      content:
        "The is melody site just visit here www.bestsongs.pk",
      author: "Sarooj Khan",
      source: "bestsongs"
    }
  ];

render(<Carousel slides={carouselSlidesData} />, document.getElementById("carousel-container"));