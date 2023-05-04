/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-25 14:11:28
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-25 14:23:36
 * @FilePath     : \DesignPattens\JavaScripts\TemplateMethod\TemplateMethod.ts
 * @Description  : 修改描述
 */

export abstract class AbstractClass {

    public TemplateMethod(): void {
        this.PrimitiveOperation1()
        this.PrimitiveOperation2()
    }

    protected abstract PrimitiveOperation1(): void;
    protected abstract PrimitiveOperation2(): void;
}

export class ConcreteClassA extends AbstractClass {
    protected PrimitiveOperation1(): void {
        console.log("ConcreteClassA.PrimitiveOperation1")
    }
    protected PrimitiveOperation2(): void {
        console.log("ConcreteClassA.PrimitiveOperation2")
    }
}

export class ConcreteClassB extends AbstractClass {
    protected PrimitiveOperation1(): void {
        console.log("ConcreteClassB.PrimitiveOperation1")
    }
    protected PrimitiveOperation2(): void {
        console.log("ConcreteClassB.PrimitiveOperation2")
    }
}