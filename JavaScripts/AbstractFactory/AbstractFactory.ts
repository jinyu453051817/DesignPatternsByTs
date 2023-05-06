// 实现抽象工厂
/**可生成各抽象成品对象的操作 */
export abstract class AbstractFactory {
    public abstract CreateProductA(): AbstractProductA
    public abstract CreateProductB(): AbstractProductB
}

/**实现可构建具体成品对象的操作1 */
export class ConcreteFactory1 extends AbstractFactory {
    constructor() {
        super()
    }

    public override CreateProductA(): AbstractProductA {
        return new ProductA1()
    }

    public override CreateProductB(): AbstractProductB {
        return new ProductB1()
    }
}

/**实现可构建具体成品对象的操作1 */
export class ConcreteFactory2 extends AbstractFactory {
    constructor() {
        super()
    }

    public override CreateProductA(): AbstractProductA {
        return new ProductA2()
    }

    public override CreateProductB(): AbstractProductB {
        return new ProductB2()
    }
}

/**成品对象类型A接口 */
export abstract class AbstractProductA {

}

/**成品对象类型A1 */
export class ProductA1 extends AbstractProductA {
    constructor() {
        super()
        console.log("生成对象类型A1")
    }
}

/**成品对象类型A2 */
export class ProductA2 extends AbstractProductA {
    constructor() {
        super()
        console.log("生成对象类型A2")
    }
}

/**成品对象类型B接口 */
export abstract class AbstractProductB {

}

/**成品对象类型B1 */
export class ProductB1 extends AbstractProductB {
    constructor() {
        super()
        console.log("生成对象类型B1")
    }
}

/**成品对象类型B2 */
export class ProductB2 extends AbstractProductB {
    constructor() {
        super()
        console.log("生成对象类型B2")
    }
}