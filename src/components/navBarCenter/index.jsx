import { defineComponent } from "vue";
import "./index.less";
export default defineComponent({
  props: {
      searchList:Array
  },
  setup(props) {
    console.log(props);
    return () => (
      <div className="search_bar">
        <var-swipe vertical autoplay="3000" indicator={false} touchable={false} duration='800'>
          {props.searchList.map((song) => (
            <var-swipe-item>
              <span>{song.songer}</span>
            </var-swipe-item>
          ))}
        </var-swipe>
      </div>
    );
  },
});
