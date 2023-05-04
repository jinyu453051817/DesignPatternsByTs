/**
 * 处理信息的接口
 */
export abstract class Handler {
    protected m_nextHandler: Handler = null

    constructor(theNextHandler: Handler) {
        this.m_nextHandler = theNextHandler
    }

    public HandleRequest(cost: number): void {
        if (this.m_nextHandler != null) {
            this.m_nextHandler.HandleRequest(cost)
        }
    }
}

//实现信息处理类
/**
 * 处理所负责的信息1
 */
export class ConcreteHandler1 extends Handler {
    private m_costCheck: number = 10

    constructor(theNextHandler: Handler) {
        super(theNextHandler)
    }

    public override HandleRequest(cost: number): void {
        if (cost <= this.m_costCheck) {
            console.log("ConcreteHandler1.HandleRequest 核准")
        } else {
            super.HandleRequest(cost)
        }
    }
}

/**
 * 处理所负责的信息2
 */
export class ConcreteHandler2 extends Handler {
    private m_costCheck: number = 20

    constructor(theNextHandler: Handler) {
        super(theNextHandler)
    }

    public override HandleRequest(cost: number): void {
        if (cost <= this.m_costCheck) {
            console.log("ConcreteHandler2.HandleRequest 核准")
        } else {
            super.HandleRequest(cost)
        }
    }
}

/**
 * 处理所负责的信息3
 */
export class ConcreteHandler3 extends Handler {

    constructor(theNextHandler: Handler) {
        super(theNextHandler)
    }

    public override HandleRequest(cost: number): void {
        console.log("ConcreteHandler3.HandleRequest 核准")
    }
}