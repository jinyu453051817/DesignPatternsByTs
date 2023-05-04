import { ConcreteHandler1, ConcreteHandler2, ConcreteHandler3 } from "./Responsibility"

@Core.Class
export default class ResponsibilityTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        //产生cost验证的链接方式
        let theHandle3: ConcreteHandler3 = new ConcreteHandler3(null)
        let theHandle2: ConcreteHandler2 = new ConcreteHandler2(theHandle3)
        let theHandle1: ConcreteHandler1 = new ConcreteHandler1(theHandle2)

        //确认
        theHandle1.HandleRequest(10)
        theHandle1.HandleRequest(15)
        theHandle1.HandleRequest(20)
        theHandle1.HandleRequest(30)
        theHandle1.HandleRequest(100)
    }
}