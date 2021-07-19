import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, color, id = generateId(), }) {
    this.id = id
    this.listId = listId
    this.name = name
    this.color = color
    this.total = 1
  }


  get Template() {
    return `
    <div class="${this.listId}">
    <input type="checkbox" id="" style="background-color: ${this.color}" class="check() uncheck() mr-2" onclick="check() uncheck()">
    ${this.name} 
<button type="destroy" class="btn btn-primary btn-outline-info btn-sm my-1 ml-5 pull-right" onclick="app.listsController.removeTask('${this.id}')">Delete</button></span>`
  }
}

