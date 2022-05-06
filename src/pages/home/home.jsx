import { defineComponent, onMounted, ref, nextTick, reactive } from "vue";
import {
  getFindBannerList,
  getRecommendList,
  getRankingList,
} from "@/apis/home";
import BScroll from "@better-scroll/core";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

import "swiper/swiper.min.css";
import "./home.less";
export default defineComponent({
  setup() {
    const wrapper = ref(null);
    const bannerList = ref([]);
    let bs = reactive({});

    const recommendList = ref([]);
    const topList = ref([]);
    const getBannerList = async () => {
      const { data } = await getFindBannerList({ type: 2 });
      bannerList.value = data.banners;
    };

    const getRecommendData = async () => {
      const { data } = await getRecommendList({ limit: 6 });
      recommendList.value = data.result;
      nextTick(() => {
        bs && bs.refresh();
      });
    };

    const getRankList = async () => {
      const { data } = await getRankingList({ limit: 12 });
      for (let i = 0; i < 4; i++) {
        let list = {
          name: "热门歌曲",
          trancks: data.playlists.slice(i * 3, i * 3 + 3),
        };
        topList.value.push(list);
      }
    };

    //去除特殊字符~!@#$^-&*()=|{}':;',\[].<>/?~！@#￥……&*（）——|{}【】'；：""'。，、？
  function trimSpecial(string) {

  //替换字符串中的所有特殊字符（包含空格）
  if(string!= ""){
    const pattern=/[`~「」!@#$^\-&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
    string = string.replace(pattern,"");
  }
  return string
}


    onMounted(() => {
      bs = new BScroll(wrapper.value, {
        scrollX: true,
        scrollY: false, // 忽略竖直方向的滚动
      });
      getBannerList();
      getRecommendData();
      getRankList();
    });

    return () => (
      <div className="home">
        {/* 主体内容区域 */}
        <div className="content">
          {/* 轮播区域 */}
          <div className="top-area">
            <var-card>
              {{
                description: () => {
                  return (
                    <>
                      <div className="banner">
                        <var-swipe duration="800" loop={false}>
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
                          {recommendList.value.map((item) => (
                            <div className="recommend flex flex-d">
                              <img src={item.picUrl} alt="" />
                              <span>{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                },
              }}
            </var-card>
          </div>

          {/* 推荐歌曲 */}
          <var-card title="热门歌曲">
            {{
              description: () => {
                return (
                  <>
                    <Swiper
                      class="mySwiper"
                      slidesPerView={1.07}
                      centeredSlides={true}
                    >
                      {topList.value.map((item) => (
                        <SwiperSlide>
                          {item.trancks.map((song) => (
                            <div className="swiper-item">
                              <div className="music-item flex al">
                                <img src={song.coverImgUrl} alt="" />
                                <div className="song-name">{trimSpecial(song.name)}</div>
                              </div>
                            </div>
                          ))}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                );
              },
            }}
          </var-card>
        </div>
      </div>
    );
  },
});
