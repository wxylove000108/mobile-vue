import { defineComponent, h, resolveComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Icon from '@/components/icon/icon'
import { Home,MusicMenu } from "@icon-park/vue-next"

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    return () => <div>
      <Icon icon={ Home } fill='#000' size='30'></Icon>
      <div>111</div>
    </div>;
  },
});
