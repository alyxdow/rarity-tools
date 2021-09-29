import { defineComponent, useStore } from '@nuxtjs/composition-api'
import { Mutations } from '~/store/types'

export default defineComponent({
  // prettier-ignore
  props: {
    icon  : String,
    type  : String,
    value : String,
  },

  setup(props) {
    const { commit } = useStore()
    const toggleCollection = () => commit(Mutations.SET_VIEW, props.value)

    return { toggleCollection }
  },
})
