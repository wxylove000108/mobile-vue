import { defineComponent, ref, toRefs,onMounted } from "vue";
import "./index.less";

import Icon from "../icon/icon";
import { ScanCode,MessageOne } from "@icon-park/vue-next";
import dark from "@varlet/ui/es/themes/dark";
import { StyleProvider } from "@varlet/ui";

export default defineComponent({
  props: {
    show: Boolean,
  },
  emits: ["close"],
  setup(props, { emit }) {
    const { show } = toRefs(props);
    const value = ref(true);
    const closePopup = () => {
      emit("close", false);
    };

    const toggleTheme = (v) => {
      StyleProvider(v? dark : null)
    }

    onMounted(() => {
      StyleProvider(value.value? dark : null)
    })

    return () => (
      <var-popup
        position="left"
        v-model:show={show.value}
        onClickOverlay={closePopup}
      >
        <div class="popup-example-block" style={{ width: "250px" }}>
          <div className="header flex al jc-b">
            <div className="userInfo flex al">
              <var-image
                ripple
                width="30px"
                height="30px"
                fit="fill"
                radius="50%"
                src="https://varlet-varletjs.vercel.app/cat.jpg"
              />

              <div>王思聪_Nsbz</div>
            </div>

            <div className="scan">
              <Icon icon={ScanCode}></Icon>
            </div>
          </div>
          <div className="user-content">
            <var-card>
              {{
                description: () => {
                  return (
                    <>
                      {/* <var-icon name="chevron-right" />  <var-icon name="weather-night" /> <var-icon name="white-balance-sunny" />*/}
                      <var-cell size={10} icon="message-text-outline" border>
                        {{
                          default: () => "消息中心",
                          extra: () => (
                            <>
                           
                              <var-badge type="danger" value="66" />
                              <var-icon name="chevron-right" />
                            </>
                          ),
                        }}
                      </var-cell>
                      <var-cell size={10} icon={value.value? 'weather-night' : 'white-balance-sunny'} border>
                        {{
                          default: () => "暗色模式",
                          extra: () => <var-switch v-model={value.value} onChange={toggleTheme} />,
                        }}
                      </var-cell>
                    </>
                  );
                },
              }}
            </var-card>
          </div>
        </div>
      </var-popup>
    );
  },
});
