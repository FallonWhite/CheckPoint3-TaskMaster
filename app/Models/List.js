export default class List {
  constructor({ name, color }) {
    this.name = name
    this.color = color

  }
  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="list shadow" style="background-color: ${this.color}>
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.name}</b></p >
              </div >
          </div >
      </div >
    </div >
  `
  }
}