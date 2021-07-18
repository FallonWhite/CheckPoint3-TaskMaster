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
  <div class="p-0 pt-3 pb-1">
      <div class="text-center">
          <h3 style="color: black; text-shadow: 1px 1px darkblue"><b>${this.name}</b></h3>
          <button type="destroy" class="btn btn-primary btn-outline-info btn-sm mb-3" onclick="app.listsController.destroy('${this.id}')">Delete List</button>
      </div >
          <form onSubmit="app.listsController.addTask('${this.id}')" class="m-0">
          <div class="p-3 tasks my-0 mx-0" style="background-color: white">
          <input type="text" id="addTask" class="" placeholder="Task..." required>
          <button style="background-color: ${this.color}"> + </button></form> 
          </div>
        
  </div >
</div >
</div >
`
  }
}