import { monthTitles } from './constant.js';

export default class Delivery {
    constructor(data, itemDeliveryDate) {
        this.datas = data;
        this.itemsData = this.datas.item;
        this.itemsDeliveryDate =  itemDeliveryDate;
    }

    deliveryItemPlace = () => {
        const deliveryItemElem = document.querySelector('#basket_delivery_item').content.querySelector('.delivery_item_img').cloneNode(true);
        return deliveryItemElem;
    }

    createDeliveryItem = (item) => {
        this.deliveryItemDate = this.deliveryItemPlace();
        this.deliveryItemDate.querySelector('.delivery_good_img').src = item.image;
        this.deliveryItemDate.querySelector('.delivery_count_label').textContent = item.count;
    
        return this.deliveryItemDate;
    }

    getDates = () => {
        const firstDate = new Date(this.datas.date[0]).getDate();
        const lastDate = new Date(this.datas.date[1]).getDate();
        const month = new Date(this.datas.date[1]).getMonth();
        return `${firstDate}—${lastDate} ${monthTitles[month]}`;
    }

    getDeliveryPlace = () => {
        const elemOfDelivery = document.querySelector('#basket_delivery').content.querySelector('.delivery_item').cloneNode(true);
        return elemOfDelivery;
    }

    createDeliveryAll = () => {
        this.deliveryDatas = this.getDeliveryPlace();
        this.deliveryDatas.querySelector('.delivery_label').textContent = this.getDates();

        this.deliveryItemPosition = this.deliveryDatas.querySelector('.delivery_goods_list');
        this.itemsData.forEach(item => {
        this.deliveryItemPosition.prepend(this.createDeliveryItem(item));
        })
        return this.deliveryDatas;
    }
}