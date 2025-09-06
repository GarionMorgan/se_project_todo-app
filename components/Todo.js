class Todo {
  constructor(data, templateSelector) {
    console.log(data);
    console.log(templateSelector);
    this._data = data;
    this._templateElement = document.querySelector(templateSelector);
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);
    this._todoNameEl = this._todoElement.querySelector(".todo__name");

    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    this._todoNameEl.textContent = this._data.name;

    this._generateCheckboxEl();
    this._setEventListeners();

    // // If a due date has been set, parsing this it with `new Date` will return a
    // // number. If so, we display a string version of the due date in the todo.
    // const dueDate = new Date(data.date);
    // if (!isNaN(dueDate)) {
    //   todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
    //     year: "numeric",
    //     month: "short",
    //     day: "numeric",
    //   })}`;
    // }

    return this._todoElement;
  }
}

export default Todo;
