class FormValidator {
  constructor(config, formEl) {
    this._formEl = formEl;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.inputSelector;
    this._errorClass = config.inputSelector;
    this._inputErrorClass = config.inputSelector;
    this._inactiveButtonClass = config.inputSelector;
  }

  enableValidation() {}
}

export default FormValidator;
