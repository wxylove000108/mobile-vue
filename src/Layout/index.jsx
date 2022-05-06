import { defineComponent,ref } from "vue";
import { RouterView, RouterLink, useRouter } from "vue-router";
import leftPopupMenu from "@/components/leftPopupMenu/index";

export default defineComponent({
  setup() {
    const show = ref(false);

    return () => (
      <>
        <w-layout>
          <w-nav-bar onIsShowMenu={() => show.value = true }></w-nav-bar>

          <w-main>
            <RouterView />
          </w-main>

          <w-tab-bar></w-tab-bar>
        </w-layout>

        {/* 全局侧边弹窗 */}
        <leftPopupMenu onClose={ (v) => show.value = v } show={ show.value }></leftPopupMenu>
      </>
    );
  },
});
