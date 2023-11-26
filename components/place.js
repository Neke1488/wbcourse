export default class Place {
    constructor({data, render}, placeContainer) {
        this.datas = data;
        this.renderer = render;
        this.container = document.querySelector(placeContainer);
    }
    deleteItems = () => {
        this.container.innerHTML = '';
    }
    setItem = (e) => {
        this.container.prepend(e);
    }
    rendering = () => {
        this.datas.reverse().forEach(item => this.render(item));
    }
}