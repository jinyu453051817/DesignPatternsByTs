/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-25 14:21:42
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-25 15:03:58
 * @FilePath     : \DesignPattens\JavaScripts\TemplateMethod\TemplateMethodTest.ts
 * @Description  : 修改描述
 */
import { AbstractClass, ConcreteClassA, ConcreteClassB } from "./TemplateMethod";

export default class TemplateMethodTest extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.UnitTest()
    }

    private UnitTest(): void {
        let theClass: AbstractClass = new ConcreteClassA()
        theClass.TemplateMethod()

        theClass = new ConcreteClassB()
        theClass.TemplateMethod()
    }
}