/**
 * Mediator所管控的Colleague
 */
export abstract class Colleague {
    //通过Mediator对外沟通
    protected m_mediator: Mediator = null

    public constructor(theMediator: Mediator) {
        this.m_mediator = theMediator
    }

    /**
     * Mediator通知请求
     * @param message 请求
     */
    public abstract Request(message: string): void;
}

/**
 * 实现Colleague的类1
 */
export class ConcreateColleague1 extends Colleague {
    constructor(theMediator: Mediator) {
        super(theMediator)
    }

    /**
     * 执行动作
     */
    public Action(): void {
        //执行后通知其他的Colleague
        this.m_mediator.SendMessage(this, "Colleague1发出通知")
    }

    public override Request(message: string): void {
        console.log("ConcreateColleague1.Request:" + message)
    }
}

/**
 * 实现Colleague的类2
 */
export class ConcreateColleague2 extends Colleague {
    constructor(theMediator: Mediator) {
        super(theMediator)
    }

    /**
     * 执行动作
     */
    public Action(): void {
        //执行后通知其他的Colleague
        this.m_mediator.SendMessage(this, "Colleague2发出通知")
    }

    public override Request(message: string): void {
        console.log("ConcreateColleague2.Request:" + message)
    }
}

/**
 * 用来管理Colleague对象的接口
 */
export abstract class Mediator {
    public abstract SendMessage(theColleague: Colleague, message: string);
}

/**
 * 实现Mediator接口，集合管理Colleague对象
 */
export class ConcreateMediator extends Mediator {

    m_colleague1: ConcreateColleague1 = null
    m_colleague2: ConcreateColleague2 = null

    public SetColleague1(theColleague: ConcreateColleague1) {
        this.m_colleague1 = theColleague
    }

    public SetColleague2(theColleague: ConcreateColleague2) {
        this.m_colleague2 = theColleague
    }

    /**
     * 收到来自Colleague的请求
     * @param theColleague 
     * @param message 
     */
    public SendMessage(theColleague: Colleague, message: string) {
        //收到colleague1通知colleague2
        if (this.m_colleague1 == theColleague) {
            this.m_colleague2.Request(message)
        }
        //收到colleague2通知colleague1
        if (this.m_colleague2 == theColleague) {
            this.m_colleague1.Request(message)
        }
    }

}