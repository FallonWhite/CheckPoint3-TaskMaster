import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
  let template = ''
  let lists = ProxyState.lists

  lists.forEach(list => template += list.Template)

  document.getElementById('lists').innerHTML = template
}


export default class ListsController {
  constructor() {
    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)


    loadState()
  }


  createList() {

    event.preventDefault()
    let form = event.target
    let rawList = {
      name: form.name.value,
      color: form.color.value,
    }
    listsService.createList(rawList)
    form.reset()
  }


  destroy(id) {
    if (window.confirm("Confirm Delete?")) {
      listsService.destroy(id)
    }
  }
  addTask(listId) {
    event.preventDefault()
    let form = event.target
    let rawTask = {
      listId,
      name: form.addTask.value
    }
    listsService.addTask(rawTask)
    form.reset()
  }

  removeTask(id) {
    if (window.confirm("Confirm Delete?")) {
      listsService.removeTask(id)
    }
  }
  checkBox(id) {
    listsService.updateTask(id);
  }
}