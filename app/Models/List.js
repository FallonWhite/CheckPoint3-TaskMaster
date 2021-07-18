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
      <div class="">
      <p class="pl-2" style="color: black; text=shadow: 1px 1px darkblue"><b>Tasks: </b></p>
      <ul class="bg-white">
          ${this.MyTasks}
      </ul>
      <form onSubmit="app.listsController.addTask('${this.id}')" class="m-0">
      <div class="p-3 tasks my-0 mx-0" style="background-color: white">
      <input type="text" name="addTask" class="" placeholder="Task..." required minlength="3" , maxlength="50">
      <button style="background-color: ${this.color}"> + </button></form> 
      </div>
  </div>
        
  </div >
</div >
</div >
`
  }

  get MyTasks() {
    let template = ''
    let tasksTotal = 0
    let tasks = ProxyState.tasks.filter(task => task.listId === this.id)
    tasks.forEach(t => {
      template += t.Template
      tasksTotal += t.Total
    })
    template += `<li>remaining: ${tasksTotal}</li>`
    if (!template) {
      template += "No tasks"
    }
    return template
  }
}