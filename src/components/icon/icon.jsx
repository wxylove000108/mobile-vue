import {
  defineComponent,
  h,
} from "vue";
export default defineComponent({
  props: {
    icon: String | Object,
    theme: String,
    size: String | Number,
    fill: String | Object,
  },
  setup(props) {
    return () => h(props.icon,{fill:props.fill,size:props.size});  // h函数代替template中动态组件
  },
});
