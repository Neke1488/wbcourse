import Popup from "./popup";
export default class PopupToAddress extends Popup {
    constructor(popupVariants, locationAddressList, locationDeliveryAddressList, changeElementWithKeys) {
        super(popupVariants);
        this.addressLocationList = locationAddressList;
        this.addressLocationDeliveryList = locationDeliveryAddressList;
        this.popupButton = document.querySelector('.popup_btn[data-type="btn_popup_choose_address"]');
        this.popupTableLocation = document.querySelector('.popup_table_item[data-type="popup_table_courier"]');
        this.popupTableLocationPlace = document.querySelector('.popup_table_block[data-type="popup_table_pick_block"]');
        this.popupLocationPlaceTable = document.querySelector('.popup_table_item[data-type="popup_table_pick_point"]');
        this.popupDeliveryLocationPlaceWithTab = document.querySelector('.popup_table_block[data-type="popup_table_pick_point_block"]');
        this.changeElementKey = changeElementWithKeys;
        this.tableItem = [this.popupTableLocation, this.popupLocationPlaceTable];
        this.tableItemBlock = [this.popupTableLocationPlace, this.popupDeliveryLocationPlaceWithTab];
    }
    setActiveTab = () => {
        this.tableItem.forEach(tabs => tabs.classList.remove('popup_table_item_active'));
        this.tableItemBlock.forEach(block => block.style.display = 'none');

        if (this.activeTabs) {
            this.activeTabs.classList.add('popup_table_item_active');
            this.tableItemBlock[this.tableItem.indexOf(this.activeTabs)].style.display = 'block';
        } else {
            this.tableItem[this.tableItem.length - 1].classList.add('popup_table_item_active');
            this.tableItemBlock[this.tableItemBlock.length - 1].style.display = 'block';
        }
    }

    setCurrentAddress = () => {
        this.tableItem[this.tableItem.length - 1].classList.add('popup_table_item_active');
        this.addressLocationDeliveryList[this.addressLocationDeliveryList.length - 1].inputOn();
        this.changeElementKey(this.addressLocationDeliveryList[this.addressLocationDeliveryList.length - 1]);
    }

    setEventListener = () => {
        super.setEventListener();

        this.popupTableLocation.addEventListener('click', () => {
            this.popupDeliveryLocationPlaceWithTab.style.display = 'none';
            this.popupLocationPlaceTable.classList.remove('popup_table_item_active');
            this.popupTableLocationPlace.style.display = 'block';
            this.popupTableLocation.classList.add('popup_table_item_active');
        })
        this.popupLocationPlaceTable.addEventListener('click', () => {
            this.popupTableLocationPlace.style.display = 'none';
            this.popupTableLocation.classList.remove('popup_table_item_active');
            this.popupDeliveryLocationPlaceWithTab.style.display = 'block';
            this.popupLocationPlaceTable.classList.add('popup_table_item_active');
        })
        this.popupButton.addEventListener('click', () => {
            this.addressActive = this.changeAnyElement();
            
            this.activeTabs = this.tableItem.find(tabs => tabs.classList.contains('popup_table_item_active'));
            this.changeElementKey(this.addressActive);
            this.closePopup();
        })
    }
    closePopup() {
        super.closePopup();
        this.allInputsOff();
        if (this.addressActive) {
            this.addressActive.inputOn();
        }
    }
    openPopup() {
        super.openPopup();
        this.setActiveTab();
        if (!this.addressActive) {
            this.setCurrentAddress();
        }
    }
    allInputsOff = () => {
        this.addressLocationList.forEach(e => e.inputOff());
        this.addressLocationDeliveryList.forEach(e => e.inputOff());
    }
    changeAnyElement = () => {
        const activeElem = this.addressLocationList.find(e => e.isChecked) || this.addressLocationDeliveryList.find(e => e.isChecked);
        return activeElem;
    }
}