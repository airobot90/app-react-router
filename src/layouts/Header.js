import React from "react";
import { Route, Switch } from 'react-router-dom';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import '../styles/Header.css'


const Header = () => {

  // tworzymy tablice, jesli chcemy losowy header
  // const images = [img1, img2, img3];
  // const index = Math.floor(Math.random() * images.length);

  // const img = images[index];

  return (

    <>
      {/* DLA KAZDEJ PODSTRONY MAMY KONKRETNY, PRZYPISANY OBRAZEK W HEADER */}
      <Switch>

        {/* mozemy tutaj przekazac component={headerImage} ale tutaj dajemy cos alternatywnego */}
        <Route path="/" exact render={() => (
          <img src={img1} alt="miasto" />
        )} />

        <Route path="/products" render={() => (
          <img src={img2} alt="miasto" />
        )} />

        <Route path="/contact" render={() => (
          <img src={img3} alt="miasto" />
        )} />

        <Route path="/admin" render={() => (
          <img src={img3} alt="miasto" />
        )} />

        {/* w sytuacji, jak ktos wpisze adres, ktorego nie ma */}
        <Route render={() => (
          <img src={img1} alt="miasto" />
        )} />
      </Switch>


      {/* LOSUJEMY HEADER DLA WYSWIETLANEJ PODSTRONY */}
      {/* <img src={img} alt="header" /> */}

    </>
  )
};

export default Header;
