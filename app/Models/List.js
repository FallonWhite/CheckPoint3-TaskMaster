export default class List {
  constructor({ name }) {
    this.name = name

  }
  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="list bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.name} list image">
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