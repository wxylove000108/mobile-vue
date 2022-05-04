import { defineComponent, onMounted, ref, nextTick } from "vue";
import { getFindBannerList, getRecommendList } from "@/apis/home";
import BScroll from "@better-scroll/core";
import "./home.less";
export default defineComponent({
  setup() {
    const wrapper = ref(null);
    const bannerList = ref([]);
    const scrollList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const recommendList = ref([]);
    const bs = () => {
      let scrollBar = new BScroll(wrapper.value, {
        scrollX: true,
        scrollY: false, // 忽略竖直方向的滚动
      });
    };
    const getBannerList = async () => {
      const { data } = await getFindBannerList({ type: 2 });
      console.log(data);
      bannerList.value = data.banners;
    };

    const getRecommendData = async () => {
      const { data } = await getRecommendList({ limit: 6 });
      console.log(data);
      recommendList.value = data.result;
      nextTick(() => {
        bs();
      });
    };

    onMounted(() => {
      getBannerList();
      getRecommendData();
      // bs()
    });

    return () => (
      <div className="home">
        {/* 主体内容区域 */}
        <div className="content">
          {/* 轮播区域 */}
          <div className="banner">
            <var-swipe autoplay={4000}>
              {bannerList.value.map((item) => (
                <var-swipe-item>
                  <img src={item.pic} alt="" />
                </var-swipe-item>
              ))}
            </var-swipe>
          </div>

          {/* 导航条 */}
          <div className="wrapper" ref={wrapper}>
            <div className="scroll_bar">
              {/* <div className="recommend flex flex-d">
                <var-swipe
                  vertical
                  autoplay="2000"
                  indicator={false}
                  touchable={false}
                >
                  {recommendList.value.map((song) => (
                    <var-swipe-item>
                     <img src={song.picUrl} alt="" srcset="" />
                     <span>{song.name}</span>
                    </var-swipe-item>
                  ))}
                </var-swipe>
              </div> */}
              {recommendList.value.map((item) => (
                <div className="recommend flex flex-d">
                  <img src={item.picUrl} alt="" />
                  <span>{item.name}</span>
                </div>
              ))}

            </div>
          </div>

          {
            // scrollList.map(item => <div style={{height:'100px'}}>{ item }</div>)
          }
        </div>
      </div>
    );
  },
});
