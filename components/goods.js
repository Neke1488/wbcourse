export default class Goods {
    constructor(data, goodsOptions, addGoodsToArrayWithKey, removeGoodsFromArrayWithKey, countChangeGoodsWithKey, 
        makePlusToCountInAccordWithKey, makeMinusToCountInAccordWithKey, 
        makePlusToPriceInAccordWithKey, makeMinusToPriceInAccordWithKey, 
        makePlusToAllPriceForGoodsWithKey, makeMinusToAllPriceForGoodsWithKey,
        plusTotalCountWithKey, minusTotalCountWithKey,
        minusOldPrice, plusOldPrice, minusDiscount, plusDiscount,
        plusCount, minusCount, checkInputGoodsWithKey, inputOnAllGoods,
        inputOffAllGoods, missingGoodsView,
        ) {
            this.datas = data;
            this.oldPriceKnow = data.oldPrice;
            this.optionsGoods = goodsOptions;
            this.useKeyToAddGoodsToArray = addGoodsToArrayWithKey;
            this.useKeyToRemoveGoodsFromArray = removeGoodsFromArrayWithKey;
            this.useKeyToChangeGoods = countChangeGoodsWithKey;
            this.plusToCountAccord = makePlusToCountInAccordWithKey;
            this.minusToCountAccord = makeMinusToCountInAccordWithKey;
            this.plusToPriceInAccord = makePlusToPriceInAccordWithKey;
            this.minusToPriceInAccord = makeMinusToPriceInAccordWithKey;
            this.plusToAllPriceGoods = makePlusToAllPriceForGoodsWithKey;
            this.minusToAllPriceGoods = makeMinusToAllPriceForGoodsWithKey;
            this.plusToAllCount = plusTotalCountWithKey;
            this.minusToAllCount = minusTotalCountWithKey;
            this.makeMinusOldPrice = minusOldPrice;
            this.makePlusOldPrice = plusOldPrice;
            this.makeMinusDiscount = minusDiscount;
            this.makePlusDiscount = plusDiscount;
            this.makePlusCount = plusCount;
            this.makeMinusCount = minusCount;
            this.makeCheckInputGoods = checkInputGoodsWithKey;
            this.onInputAllGoods = inputOnAllGoods;
            this.offInputAllGoods = inputOffAllGoods;
            this.showedMissinGoods = missingGoodsView;
            this.dateOfDelivery = this.datas.dateOfDelivery;
            this.id = datas.id;
            this.image = data.image;
            this.isChecked = false;
        }
        oldSumRender = ({summa, discount, discountUser}) => {
            this.goodItem.querySelector(this.optionsGoods.goodOldPrice).textContent = `${summa.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`;
       
            if (discount) {
                this.goodItem.querySelector(this.optionsGoods.goodDiscountPrice).textContent = `Скидка ${this.datas.price.discount}%`;
                this.goodItem.querySelector(this.optionsGoods.goodAllDiscountPrice).textContent = `-${discount} сом`;
            }

            if (discountUser) {
                this.goodItem.querySelector(this.optionsGoods.goodDiscountForPerson).textContent = `Скидка покупателя ${this.datas.price.discountUser}%`;
                this.goodItem.querySelector(this.optionsGoods.goodAllDiscountPriceForPerson).textContent = `-${discountUser} сом`;
            }
        }
        sumOldSum = (amount) => {
            const summa = this.oldPriceKnow * amount;
            let discount = null;
            let discountUser = null;
            if (this.datas.price.discount) {
                discount = (((this.oldPriceKnow * amount) * this.datas.price.discount) / 100 ).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
            }
            if (this.datas.price.discountUser) {
                discountUser = (((this.oldPriceKnow * amount) * this.datas.price.discountUser) / 100).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
            }
            return {summa, discount, discountUser};
        }

        summaRender = (value) => {
            value.toString().length > 5 ? this.newPriceElem.classList.add(this.optionsGoods.goodTextForNewPrice) : this.newPriceElem.classList.remove(this.optionsGoods.goodTextForNewPrice);
            this.newPriceElem.textContent = `${value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}`;
        }

        editSumma = (amount) => {
            this.
        }
}   