/** 
 * @Author       : chenxinyu
 * @Date         : 2023-05-05 10:11:08
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-05-05 15:03:39
 * @FilePath     : \DesignPattens\JavaScripts\Observer\ObserverTest.ts
 * @Description  : 修改描述
 */

import { Caretaker } from "../Memento/Memento"
import { ConcreteObserver1, ConcreteObserver2, ConcreteSubject } from "./Observer"

@Core.Class
export default class ObserverTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        //主题
        let theSubject: ConcreteSubject = new ConcreteSubject()


        //加入观察者
        let theObserver1: ConcreteObserver1 = new ConcreteObserver1(theSubject)
        theSubject.Attach(theObserver1)
        theSubject.Attach(new ConcreteObserver2(theSubject))

        //设置subject
        theSubject.SetState("Subject状态1")

        //显示
        theObserver1.ShowState()
    }
}