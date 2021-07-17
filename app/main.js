import { ProxyState } from "../AppState.js"
import { listsService } from '../Services/ListsService.js'

function _draw() {
  let template = ''
  ProxyState.lists.forEach(list => {
    template += list.Template
  })
  document.getElementById('lists').innerHTML = template
}

export default class ListsController {
  constructor() {
    ProxyState.on('lists', _draw)
    ProxyState.on('lists', () => { console.log('new list') })
    _draw()
  }
  createList() {
    event.preventDefault()
    let form = event.target
    let rawList = {
      name: form.name.value,
    }
    listsService.createList(rawList)
    form.reset()
  }
}
