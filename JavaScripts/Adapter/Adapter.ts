/**应用领域所需要的接口 */
export abstract class Target {
    public abstract Request(): void
}

/**不同领域的实现，需要被转换 */
export class Adaptee {
    constructor() { }

    public SpecificRequest() {
        console.log("调用Adaptee.SpecificRequest")
    }
}

/**将Adaptee转换成Target接口 */
export class Adapter extends Target {
    private m_adaptee: Adaptee = new Adaptee()

    constructor() {
        super()
    }

    public override Request(): void {
        this.m_adaptee.SpecificRequest()
    }
}