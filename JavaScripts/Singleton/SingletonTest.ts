import ClassWithCounter from "./ClassWithCounter";

@Core.Class
export default class SingletonTest extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.Test()
    }

    private Test(): void {
        let obj1: ClassWithCounter = new ClassWithCounter()
        obj1.Operator()

        let obj2: ClassWithCounter = new ClassWithCounter()
        obj2.Operator()

        obj1.Operator()
    }
}