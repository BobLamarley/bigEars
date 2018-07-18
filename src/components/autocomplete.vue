<template>
  <div style="position:relative" v-bind:class="{'open':openSuggestion}">
     <input class="form-control" type="text" :value="value" @input="updateValue($event.target.value)" @keydown.enter = 'enter' @keydown.down = 'down' @keydown.up = 'up' @focus = "show" @keydown.esc = 'close' @blur = 'close'>
     <ul class="dropdown-menu" style="width:100%">
        <li v-for="(suggestion, index) in matches" :key="(suggestion, index).id" v-bind:class="{'active': isActive(index)}" @click="suggestionClick(index)">
          <router-link :to="{ name: 'editTopic', params: { id: suggestion.id, topicName: suggestion.topic, description: suggestion.description, uptime: suggestion.uptime } }" ><p><small>{{ suggestion.topic }}</small>
          </p></router-link>
        </li>
     </ul>
 </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    suggestions: {
      type: Array,
      required: true
    },
    limit: Number,
    caseSensitive: Boolean
  },
  data () {
    return {
      open: true,
      current: 0
    }
  },
  computed: {
    // Filtering the suggestion based on the input
    matches () {
      return this.suggestions.filter((obj) => {
        return obj.topic.indexOf(this.resolveCase(this.value)) >= 0
      }).slice(0, this.limit || 5)
    },
    openSuggestion () {
      return this.selection !== '' &&
             this.matches.length !== 0 &&
             this.open === true
    }
  },
  methods: {
    // Triggered the input event to cascade the updates to
    // parent component
    updateValue (value) {
      if (this.open === false) {
        this.open = true
        this.current = 0
      }
      this.$emit('input', value)
    },
    // When enter key pressed on the input
    enter () {
      this.$router.push({name: 'editTopic', params: { id: this.matches[this.current].id, topicName: this.matches[this.current].topic, description: this.matches[this.current].description, uptime: this.matches[this.current].uptime }})
      this.open = false
    },
    // When up arrow pressed while suggestions are open
    up () {
      if (this.current > 0) {
        this.current--
      }
    },
    // When down arrow pressed while suggestions are open
    down () {
      if (this.current < this.matches.length - 1) {
        this.current++
      }
    },
    // For highlighting element
    isActive (index) {
      return index === this.current
    },
    // When one of the suggestion is clicked
    suggestionClick (index) {
      this.$emit('input', this.matches[index].topic)
      this.open = false
    },
    resolveCase (text) {
      if (!this.caseSensitive) {
        return (text || '').toLowerCase()
      }
      return text
    },
    close () {
      setTimeout(() => {
        this.open = false
      }, 200)
    },
    show () {
      this.open = true
    }
  }
}
</script>

<style>
.autocomplete
{
  padding-bottom: 250px;
  padding-top: 150px;
}

.dropdown-menu>.active>a, .dropdown-menu>.active>a:focus, .dropdown-menu>.active>a:hover
{
  background-color: #ecf0f1;
}

/* bootstrap fix */
.row
{
  margin-left: 0px;
}
</style>
