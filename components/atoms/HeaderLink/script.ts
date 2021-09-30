import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },

    icon: String,

    type: {
      type: String,
      default: 'svg',
    },
  },
})
