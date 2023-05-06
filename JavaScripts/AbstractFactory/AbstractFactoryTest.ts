import { AbstractFactory, ConcreteFactory1, ConcreteFactory2 } from "./AbstractFactory"

@Core.Class
export default class AbstractFactoryTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        let factory: AbstractFactory = null

        //工厂1
        factory = new ConcreteFactory1()
        //生产两个产品
        factory.CreateProductA()
        factory.CreateProductB()

        //工厂2
        factory = new ConcreteFactory2()
        //生产两个产品
        factory.CreateProductA()
        factory.CreateProductB()

    }
}