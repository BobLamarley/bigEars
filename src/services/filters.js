import moment from 'moment'

class FilterService {
  constructor (Vue, store) {
    this.Vue = Vue
    this.store = store
    Object.entries(filters).forEach(([name, value]) => this.addFilter(name, value))
  }

  addFilter (name, value) {
    this.Vue.filter(name, (...params) => Reflect.apply(value, this, params))
    Object.defineProperty(this, `$${name}`, {
      get () {
        return this.Vue.filter(name)
      }
    })
  }

  getFilter (name) {
    return this.Vue.filter(name) || FilterService.defaultFilter
  }

  static defaultFilter (v) {
    return v
  }
}

const filters = {
  formatDate (timestamp) {
    return moment(timestamp, 'x').format('DD/MM/YYYY hh:mm')
  }
}

export default {
  install (Vue, store) {
    const filterService = new FilterService(Vue, store)
    Vue.prototype.$filters = filterService
    Vue.filters = filterService
  }
}
