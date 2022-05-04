import { defineComponent, h, resolveComponent, toRefs, ref } from "vue";
import { useRoute } from "vue-router";
import navBarCenter from "@/components/navBarCenter";
import Icon from "../../components/icon/icon";
export default defineComponent({
  name: "WNavBar",
  components: { navBarCenter },
  emits: ["IsShowMenu"],
  setup(props, { emit }) {
    const { meta } = toRefs(useRoute());
    console.log(meta.value);
    const swiperList = ref([
      {
        id: 1,
        songer: "卢德洲",
      },
      {
        id: 2,
        songer: "黑毛牛逼",
      },
    ]);

    const openMenu = () => {
      // 打开个人中心菜单
      emit('IsShowMenu')
    };
    const slots = {
      left: () => (
        <Icon
          icon={meta.value.navBarLeftIcon}
          onClick={() => openMenu()}
          size="22"
        ></Icon>
      ),
      right: () => <Icon icon={meta.value.navBarRightIcon} size="22"></Icon>,
    };
    return () => (
      <var-app-bar v-slots={slots} title-position="center">
        {meta.value.navBarComponent
          ? h(resolveComponent(meta.value.navBarComponent), {
              searchList: swiperList.value,
            })
          : ""}
      </var-app-bar>
    );
  },
});
