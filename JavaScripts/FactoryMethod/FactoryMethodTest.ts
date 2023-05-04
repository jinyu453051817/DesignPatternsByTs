/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-26 10:55:11
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-26 10:55:43
 * @FilePath     : \DesignPattens\JavaScripts\FactoryMethod\FactoryMethodTest.ts
 * @Description  : 修改描述
 */

import { ConcreteCreatorProductA, ConcreteCreatorProductB, ConcreteCreator_MethodType, Creator, Creator_MethodType, Product } from "./FactoryMethod"

@Core.Class
export default class FactoryMethodTest extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.UnitTest()
    }

    private UnitTest(): void {
        //11111111
        //产品
        let theProduct: Product = null
        //工厂接口
        let theCreator: Creator = null

        //设置为负责ProductA的工厂
        theCreator = new ConcreteCreatorProductA()
        theProduct = theCreator.FactoryMethod()

        //设置为负责ProductB的工厂
        theCreator = new ConcreteCreatorProductB()
        theProduct = theCreator.FactoryMethod()

        //22222222222222
        //工厂接口
        let theCreatorMethodType: ConcreteCreator_MethodType = new ConcreteCreator_MethodType()
        //获取两个产品
        theProduct = theCreatorMethodType.FactoryMethod(1)
        theProduct = theCreatorMethodType.FactoryMethod(2)
    }
}