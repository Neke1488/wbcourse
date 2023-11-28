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
            this.id = data.id;
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
            this.discountSumma = (this.oldPriceKnow) * (this.datas.price.discount + this.datas.price.discountUser) / 100;
    
            return ((this.oldPriceKnow - this.discountSumma) * amount);
        }
        renderForCounter = (value) => {
            this.goodsCount.value = value;
        }

        makePlusForCounter = () => {
            this.plusBtnForCountGoods.classList.remove(this.optionsGoods.goodCountButtonOff);
            if (this.goodsCount.value >= (this.datas.affordable - 1)) {
                this.plusBtnForCountGoods.classList.add(this.optionsGoods.goodCountButtonOff);
            }
            this.minusBtnForCountGoods.classList.remove(this.optionsGoods.goodCountButtonOff);
            if (this.goodsCount.value >= this.datas.affordable) {
                return this.useKeyToChangeGoods(this.id, parseInt(this.goodsCount.value) + 1);
            }
            if (this.isChecked) {
                this.plusToPriceInAccord(this.oldPriceKnow - this.discountSumma);
                this.summaRender(this.editSumma(parseInt(this.goodsCount.value) + 1));
                this.oldSumRender(this.sumOldSum(parseInt(this.goodsCount.value) + 1));
                this.renderForCounter(parseInt(this.goodsCount.value) + 1);
                this.plusToAllPriceGoods(this.oldPriceKnow - this.discountSumma);
                this.plusToAllCount(1);
                this.makePlusOldPrice(this.oldPriceKnow);
                this.makePlusDiscount(this.discountSumma * this.goodsCount.value);
            }
        }
        makeMinusForCounter = () => {
            this.plusBtnForCountGoods.classList.remove(this.optionsGoods.goodCountButtonOff);
            if (this.goodsCount.value <= 2) {
                this.minusBtnForCountGoods.classList.add(this.optionsGoods.goodCountButtonOff);
            }
            if (this.goodsCount.value <= 1) {
                return this.useKeyToChangeGoods(this.id, parseInt(this.goodsCount.value) - 1);
            }
            if (this.isChecked) {
                this.plusToPriceInAccord(-(this.oldPriceKnow - this.discountSumma));
                this.summaRender(this.editSumma(parseInt(this.goodsCount.value) - 1));
                this.oldSumRender(this.sumOldSum(parseInt(this.goodsCount.value) - 1));
                this.renderForCounter(parseInt(this.goodsCount.value) - 1);
                this.minusToAllPriceGoods(this.oldPriceKnow - this.discountSumma);
                this.minusToAllCount(1);
                this.makeMinusOldPrice(this.oldPriceKnow);
                this.makeMinusDiscount(this.discountSumma * this.goodsCount.value);
            }
        }

        inputOn = () => {
            this.useKeyToAddGoodsToArray(this.datas);
            this.isChecked = true;
            this.goodsInput.checked = true;
            this.plusToAllPriceGoods((this.oldPriceKnow - this.discountSumma) * this.goodsCount.value);
            this.plusToAllCount(parseInt(this.goodsCount.value));
            this.makePlusOldPrice(this.oldPriceKnow * this.goodsCount.value);
            this.makePlusDiscount(this.discountSumma * this.goodsCount.value);
        }

        inputOff = () => {
            this.useKeyToRemoveGoodsFromArray(this.id);
            this.isChecked = false;
            this.goodsInput.checked = false;
            this.minusToAllPriceGoods((this.oldPriceKnow - this.discountSumma) * this.goodsCount.value);
            this.minusToAllCount(parseInt(this.goodsCount.value));
            this.makeMinusOldPrice(this.oldPriceKnow * this.goodsCount.value);
            this.makeMinusDiscount(this.discountSumma * this.goodsCount.value);
        }

        deleteGood = () => {
            this.useKeyToRemoveGoodsFromArray(this.id);
            if (this.isChecked) {
                this.minusToAllPriceGoods((this.oldPriceKnow - this.discountSumma) * this.goodsCount.value);
                this.minusToAllCount(this.goodsCount.value);
                this.makeMinusOldPrice(this.oldPriceKnow * this.goodsCount.value);
                this.makeMinusDiscount(this.discountSumma * this.goodsCount.value);
            };
            this.makePlusCount(-1);
            this.minusToCountAccord();
            this.makeCheckInputGoods() ? this.onInputAllGoods() : offInputAllGoods();
            this.goodItem.remove();
        }
        setEventListenerForMissingGoods = () => {
            this.deleteMissingGoodsBtn.addEventListener('click', () => {
                this.goodsMissing.remove();
            });
            this.missingGoodsPlaceToFavoriteBtn.addEventListener('click', () => {
                this.goodsFavoriteBtn.classList.toggle(this.optionsGoods.goodIconActiveButton);
                this.missingGoodsPlaceToFavoriteBtn.classList.toggle(this.optionsGoods.goodIconActiveButton);
            });
        }
        setEventListeners = () => {
            this.inputRemoveForGoods.addEventListener('click', () => {
                if(!this.isChecked) {
                    this.inputOn();
                } else {
                    this.inputOff();
                }
            });
            this.plusBtnForCountGoods.addEventListener('click', () => {
                this.makePlusForCounter();
            });
            this.minusBtnForCountGoods.addEventListener('click', () => {
                this.makeMinusForCounter();
            });
            this.goodsFavoriteBtn.addEventListener('click', () => {
                this.goodsFavoriteBtn.classList.toggle(this.optionsGoods.goodIconActiveButton);
                this.missingGoodsPlaceToFavoriteBtn.classList.toggle(this.optionsGoods.goodIconActiveButton);
            });
            this.deleteGoodsButton.addEventListener('click', () => {
                this.deleteGood();
            });
        };
        getPlace = (templateBlock, itemPlace) => {
            const goodElem = document.querySelector(templateBlock).content.querySelector(itemPlace).cloneNode(true);
            return goodElem;
        }

        createGoodsMissing = () => {
            this.goodsMissing = this.getPlace(this.optionsGoods.goodMissingBlock, this.optionsGoods.goodMissing);
            this.goodsMissing.querySelector(this.optionsGoods.goodPicture).src = this.datas.image;
            this.goodsMissing.querySelector(this.optionsGoods.goodTitle).textContent = this.datas.name.trim();
            this.goodsMissing.querySelector(this.optionsGoods.goodPicture).alt = this.datas.name.trim();
            
            if (this.datas.color || this.datas.size) {
                
                if (this.datas.color) {
                    
                    this.goodsMissing.querySelector(this.optionsGoods.goodColor).textContent = `Цвет: ${this.datas.color.trim()}`;
                }
                if (this.datas.size) {
                    this.goodsMissing.querySelector(this.optionsGoods.goodSize).textContent = `${this.datas.size}`;
                } else {
                    this.goodsMissing.querySelector(this.optionsGoods.goodWrapForProp).style.display = 'none';
                } 
            } else {
                    this.goodsMissing.querySelector(this.optionsGoods.goodPropertyForItem).style.display = 'none';
                }
                this.missingGoodsPlaceToFavoriteBtn = this.goodsMissing.querySelector(this.optionsGoods.goodFavouriteButton);
                this.deleteMissingGoodsBtn = this.goodsMissing.querySelector(this.optionsGoods.goodDeleteButton);
                this.setEventListenerForMissingGoods();
                return this.goodsMissing;
            }

            createGood = () => {
                this.goodItem = this.getPlace(this.optionsGoods.goodBlock, this.optionsGoods.goodActiveList);
                this.goodsInput = this.goodItem.querySelector(this.optionsGoods.goodInputCheckbox);
                this.inputRemoveForGoods = this.goodItem.querySelector(this.optionsGoods.goodInputRemove);
            
                this.goodItem.querySelector(this.optionsGoods.goodPicture).src = this.datas.image;
                this.goodItem.querySelector(this.optionsGoods.goodPicture).alt = this.datas.name.trim();
                this.goodItem.querySelector(this.optionsGoods.goodTitle).textContent = this.datas.name.trim();
            
                if (this.datas.color || this.datas.size) {
                    if (this.datas.color) {
                        this.goodItem.querySelector(this.optionsGoods.goodColor).textContent = `Цвет: ${this.datas.color.trim()}`;
                    }
                    if (this.datas.size) {
                        this.goodItem.querySelector(this.optionsGoods.goodSize).textContent = `${this.datas.size}`;
                    } else {
                        this.goodItem.querySelector(this.optionsGoods.goodWrapForProp).style.display = 'none';
                    }
                } else {
                    this.goodItem.querySelector(this.optionsGoods.goodPropertyForItem).style.display = 'none';
                }
                this.goodItem.querySelector(this.optionsGoods.goodSellers).textContent = this.datas.seller;
                this.goodItem.querySelector(this.optionsGoods.goodOrganizationName).textContent = this.datas.organization;
                this.goodItem.querySelector(this.optionsGoods.goodOrganizationNamePosition).textContent = this.datas.organizationInformation.organizationName;
                this.goodItem.querySelector(this.optionsGoods.goodOrganizationRequisites).textContent = this.datas.organizationInformation.requisites;
                this.goodItem.querySelector(this.optionsGoods.goodOrganizationAddress).textContent = this.datas.organizationInformation.organizationAddress;
                this.goodsCount = this.goodItem.querySelector(this.optionsGoods.goodCountLabel);
                this.goodsCount.value = this.datas.amount;
                this.newPriceElem = this.goodItem.querySelector(this.optionsGoods.goodNewPrice);
                this.goodsFavoriteBtn = this.goodItem.querySelector(this.optionsGoods.goodFavouriteButton);
                this.deleteGoodsButton = this.goodItem.querySelector(this.optionsGoods.goodDeleteButton);
                this.minusBtnForCountGoods = this.goodItem.querySelector(this.optionsGoods.goodCountButtonMinus);
                this.plusBtnForCountGoods = this.goodItem.querySelector(this.optionsGoods.goodCountButtonPlus);

                this.summaRender(this.editSumma(this.datas.amount));
                this.oldSumRender(this.sumOldSum(this.datas.amount));
            
                if (this.datas.affordable <= 2) {
                    this.goodItem.querySelector(this.optionsGoods.goodAfford).textContent = `Осталось ${this.datas.affordable} шт.`;  
                }

                if (Infinity) {
                    this.showedMissinGoods(this.createGoodsMissing());
                }

                this.setEventListeners();
                this.minusToCountAccord();
                this.makePlusCount(1);
                this.plusToPriceInAccord((this.oldPriceKnow - this.discountSumma) * this.datas.amount);
                return this.goodItem;
            } 
         }
        