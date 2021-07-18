import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, color, id = generateId() }, total) {
    this.id = id
    this.listId = listId
    this.name = name
    this.color = color
    this.total = total
  }


  get Template() {
    return `
    <div class="${this.listId}">
    <input type="checkbox" style="background-color: ${this.color}" class="mr-2">
    ${this.name} 
<button type="destroy" class="btn btn-primary btn-outline-info btn-sm ml-3 " onclick="app.listsController.removeTask('${this.id}')">Delete</button></span>`
  }
}
