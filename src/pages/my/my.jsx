import { defineComponent, h, resolveComponent } from "vue";
import Icon from '@/components/icon/icon'
import { Home,MusicMenu } from "@icon-park/vue-next"

export default defineComponent({
  setup() {
    return () => <div>
      <Icon icon={ Home } fill='#000' size='30'></Icon>
      <div>111</div>
    </div>;
  },
});
