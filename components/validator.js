export default class Validator {
    constructor(formValidatorOption, form) {
        this.formOptions = formValidatorOption;
        this.forms = form; 
        this.listForInput = Array.from(this.forms.querySelectorAll(this.formOptions.input));
        this.elemButton = this.forms.querySelector(this.formOptions.btnSumbit);
    }

    ifInputInvalid = () => {
        return this.listForInput.some((inputItemElem) => !inputItemElem.validity.valid);
    }
    instrumentButtonState = () => {
        if (this.ifInputInvalid()) {
            this.elemButton.disabled = true;
        } else {
            this.elemButton.disabled = false;
        }
    }
    errorOnInputHide = (inputItemElem) => {
        const errorElem = this.forms.querySelector(`.${inputItemElem.id}-error`);
        inputItemElem.classList.remove(this.formOptions.inputError);
        errorElem.classList.remove(this.formOptions.error);
    }
    errorOnInputShow = (inputItemElem) => {
        const errorElem = this.forms.querySelector(`.${inputItemElem.id}-error`);
        inputItemElem.classList.add(this.formOptions.inputError);
        errorElem.classList.add(this.formOptions.error);
    }

    inputCheckValidation = (inputItemElem) => {
        if (!inputItemElem.validity.valid) {
            this.errorOnInputShow(inputItemElem, inputItemElem.validationMessage);
        } else {
            this.errorOnInputHide(inputItemElem);
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
        this.forms.addEventListener('submit', (e) => { e.preventDefault(); 
        })
        this.setEventListener();
    }
}