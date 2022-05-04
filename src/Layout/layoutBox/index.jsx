import { defineComponent } from 'vue'
import './index.less'
export default defineComponent({
    name:'WLayout',
    setup(props,{ slots }) {
        return () => (
            <section className='w_layout_box flex flex-d'>
                { slots.default() }
            </section>
        )
    }
})