import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";

class ListsService {
  createList(rawList) {
    // debugger
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
  }
  addTask(rawTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
  }
  removeTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }
  destroy(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(task => task.listId != id)
  }

  updateTask(id) {
    if (localStorage.getItem(id) === 'checked') {
      localStorage.setItem(id, '')
    } else {
      localStorage.setItem(id, "checked")
    }
  }
}


export const listsService = new ListsService();