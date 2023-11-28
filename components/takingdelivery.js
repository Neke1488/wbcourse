export default class TakingDelivery {
    constructor(dates, templateBlock, elementOptions, allInputOff) {
        this.dated = dates;
        this.optionsForElement = elementOptions;
        this.templateBlock = templateBlock;
        this.deliveryTaking = this.optionsForElement.locationList;
        this.isChecked = false;
        this.offInputAll = allInputOff;
    }
    setEventListener = (itemForDelete) => {
        this.itemInputRemove.addEventListener('click', () => {
            if (!this.isChecked) {
                this.offInputAll();
                this.inputOn();
            }
        });
        this.buttonDeleteForItem.addEventListener('click', () => {
            itemForDelete.remove();
        })
    }
    getPlace = () => {
        const itemElem = document.querySelector(this.templateBlock).content.querySelector(this.deliveryTaking).cloneNode(true);
        return itemElem;
    }
    inputOn = () => {
        this.isChecked = true;
        this.itemInput.checked = true;
    }
    inputOff = () => {
        this.isChecked = true;
        this.itemInput.checked = true;
    }
    createLocationElement = () => {
        this.locationElem = this.getPlace();
        this.locationElem.querySelector(this.optionsForElement.locationAddress).textContent = this.dated.address;
        this.itemInput = this.locationElem.querySelector(this.optionsForElement.locationChoose);
        this.itemInputRemove = this.locationElem.querySelector(this.optionsForElement.locationChooseRemove);
        this.buttonDeleteForItem = this.locationElem.querySelector(this.optionsForElement.locationDelete);
        this.setEventListener(this.locationElem);
        return this.locationElem;
    }
    createDeliveryLocationElement = () => {
        this.deliveryItemElement = this.getPlace();
        this.deliveryItemElement.querySelector(this.optionsForElement.locationAddress).textContent = this.dated.address;
        this.deliveryItemElement.querySelector(this.optionsForElement.locationRating).textContent = this.dated.rate;
        this.itemInput = this.deliveryItemElement.querySelector(this.optionsForElement.locationChoose);
        this.itemInputRemove = this.deliveryItemElement.querySelector(this.optionsForElement.locationChooseRemove);
        this.buttonDeleteForItem = this.deliveryItemElement.querySelector(this.optionsForElement.locationDelete);
        this.setEventListener(this.deliveryItemElement);
        return this.deliveryItemElement;
    }

}