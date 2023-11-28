export default class Validator {
    constructor(formActions, form) {
        this.formOptions = formActions;
        this.formas = form; 
        this.listForInput = Array.from(this.formas.querySelectorAll(this.formOptions.inputPlace));
        this.elemButton = this.formas.querySelector(this.formOptions.btnSumbit);
    }

    ifInputInvalid = () => {
        return this.listForInput.some((inputItemElem) => !inputItemElem.validity.valid);
    }
    instrumentButtonState = () => {
        if (this.ifInputInvalid()) { 
            this.elemButton.disabled = true;
            console.log("cghfd", this.elemButton.disabled); 
        } else {
            this.elemButton.disabled = false;
        }
    }
    errorOnInputHide = (inputItemElem) => {
        const errorElem = this.formas.querySelector(`.${inputItemElem.id}_error`);
        inputItemElem.classList.remove(this.formOptions.inputError);
        errorElem.classList.remove(this.formOptions.errorPlace);
    }

    errorOnInputShow = (inputItemElem) => {
        const errorElem = this.formas.querySelector(`.${inputItemElem.id}_error`);
        inputItemElem.classList.add(this.formOptions.inputError);
        errorElem.classList.add(this.formOptions.errorPlace);
    }

    inputCheckValidation = (inputItemElem) => {
        if (!inputItemElem.validity.valid) {
            this.errorOnInputShow(inputItemElem, inputItemElem.validationMessage)
        } else {
            this.errorOnInputHide(inputItemElem)
        }
    }
    setEventListener() {
        this.listForInput.forEach((inputItemElem) => {
            inputItemElem.addEventListener('change', () => {
                if (inputItemElem.value.length) {
                    this.inputCheckValidation(inputItemElem);
                }
            }) 
            inputItemElem.addEventListener('input', () => {
                this.errorOnInputHide(inputItemElem);
            })
        })
    }

    validationOn = () => {
        this.formas.addEventListener('submit', (e) => { e.preventDefault(); 
        })
        this.setEventListener();
    }
}