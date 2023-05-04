/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-20 17:51:29
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-20 17:53:46
 * @FilePath     : \DesignPattens\JavaScripts\State\StateTest.ts
 * @Description  : 修改描述
 */
import { ConcreteStateA, Context } from "./State";

@Core.Class
export default class StateTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        let theContext: Context = new Context()
        theContext.SetState(new ConcreteStateA(theContext))

        theContext.Request(5)
        theContext.Request(15)
        theContext.Request(25)
        theContext.Request(35)
    }




}