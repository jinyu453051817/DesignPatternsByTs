export class Director {

    private m_product: Product

    constructor() { }

    /**
     * 构建
     */
    public Construct(theBuilder: Builder): void {
        //利用Builder产生各部分加入Product中
        this.m_product = new Product()
        theBuilder.BuildPart1(this.m_product)
        theBuilder.BuildPart2(this.m_product)
    }

    /**
     * 获取成品
     */
    public GetResult(): Product {
        return this.m_product
    }
}

export abstract class Builder {
    public abstract BuildPart1(theProduct: Product): void;
    public abstract BuildPart2(theProduct: Product): void;
}

/**
 * 接口的具体实现A
 */
export class ConcreteBuilderA extends Builder {
    public override BuildPart1(theProduct: Product): void {
        theProduct.AddPart("ConcreteBuilderA_Part1")
    }
    public override BuildPart2(theProduct: Product): void {
        theProduct.AddPart("ConcreteBuilderA_Part2")
    }
}

/**
 * 接口的具体实现B
 */
export class ConcreteBuilderB extends Builder {
    public override BuildPart1(theProduct: Product): void {
        theProduct.AddPart("ConcreteBuilderB_Part1")
    }
    public override BuildPart2(theProduct: Product): void {
        theProduct.AddPart("ConcreteBuilderB_Part2")
    }
}

/**
 * 预产生的复杂对象
 */
export class Product {
    private m_part: Array<string> = new Array<string>()

    public constructor() { }

    public AddPart(part: string): void {
        this.m_part.push(part)
    }

    public ShowProduct(): void {
        this.m_part.forEach(element => {
            console.log(element)
        });
    }
}