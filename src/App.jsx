import { defineComponent } from "vue";
import { RouterView, RouterLink } from "vue-router";
import dark from '@varlet/ui/es/themes/dark'
import { StyleProvider } from '@varlet/ui'
export default defineComponent({
  setup() {
    StyleProvider(dark)
    return () => <RouterView></RouterView>;
  },
});
