export default class Popup {
    constructor(popupVariant) {
        this.popupElem = document.querySelector(popupVariant);
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
    closeWithEscBtn = ({key}) => {
        if (key === 'Escape') {
            this.closePopup();
        }
    };
    setEventListener() {
        this.popupElem.addEventListener('mousedown', ({target}) => {
            if (target.classList.contains('show_popup_window') || target.classList.contains('close_popup_window')) {
                this.closePopup();
            }
        })
    };
    closePopup() {
        this.popupElem.classList.remove('show_popup_window');
        document.removeEventListener('keydown', this.closeWithEscBtn);
    };
    openPopup() {
        this.popupElem.classList.add('show_popup_window');
        document.addEventListener('keydown', this.closeWithEscBtn);
    };

}