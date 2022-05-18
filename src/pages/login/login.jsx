import { reactive,defineComponent } from "vue";

export default defineComponent({
    setup() {
        return () => <var-card>{{ description:() => '登录' }}</var-card>
    }
})
