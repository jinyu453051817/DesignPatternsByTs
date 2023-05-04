import { AbstractClass, ConcreteClassA, ConcreteClassB } from "../TemplateMethod/TemplateMethod"
import { ConcreateColleague1, ConcreateColleague2, ConcreateMediator } from "./Mediator"

export default class MediatorTest extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.UnitTest2()
    }

    private UnitTest(): void {
        //产生中介者
        let pMediator: ConcreateMediator = new ConcreateMediator()

        //产生两个colleague
        let pColleague1: ConcreateColleague1 = new ConcreateColleague1(pMediator)
        let pColleague2: ConcreateColleague2 = new ConcreateColleague2(pMediator)

        //设置给中介者
        pMediator.SetColleague1(pColleague1)
        pMediator.SetColleague2(pColleague2)

        //执行
        pColleague1.Action()
        pColleague2.Action()
    }

    private UnitTest2(): void {
        let theClass: AbstractClass = new ConcreteClassA()
        theClass.TemplateMethod()

        theClass = new ConcreteClassB()
        theClass.TemplateMethod()
    }
}