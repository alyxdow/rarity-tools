import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  // prettier-ignore
  props: {
    icon  : String,
    type  : String,
    value : String,
    side  : String,
    active: Boolean,
  },
})
