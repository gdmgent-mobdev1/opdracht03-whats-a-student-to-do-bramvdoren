/**
 * MY HOME COMPONENT
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';

class HomeComponent extends Component {
  constructor() {
    super({
      name: 'home',
      model: {
        counter: 0,
      },
    });
  }

  incrementCounter() {
    this.model.counter += 1;
  }

  render() {
    // create a home container
    const homeContainer = document.createElement('div');

    // append header
    homeContainer.appendChild(
      Elements.createHeader({
        textContent: 'Current value is:',
      }),
    );

    // append a button
    homeContainer.appendChild(
      Elements.createButton({
        textContent: 'Increment',
        onClick: () => {},
      }),
    );

    // return homecontainer
    return homeContainer;
  }
}
export default HomeComponent;
