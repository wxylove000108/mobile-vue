import { defineComponent } from 'vue'
import './index.less'

export default defineComponent({
    name: "WMain",
    setup(props, {slots}) {
      
        return () => (
            <main className='w_content flex flex-s'>
                { slots.default() }
            </main>
        )
    }
})