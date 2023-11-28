import '/styles.css';
import { formActions } from './components/constant.js';
import * as all from './components/constant.js';
import Basket from './components/basket.js';
import Card  from './components/card.js';
import Delivery from './components/delivery.js';
import Goods from './components/goods.js';
import Place from './components/place.js';
import PopupChoosePayment from './components/popupChoosePayment.js';
import PopupToAddress from './components/popupToAddress.js';
import TakingDelivery from './components/takingdelivery.js';
import Validator from './components/validator.js';

const goodItemList = [];
const cardList = [];
const deliveryAddressList = [];
const deliveryTakingAddress = [];

const fromValidationBasket = new Validator(formActions, all.basketView);

const goodList = new Place({
    data: all.userGoods, renderos: (item) => {
        const good = new Goods(
            item, all.goodsOptions, basket.addGoodIntoTheList,
            basket.removeGoodsIntoTheList, basket.arrayForChangeCountGoods,
            basket.basketCounterDown, basket.basketCounterUp, basket.priceBasketDown,
            basket.priceBasketUp, basket.totalPriceUp, basket.totalPriceDown,
            basket.totalCountUp, basket.totalCountDown, basket.totalOldPriceDown,
            basket.totalOldPriceUp, basket.totalDiscountDown, basket.totalDiscountUp,
            basket.countUp, basket.countDown, basket.checkGoodsInput, basket.allGoodsNotChecked,
            basket.allGoodsIsChecked, basket.missingGoodsAll,
        );
        goodItemList.push(good);
        const goodElem = good.createGood();
        goodList.setItem(goodElem);
    }
},
    all.goodContainer,
);

const cardListInPopup = new Place({
    data: all.userData.cards,
    renderos: (item) => {
        const card = new Card(item, all.card, popupChoosePayment.allInputsOff);
        cardList.push(card);
        const cardElement = card.createCardNow();
        cardListInPopup.setItem(cardElement);
    },
},
    all.modalContainerForChoosePay,
);

const popupForLocation = new Place({
    data: all.userData.delivery.fromAddress,
    renderos: (item) => {
        const takingDelivery = new TakingDelivery(item, all.location.locationPosition, all.location, popupToAddress.allInputsOff);
        deliveryAddressList.push(takingDelivery);
        const deliveryElement = takingDelivery.createLocationElement();
        popupForLocation.setItem(deliveryElement);
    }
},
all.modalContainerForChooseLocation,
);

const popupForLocationDelivery = new Place({
    data: all.userData.delivery.toAddress,
    renderos: (item) => {
        const locationDelivery = new TakingDelivery(item, all.location.locationDeliveryPoint, all.location, popupToAddress.allInputsOff);
        deliveryTakingAddress.push(locationDelivery);
        const deliveryLocationElement = locationDelivery.createDeliveryLocationElement();
        
        popupForLocationDelivery.setItem(deliveryLocationElement);
    }
},
all.modalContainerForOtherLocation,
);
const basket = new Basket(all.basketOptions, goodItemList, {
    deliveryRender: (itemOfList) => {
        const listOfItems = new Place({
            data: itemOfList,
            renderos: (item) => {
                const delivery = new Delivery(
                    item
                );
                const deliveryElem = delivery.createDeliveryAll();

                listOfItems.setItem(deliveryElem);
            }
        },
        all.chooseItemsForDeliveryContainer
        );
        return listOfItems;
    },
}
);

const popupChoosePayment = new PopupChoosePayment(
    all.popupVariants.choosePayment, cardList, basket.changeCard
);
const popupToAddress = new PopupToAddress(
    all.popupVariants.chooseAddress, deliveryAddressList, deliveryTakingAddress, basket.addressChange
);

goodList.rendering();
cardListInPopup.rendering();
popupForLocation.rendering();
popupForLocationDelivery.rendering();

all.choosePayButton.addEventListener('click', () => {
    popupChoosePayment.openPopup();
});

all.chooseAddressButton.addEventListener('click', () => {
    popupToAddress.openPopup();
});

all.choosePaySidebar.addEventListener('click', () => {
    popupChoosePayment.openPopup();
});

all.chooseAddressSidebar.addEventListener('click', () => {
   console.log(popupToAddress);
    popupToAddress.openPopup();
});

basket.addFirstGood();
basket.setEventListeners();
basket.turnOnAllGoods();
popupChoosePayment.chooseCardBrand();
popupChoosePayment.setEventListener();
popupToAddress.setCurrentAddress();
popupToAddress.setEventListener();
fromValidationBasket.validationOn();
