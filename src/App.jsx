import { defineComponent, onMounted } from "vue";
import { RouterView } from "vue-router";
import dark from "@varlet/ui/es/themes/dark";
import { StyleProvider } from "@varlet/ui";
export default defineComponent({
  setup() {
    StyleProvider(dark);
    onMounted(() => {
      document.body.addEventListener(
        "touchmove",
        function (e) {
          e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
        },
        { passive: false }
      ); //passive 参数不能省略，用来兼容ios和android
    });
    return () => <RouterView></RouterView>;
  },
});
