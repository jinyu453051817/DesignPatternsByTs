/** 
 * @Author       : chenxinyu
 * @Date         : 2023-05-06 10:23:55
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-05-06 10:24:49
 * @FilePath     : \DesignPattens\JavaScripts\Adapter\AdapterTest.ts
 * @Description  : 修改描述
 */
import { Adapter, Target } from "./Adapter"

@Core.Class
export default class AdapterTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        let theTarget: Target = new Adapter()
        theTarget.Request()
    }
}