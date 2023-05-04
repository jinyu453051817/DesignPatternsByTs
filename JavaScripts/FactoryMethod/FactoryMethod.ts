export abstract class Creator {
    /**
     * 子类返回对应Product类型的对象
     */
    public abstract FactoryMethod(): Product;
}

export abstract class Creator_MethodType {
    /**
     * 子类返回对应Product类型的对象
     */
    public abstract FactoryMethod(type: number): Product;
}


export abstract class Product {

}

// export class Creator_GenericClass<T extends keyof Product>{
//     constructor() {
//         console.log("产生工厂：Creator_GenericClass" + typeof (T))
//     }

//     public FactoryMethod(): Product {
//         return new T()
//     }
// }

// export interface Creator_GenericMethod {
//     FactoryMethod<T extends Product>(): Product
// }

/**
 * 产品对象类A
 */
export class ConcreateProductA extends Product {
    constructor() {
        super()
        console.log("生成对象A")
    }
}

/**
 * 产品对象类B
 */
export class ConcreateProductB extends Product {
    constructor() {
        super()
        console.log("生成对象B")
    }
}

/**
 * 产生ProductA的工厂
 */
export class ConcreteCreatorProductA extends Creator {

    constructor() {
        super()
        console.log("生产工厂：ConcreteCreatorProductA")
    }

    public override FactoryMethod(): Product {
        return new ConcreateProductA()
    }
}

/**
 * 产生ProductB的工厂
 */
export class ConcreteCreatorProductB extends Creator {

    constructor() {
        super()
        console.log("生产工厂：ConcreteCreatorProductB")
    }

    public override FactoryMethod(): Product {
        return new ConcreateProductB()
    }
}

/**
 * 重新实现Factory Method，以返回Product类对象
 */
export class ConcreteCreator_MethodType extends Creator_MethodType {

    constructor() {
        super()
        console.log("生产工厂：ConcreteCreator_MethodType")
    }

    public override FactoryMethod(type: number): Product {
        switch (type) {
            case 1:
                return new ConcreateProductA()
            case 2:
                return new ConcreateProductB()
            default:
                console.log("type[" + type + "]无法产生对象")
                break;
        }
        return null
    }
}