export default class Card {
    constructor(data, cardOptions, offInput) {
        this.data = data;
        this.cardVar = cardOptions;
        this.isChecked = false;
        this.inputsWithout = offInput;
    }

    cardPlaceGet = () => {
        const cardElem = document.querySelector(this.cardVar.cardPlace).content.querySelector(this.cardVar.cardPosition).cloneNode(true);
        return cardElem;
    }
    setEventListener = () => {
        this.inputForCardRemove.addEventListener('click', () => {
            if (!this.isChecked) {
                this.inputsWithout();
                this.inputOn();
            }
        });
    }
    inputOn = () => {
        this.isChecked = true;
        this.inputForCard.checked = true;
    }
    inputOff = () => {
        this.isChecked = false;
        this.inputForCard.checked = false;
    }
    createCardNow = () => {
        this.cards = this.cardPlaceGet();
        this.cards.querySelector(this.cardVar.cardNumber).textContent = this.data.cardNumber;
        this.cards.querySelector(this.cardVar.cardIcon).src = this.data.cardIconUrl;
        this.inputForCard = this.cards.querySelector(this.cardVar.cardList);
        this.inputForCardRemove = this.cards.querySelector(this.cardVar.cardListRem);
        this.setEventListener();

        return this.cards;
    }
}