import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  
  /* constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  } */
  
  goToStore(event) {
    event.preventDefault(); //we stopped the Form from submitting
    // first grab the text from the form
    const storeId = this.storeInput.value; //we can write this because we used 'ref' in the form
    // second we are going to transtion from '/' to '/store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    // Any where else
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
