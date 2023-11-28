import Popup from "./popup";

export default class PopupChoosePayment extends Popup {
    constructor(popupVariant, listOfCards, changeCardWithKey) {
        super(popupVariant);

        this.cardList = listOfCards;
        this.btnCard = document.querySelector('.popup_btn[data-type="popup_button_choose_payment"]');
        this.changeCardWithKeys = changeCardWithKey;
    }
    chooseCardBrand = () => {
        this.cardActive = this.cardList[this.cardList.length - 1];
        this.cardActive.inputOn();
        this.changeCardWithKeys(this.cardList[this.cardList.length - 1]);  
    }
    setEventListener = () => {
        super.setEventListener();

        this.btnCard.addEventListener('click', () => {
            this.cardActive = this.cardChanger();
            this.allInputsOff();
            this.changeCardWithKeys(this.cardActive);
            this.closePopup();
        })
    }
    allInputsOff = () => {
        this.cardList.forEach(card => card.inputOff());
    }

    cardChanger = () => {
        const activeCard = this.cardList.find(card => card.isChecked);
        return activeCard;
    }
    openPopup() {
        super.openPopup();
        this.cardList.forEach(card => card.inputOff());
        this.cardActive.inputOn();
    }
}