import { ConcreteBuilderA, ConcreteBuilderB, Director, Product } from "./Builder"

@Core.Class
export default class BuilderTest extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.UnitTest()
    }

    private UnitTest(): void {
        //创建
        let theDirector: Director = new Director()
        let theProduct: Product = null

        //使用BuildA创建
        theDirector.Construct(new ConcreteBuilderA())
        theProduct = theDirector.GetResult()
        theProduct.ShowProduct()

        //使用BuildB创建
        theDirector.Construct(new ConcreteBuilderB())
        theProduct = theDirector.GetResult()
        theProduct.ShowProduct()
    }
}