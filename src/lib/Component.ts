/**
 * The Component parent
 */

class Component {
  name: string;

  model: {};

  constructor({ name, model } : { name : string; model: {}; }) {
    this.name = name;
    this.model = model;
  }

  // proxyModel(model) {
  //   return new Proxy(model, {
  //     set: (obj, prop, value) => {
  //       obj[prop] = value;
  //       if (this.reRender) this.reRender();
  //       return true;
  //     },
  //   });
  // }

  // eslint-disable-next-line class-methods-use-this
  render() : HTMLElement {
    return document.createElement('');
  }
}

export default Component;
