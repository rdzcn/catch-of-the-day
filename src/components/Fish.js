import React from 'react';

class Fish extends React.Component {
  render() {
    const { details, index } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!'; 

    // const { details, index } = this.props means this: 
      // const details = this.props.details;
      // const index = this.props.index;


    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{details.price}</span>
        </h3>
        <p>{details.desc}</p>
        <button onClick={() => this.props.addToOrder(index)}  disabled={!isAvailable}>{buttonText}</button>
      </li>
    );
  }
}

export default Fish;
