import { defineComponent, ref } from "vue";
import { RouterView, RouterLink, useRouter, useRoute } from "vue-router";
import "./index.less";
export default defineComponent({
  name: "WTabBar",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const active = ref(route.path);

    const handleChange = (active) => {
      router.push(active);
    };
    console.log(route.path);
    return () => (
      <footer className="w_footer">
        <var-bottom-navigation
          v-model:active={active.value}
          fixed
          safe-area
          border
          onChange={handleChange}
        >
          <var-bottom-navigation-item name="/home" label="发现" icon="home" />
          <var-bottom-navigation-item
            name="/my"
            label="我的"
            icon="account-circle-outline"
          />
          {/* <var-bottom-navigation-item label="播客" icon="play-circle-outline" />
          <var-bottom-navigation-item label="关注" icon="heart-outline" /> */}
        </var-bottom-navigation>
      </footer>
    );
  },
});
