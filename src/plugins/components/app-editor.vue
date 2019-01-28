<template>
  <quill-editor
    :value="value"
    :options="options || editorOption"
    @input="input"
    @change="change"
    @blur="blur"
    @focus="focus"
    @ready="ready"
    ref="editor"/>
</template>

<script>
let toolbar = [
  [ 'bold', 'italic', 'underline', 'strike' ],
  [ 'blockquote', 'code-block' ],
  // [
  //   { header: 1 },
  //   { header: 2 }
  // ],
  [
    { list: 'ordered' },
    { list: 'bullet' }
  ],
  // [
  //   { script: 'sub' },
  //   { script: 'super'}
  // ],
  // [
  //   { indent: '-1' },
  //   { indent: '+1'}
  // ],
  // [ { direction: 'rtl'} ],
  [ { size: [ 'small', false, 'large', 'huge' ] } ],
  [ { header: [ 1, 2, 3, 4, 5, 6, false ] } ],
  // [
  //   { color: [] },
  //   { background: [] }
  // ],
  // [ { font: [] } ],
  [ { align: [] } ],
  [ 'clean' ]
  // [ 'link', 'image', 'video' ]
]

export default {
  name: 'app-editor',

  props: {
    value: {
      // type: String,
      required: true
    },
    mention: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object
    }
  },

  data: () => ({
    quill: null,
    isFocus: false,
    editorOption: {
      modules: { toolbar }
    }
  }),

  methods: {
    input (value) {
      this.$emit('input', value)
    },
    change (e) {
      this.$emit('change', e)
    },
    blur (e) {
      this.$emit('blur', e)
      if (this.mention) {
        this.isFocus = false
      }
    },
    focus (e) {
      this.$emit('focus', e)
      if (this.mention) {
        this.isFocus = true
        this.handleKeyup('focusEditor')
      }
    },
    ready (e) {
      this.$emit('ready', e)
    },
    // handle editor event trigger search keyword
    handleKeyup (e) {
      if (this.quill && this.isFocus && (e === 'focusEditor' || e instanceof KeyboardEvent)) {
        let keyword = ''
        let getSelection = this.quill.getSelection()
        let text = this.quill.getText().replace(/[\n\r]+/g, ' ')
        let selectionIndex = (getSelection && getSelection.index) || text.length
        let before = text.slice(0, selectionIndex)
        if (before) {
          let regex = /.*(@)([a-zA-Z0-9_]*)$/gm
          let result = before.match(regex)
          if (result) {
            keyword = before.split('@').pop()
            let after = text.slice(selectionIndex, text.length)
            if (after) {
              let match = after.match(/\W/)
              if (match) {
                keyword += after.slice(0, match.index)
              }
            }
          } else {
            keyword = ''
          }
        }

        this.$emit('mention', keyword)
      }
    }
  },

  mounted () {
    this.$emit('quill', this.$refs.editor && this.$refs.editor.quill)
    this.quill = this.$refs.editor && this.$refs.editor.quill

    if (this.mention) {
      // auto search by @
      window.addEventListener('keyup', this.handleKeyup, true)
    }
  },

  beforeDestroy () {
    if (this.mention) {
      // remove auto search by @
      window.removeEventListener('keyup', this.handleKeyup, true)
    }
  }
}
</script>
