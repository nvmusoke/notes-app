import React, { Component } from 'react';
import Card from './Card.js';


class Cards extends Component {
  render() {
    return (
        <div>Cards
          <section id="cards" className="container-fluid">
            <div className="row">
              <Card />
            </div>
          </section>
        </div>

    );
  }
}

export default Cards;
