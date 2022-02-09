export default class Section {
  constructor(containerSelector, renderer) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._containerSelector.append(item);
  }

  prependItem(item){
    this._containerSelector.prepend(item);
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

}
