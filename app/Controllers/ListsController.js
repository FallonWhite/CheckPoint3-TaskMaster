import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";







export default class ListsController {
  constructor() {
    ProxyState.on("lists", _draw);
    _draw()
  }

}