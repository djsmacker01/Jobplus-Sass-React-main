import React from 'react';
import './listings.scss';

import Paginate from '../paginate/paginate';

import { StarSaved, Money, Location, Timer } from '../images';

export default function listings() {
  return (
    <section>
      <a href="apply.html">
        <div className="listing__card">
          <header className="listing__header">
            <h1 className="listing__title">Regulatory Affairs Senior Manager</h1>
            <img className="listing__saved" src={StarSaved} alt="" />
            <p className="listing__company">
              Posted by <span>Koco Media</span>
            </p>
          </header>

          <ul className="listing__items">
            <li>
              <img src={Money} alt="" />
              <b>Salary negotiable</b>
            </li>
            <li>
              <img src={Location} alt="" />
              Heyes, <b>Uxbridge</b>
            </li>
            <li>
              <img src={Timer} alt="" />
              Contract, full-time
            </li>
          </ul>

          <p className="listing__detail">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
            asperiores ullam minus at <b>Read more...</b>
          </p>

          <a href="" className="listing__cta">
            Withdraw application
          </a>
        </div>
      </a>
      <Paginate />
    </section>
  );
}
