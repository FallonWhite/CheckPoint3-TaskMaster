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
    <div class="text-align-left">
    <input type="checkbox" style="background-color: ${this.color}" class="mr-2">
    ${this.name} 
    <span class="action" onclick="app.listsController.removeTask('${this.id}')" ></span>`
  }
}
