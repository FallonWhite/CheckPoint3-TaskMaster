import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"
export default class List {
  constructor({ name, color, id = generateId() }) {
    this.id = id
    this.name = name
    this.color = color

  }

  get Template() {
    return `
  <div class="col-4 mt-3">
  <div class="list shadow" style="background-color: ${this.color}">
  <div class="p-3">
      <div class="text-center">
          <h3 style="color: black; text-shadow: 1px 1px darkblue"><b>${this.name}</b></h3>
          <button type="destroy" class="btn btn-primary btn-outline-info" onclick="app.listsController.destroy('${this.id}')">Delete List</button>
      </div >
  </div >
</div >
</div >
`
  }

}