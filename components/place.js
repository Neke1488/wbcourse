export default class Place {
    constructor({data, renderos}, placeContainer) {
        this.datas = data;
        this.renderer = renderos;
        this.container = document.querySelector(placeContainer);

    }
    deleteItems = () => {
        this.container.innerHTML = '';
    }
    setItem = (element) => {
        this.container.prepend(element);

    }
    rendering = () => {
        this.datas.reverse().forEach(item => this.renderer(item));
    }
}