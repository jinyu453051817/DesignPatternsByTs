import { Composite, IComponent, Leaf } from "./Composite"

@Core.Class
export default class CompositeTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        //根节点
        let theRoot: IComponent = new Composite("Root")
        //加入两个最终节点
        theRoot.Add(new Leaf("Leaf1"))
        theRoot.Add(new Leaf("Leaf2"))

        console.log("----------------------")

        //子节点1
        let theChild1: IComponent = new Composite("Child1")
        //加入两个最终节点
        theChild1.Add(new Leaf("Child1.Leaf1"))
        theChild1.Add(new Leaf("Child1.Leaf2"))
        theRoot.Add(theChild1)

        console.log("----------------------")

        //子节点1
        let theChild2: IComponent = new Composite("Child2")
        //加入两个最终节点
        theChild2.Add(new Leaf("Child2.Leaf1"))
        theChild2.Add(new Leaf("Child2.Leaf2"))
        theChild2.Add(new Leaf("Child2.Leaf3"))
        theRoot.Add(theChild2)

        console.log("----------------------")

        //显示
        theRoot.Operation()
    }
}