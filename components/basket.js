import { goodsTitles } from './constant.js';
import { monthTitles } from './constant.js';
import calculation from './calculation.js';

export default class Basket {
    constructor(basketOptions, goodList, { deliveryRender }) {
        this.allPrice = null;
        this.allCount = null;
        this.countVal = null;
        this.goodsAccordPrice = 0;
        this.allOldPrice = null;
        this.allDiscount = null;
        this.goodsAccordCount = null;
        this.allCheckboxesChecked = false;
        this.basketVar = basketOptions;
        this.goodsVar = goodList;
        this.allGoodsList = goodList;
        this.goodsWithMissingPos = document.querySelector(this.basketVar.goodsHiddenList);
        this.renderDelivery = deliveryRender;
        this.goodsCountAccordion = document.querySelector(this.basketVar.accordFromBasketCountGoods);
        this.goodsPriceAccordion = document.querySelector(this.basketVar.accordFromBasketPriceOfGoods);
        this.goodsAllCheckboxAccord = document.querySelector(this.basketVar.goodsCheckboxAll);
        this.goodsAllCheckboxAccordRemove = document.querySelector(this.basketVar.goodsCheckboxAllRemove);
        this.allCardIcons = document.querySelectorAll(this.basketVar.cardPay);
        this.allCardDates = document.querySelectorAll(this.basketVar.cardDate);
        this.allCardNumbers = document.querySelectorAll(this.basketVar.cardNumber);
        this.deliveryVariables = document.querySelector(this.basketVar.typeDelivery);
        this.openDeliverySidebar = document.querySelector(this.basketVar.deliverySidebar);
        this.deliveryDataVisible = document.querySelector(this.basketVar.deliveryData);
        this.deliveryAddressVisible = document.querySelector(this.basketVar.deliveryAddress);
        this.deliveryAddressSidebarVisible = document.querySelector(this.basketVar.deliveryChooseAddressSidebar);
        this.deliveryRatingAll = document.querySelector(this.basketVar.deliveryRating);
        this.deliveryHoursVisible = document.querySelector(this.basketVar.deliveryHours);
        this.totalPriceBasketVisible = document.querySelector(this.basketVar.basketPriceTotal);
        this.totalCountPositionAtBasket = document.querySelector(this.basketVar.basketCountTotal);
        this.basketOldPriceAll = document.querySelector(this.basketVar.basketOldPriceTotal);
        this.basketTotalDiscountVisible = document.querySelector(this.basketVar.basketDiscount);
        this.chooseDateToDeliverySidebar = document.querySelector(this.basketVar.basketChooseDataTotalDelivery);
        this.chooseItemToDeliverySidebar = document.querySelector(this.basketItemsAddedToDelivery);
        this.checkboxBasketPayment = document.querySelector(this.basketVar.basketCheckboxSidebarPayment);
        this.checkboxBasketPaymentRemove = document.querySelector(this.basketVar.basketCheckboxSidebarPaymentRemove);
        this.buttonChooseBasketTotal = document.querySelector(this.basketVar.basketButtonChooseTotalSubmit);
        this.basketCounterForGoods = document.querySelector(this.basketVar.counterForBasketGoods);
        this.mobilenavbarCounterForGoods = document.querySelector(this.basketVar.counterForMobile);
    }

    totalDiscountRender = () => {
        this.basketTotalDiscountVisible.textContent = `-${this.allDiscount.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`;
    }
    
    totalDiscountDown = (value) => {
        this.allDiscount -= value;
        this.totalDiscountRender();
    }

    totalDiscountUp = (value) => {
        this.allDiscount += value;
        this.totalDiscountRender();
    }

    renderToTotalOldPrice = () => {
        this.basketOldPriceAll.textContent = `${this.allOldPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`;
    }

    totalOldPriceDown = (value) => {
        this.allOldPrice -= value;
        this.renderToTotalOldPrice();
    }

    totalOldPriceUp = (value) => {
        this.allOldPrice += value;
        this.renderToTotalOldPrice();
    }

    renderCounter = () => {
        this.totalCountPositionAtBasket.textContent = `${this.allCount} ${calculation(this.allCount, goodsTitles)}`
        this.changeTextOnTheBtnTotal();
    }

    totalCountUp = (count) => {
        this.allCount += count;
        this.renderCounter();
    }

    totalCountDown = (count) => {
        this.allCount -= count;
        this.renderCounter();
    }

    renderCount = () => {
        if (this.countVal <= 0) {
            this.basketCounterForGoods.textContent = '';
            this.mobilenavbarCounterForGoods.textContent = '';
        } else {
            this.basketCounterForGoods.textContent = this.countVal.toString();
            this.mobilenavbarCounterForGoods.textContent = this.countVal.toString();
        }
    }
    countUp = (value) => {
        this.countVal += value;
        this.renderCount();
    }
    countDown = (value) => {
        this.countVal -= value;
        this.renderCount();
    }

    renderToAllPrice = () => {
        this.totalPriceBasketVisible.textContent = `${this.allPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`;
    }
    totalPriceUp = (value) => {
        this.allPrice += value;
        this.renderToAllPrice();

        if(!this.checkGoodsInput()) {
            this.allGoodsNotChecked();
        }
    }

    totalPriceDown = (value) => {
        this.allPrice -= value;
        this.renderToAllPrice();

        if(this.checkGoodsInput()) {
            this.allGoodsIsChecked();
        }
    }


    renderDateToDelivery = (firstDate, lastDate) => {
        const firstMonth = firstDate.getMonth();
        const lastMonth = firstDate.getMonth();
    // возможно пизда 

        if (firstMonth === lastMonth) {
            this.chooseDateToDeliverySidebar.textContent = `${firstDate.getDate()}-${lastDate.getDate()} ${monthTitles[lastMonth].substring(0, 3)}`;
        } else {
            this.chooseDateToDeliverySidebar.textContent = `${firstDate.getDate()} ${monthTitles[firstMonth].substring(0, 3)}-${lastDate.getDate()} ${monthTitles[lastMonth].substring(0, 3)}`;
        }
    }

    deliveryDateCount = (arrayList) => {

        if (arrayList.length) {
            const arrayData = [];
            const arrayDataResult = [];
            let firstDate = Infinity;
            let lastDate = -Infinity;

            arrayList.forEach(good =>{
                good.dateOfDelivery.forEach(date => {
                    for (let count in date) {
                        if (Date.parse(date[count][0]) < firstDate) firstDate = new Date(date[count][0]);
                        if (Date.parse(date[count][1]) > lastDate) lastDate = new Date(date[count][1]);
                    };
                });
                good.dateOfDelivery.forEach((count) => {
                    arrayData.push(
                        {
                            date: [Object.values(count)[0][0], Object.values(count)[0][1]],
                            item: [{count: Object.keys(count)[0], image: good.image}],
                        }
                    )
                })
            });

            arrayData.forEach(data => {
                if (!arrayDataResult.length) {
                    arrayDataResult.push({
                        date: [Object.values(data)[0][0], Object.values(data)[0][1]],
                        item: [{ count: data.item[0].count, image: data.item[0].image} ]}
                        );
                    } else {
                        for (let i = 0; i < arrayDataResult.length; i++) {
                          if (
                            Date.parse(new Date(arrayDataResult[i].date[0])) === Date.parse(new Date(Object.values(data)[0][0])) && Date.parse(new Date(arrayDataResult[i].date[0])) === Date.parse(new Date(Object.values(data)[0][0]))
                          )  {
                            arrayDataResult[i].item.push({ count: data.item[0].count, image: data.item[0].image});
                            return;
                        }
                    }
                    arrayDataResult.push({
                        date: [Object.values(data)[0][0], Object.values(data)[0][1]],
                        item: [{ count: data.item[0].count, image: data.item[0].image }]
                    });
                }

                })
                this.renderDateToDelivery(firstDate, lastDate);

                const deliveryMoment = this.renderDelivery(arrayDataResult);

                deliveryMoment.deleteItems();
                deliveryMoment.rendering();
            } else {
                const deliveryMoment = this.renderDelivery();
                deliveryMoment.deleteItems();
            }
        }

        missingGoodsAll = (item) => {
            this.goodsWithMissingPos.prepend(item);
        }

        renderToAllPriceBasket = () => {
            this.goodsPriceAccordion.textContent = `${this.goodsAccordPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`
        }

        priceBasketDown = (value) => {
            this.renderToAllPriceBasket(-value);
        }

        priceBasketUp = (value) => {
            this.goodsAccordPrice += value;
            this.renderToAllPriceBasket(this.goodsAccordPrice);
        }

        counterBasketRender = (value) => {
            this.goodsCountAccordion.textContent = `${value} ${calculation(value, goodsTitles)}`;
        }

        basketCounterUp = () => {
            this.counterBasketRender(this.goodsAccordCount += 1);
        }

        basketCounterDown = () => {
            this.counterBasketRender(this.goodsAccordCount -= 1);
        }

        renderForCards = (card) => {
            this.allCardIcons.forEach(icon => icon.src = card.data.urlCard);
            this.allCardNumbers.forEach(number => number.textContent = card.data.numberCard);
            this.allCardDates.forEach(date => date.textContent = card.data.dateCard);
        }
        changeCard = (card) => {
            this.renderForCards(card);
        }

        renderForAddresses = (address) => {
            this.deliveryAddressVisible.textContent = address.dated.address;
            this.deliveryAddressSidebarVisible.textContent = address.dated.address;
       
            if (address.templateBlock === this.basketVar.pointDelivery) {
                this.deliveryVariables.textContent = this.basketVar.deliveryPlaceText;
                this.openDeliverySidebar.textContent = this.basketVar.deliveryTypeInSidebarText;
               
                this.deliveryDataVisible.classList.remove(this.basketVar.hideDeliveryData)
                this.deliveryRatingAll.textContent = address.data.rate;
                this.deliveryHoursVisible.textContent = address.data.workHours;
            } else {
                this.deliveryVariables.textContent = this.basketVar.deliveryTypeText;
                this.deliveryDataVisible.classList.add(this.basketVar.hideDeliveryData);
                this.openDeliverySidebar.textContent = this.basketVar.deliveryCourierInSidebarText;
            }
        }

        addressChange = (address) => {
            this.renderForAddresses(address);
        }

        arrayForChangeCountGoods = (idGood, count) => {
            for (let i = 0; i < this.goodsVar.length ; i++) {
                if (this.goodsVar[i].id === idGood) {
                    const [ countDate ] = Object.keys(this.goodsVar[i].dateOfDelivery[this.goodsVar[i].dateOfDelivery.length - 1]);
                    const dateValue = Object.values(this.goodsVar[i].dateOfDelivery[this.goodsVar[i].dateOfDelivery.length - 1][countDate]);
                    const newObj = { [count]: dateValue};
                    this.goodsVar[i].dateOfDelivery[this.goodsVar[i].dateOfDelivery.length - 1] = newObj;
                    delete this.goodsVar[i].dateOfDelivery[this.goodsVar[i].dateOfDelivery.length - 1][countDate];

                    i = this.goodsVar.length + 1;
                }
            }
            this.deliveryDateCount(this.goodsVar);
        }
        removeGoodsIntoTheList = (idDeleteCard) => {
            this.goodsVar = this.goodsVar.filter(item => item.id !== idDeleteCard);
            this.deliveryDateCount(this.goodsVar);
        }
        addFirstGood = () => {
            this.deliveryDateCount(this.goodsVar);
        }

        addGoodIntoTheList = (itemGood) => {
            this.goodsVar = this.goodsVar.filter(item => item.id !== itemGood.id);
            this.goodsVar.push(itemGood);
            this.deliveryDateCount(this.goodsVar);
        }
        allGoodsIsChecked = () => {
            this.allCheckboxesChecked = true;
            this.goodsAllCheckboxAccord.checked = true;
        }

        allGoodsNotChecked = () => {
            this.allCheckboxesChecked = false;
            this.goodsAllCheckboxAccord.checked = false;
        }

        turnOnAllGoods = () => {
            this.allGoodsIsChecked();
            this.allGoodsList.forEach(good => {
                if(!good.isChecked) {
                    good.inputOn();
                };
            });
        }
        checkGoodsInput = () => {
            return this.allGoodsList.every(good => good.isChecked);
        }
        changeTextOnTheBtnTotal = () => {
            if (this.checkboxBasketPayment.checked) {
                this.allPrice.toString().length > 5 ? this.buttonChooseBasketTotal.classList.add(this.basketVar.chooseBasketButtonSmall) : this.buttonChooseBasketTotal.classList.remove(this.basketVar.chooseBasketButtonSmall);
                this.buttonChooseBasketTotal.textContent = `Оплатить ${this.allPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`;
            } else {
                this.buttonChooseBasketTotal.classList.remove(this.basketVar.chooseBasketButtonSmall);
                this.buttonChooseBasketTotal.textContent = 'Заказать';
            }
        }
        settingsInputPayment = () => {
            this.checkboxBasketPayment.checked = !this.checkboxBasketPayment.checked;
            this.changeTextOnTheBtnTotal();
        }
        setEventListeners = () => {
            this.goodsAllCheckboxAccordRemove.addEventListener('click', () => {
                if (!this.allCheckboxesChecked) {
                    this.turnOnAllGoods();
                } else {
                    this.allGoodsNotChecked();
                    this.allGoodsList.forEach(good => {
                        if(good.isChecked) {
                            good.inputOff();
                        };
                    });
                }
            })
            this.checkboxBasketPaymentRemove.addEventListener('click', () => {
                this.settingsInputPayment();
            })
        }
    }

