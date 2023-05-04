import { ConcreteStrategyA, ConcreteStrategyB, ConcreteStrategyC, Context } from "./Strategy";


@Core.Class
export default class StrategyTest extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.UnitTest()
    }

    UnitTest(): void {
        let theContext: Context = new Context

        //设置算法
        theContext.SetStrategy(new ConcreteStrategyA())
        theContext.ContextInterface()

        theContext.SetStrategy(new ConcreteStrategyB())
        theContext.ContextInterface()

        theContext.SetStrategy(new ConcreteStrategyC())
        theContext.ContextInterface()
    }

}