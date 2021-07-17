import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, id = generateId() }) {
    this.id = id
    this.listId = listId
    this.name = name
  }


  get Template() {
    return `<li>${this.name} 
    <span class="action" onclick="app.listsController.removeTask('${this.id}')">x</span></li>`
  }
}