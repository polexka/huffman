class Form {
  constructor(id, callback) {
    this._id = id;
    this._element = document.getElementById(id);
    this._textarea = this._element.querySelector('.textarea');
    this._button = this._element.querySelector('.form__button');
    this._callback = callback;
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this._textarea.disabled = true;
    this._button.disabled = true;
    this._callback(this._id);
  }

  setEventListeners() {
    this._element.addEventListener('submit', this._handleSubmit);
  }

  enableForm() {
    this._textarea.disabled = false;
    this._button.disabled = false;
  }

  setTextArea(value) {
    this._textarea.value = value;
  }

  getTextArea() {
    return this._textarea.value;
  }
}

export default Form;