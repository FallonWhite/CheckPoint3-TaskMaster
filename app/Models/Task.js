import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, color, id = generateId() }) {
    this.id = id
    this.listId = listId
    this.name = name
    this.color = color
    this.total = 1
    this.checked = localStorage.getItem(this.id)
  }


  get Template() {
    return `
    <div class="${this.listId}">
    <input type="checkbox" style="background-color: ${this.color}" class="mr-2" onclick="app.listsController.checkBox('${this.id}','${this.listId}')" ${this.checked}>
    ${this.name} 
<button type="destroy" class="btn btn-primary btn-outline-info btn-sm my-1 ml-5 pull-right" onclick="app.listsController.removeTask('${this.id}')">Delete</button>`
  }
}

