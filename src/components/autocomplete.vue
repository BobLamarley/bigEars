<template>
  <div class="auto-complete">
    <input :class="{ 'has-error': hasError}" type="text" v-model="input" @keydown.tab.prevent="complete()" @focus="focus(true)" @blur="focus(false)">
    <table v-if="focused">
      <tbody>
        <tr v-for="(person, i) in data" :key="person.id" v-if="filter(person)" @mousedown="complete(i)">
            <td>{{ person[field] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    value: {type: String, required: false},
    data: {type: Array, required: true},
    field: {type: String, required: true}
  },
  methods: {
    complete (i) {
      if (i === undefined) {
        for (let row of this.data) {
          if (this.filter(row)) {
            this.select(row)
            return
          }
        }
      }
      this.select(this.data[i])
    },
    select (row) {
      this.input = row[this.field]
      this.selected = true
    },
    filter (row) {
      return row[this.field].toLowerCase().indexOf(this.input.toLowerCase()) !== -1
    },
    focus (f) {
      this.focused = f
    }
  },
  data () {
    return {
      input: '',
      focused: false
    }
  },
  created () {
    this.input = this.value || ''
  }
}
</script>

<style>
</style>
