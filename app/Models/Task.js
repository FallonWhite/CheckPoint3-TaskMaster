import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, color, id = generateId() }) {
    this.id = id
    this.listId = listId
    this.name = name
    this.color = color
  }


  get Template() {
    return `
    <div class="${this.listId}">
    <input type="checkbox" style="background-color: ${this.color}" class="mr-2">
    ${this.name} 
    <span class="action" onclick="app.listsController.removeTask(${this.id}, ${this.name})" ><button type="destroy" class="btn btn-primary btn-outline-info btn-sm ml-3" onclick="app.listsController.destroy('${this.id}, ${this.name}')">Delete</button></span>`
  }
}
