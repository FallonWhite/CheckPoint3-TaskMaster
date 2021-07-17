import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";


export function saveState() {
  localStorage.setItem('MyList', JSON.stringify({
    lists: ProxyState.lists,
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('MyList'))
  console.log(data)
  if (data != null) {
    ProxyState.lists = data.lists.map(list => new List(l))

  }

}