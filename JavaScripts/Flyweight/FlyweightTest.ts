/** 
 * @Author       : chenxinyu
 * @Date         : 2023-05-04 10:10:10
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-05-04 11:04:20
 * @FilePath     : \DesignPattens\JavaScripts\Flyweight\FlyweightTest.ts
 * @Description  : 修改描述
 */
import { Flyweight, FlyweightFactor, UnsharedConcteteFlyweight } from "./Flyweight"

@Core.Class
export default class FlyweightTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        //组件工厂
        let theFactory: FlyweightFactor = new FlyweightFactor()

        //产生共享组件
        theFactory.GetFlyweight("1", "共享组件1")
        theFactory.GetFlyweight("2", "共享组件2")
        theFactory.GetFlyweight("3", "共享组件3")

        console.log("--------------------")

        //获取一个共享组件
        let theFlyweight: Flyweight = theFactory.GetFlyweight("1", "")
        theFlyweight.Operactor()

        console.log("--------------------")

        //产生不共享的组件
        let theUnshared1: UnsharedConcteteFlyweight = theFactory.GetUnsharedFlyweight("不共享的信息1")
        theUnshared1.Operactor()

        console.log("--------------------")

        //设置共享组件
        theUnshared1.SetFlyweight(theFlyweight)

        //产生不共享的组件2
        let theUnshared2: UnsharedConcteteFlyweight = theFactory.GetUnsharedFlyweight("1", "", "不共享的信息2")

        //同时显示
        theUnshared1.Operactor()
        theUnshared2.Operactor()
    }
}