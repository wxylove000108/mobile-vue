import { defineComponent, ref, toRefs } from "vue";

export default defineComponent({
  props: {
      show:Boolean
  },
  emits:['close'],
  setup(props,{ emit }) {
      const { show } =toRefs(props)
      const closePopup = () => {
        emit('close',false)
      }
    return () => (
      <var-popup position="left" v-model:show={show.value} onClickOverlay={closePopup }>
        <div class="popup-example-block" style={{ width: "250px" }}>
        hahahh
        </div>
      </var-popup>
    );
  },
});
