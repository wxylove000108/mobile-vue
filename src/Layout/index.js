import WLayout from './layoutBox/index'
import WNavBar from './navBar/index'
import WMain from './content/index'
import WTabBar from './tabBar/index'
const WLayoutComponents = [WLayout, WNavBar, WMain, WTabBar]

const wUI = {　 // install 方法 接收参数app
    install(app) {
        WLayoutComponents.forEach(comp => {
            console.log(comp.name)
            app.component(comp.name, comp)
        })
    },
}
export default wUI