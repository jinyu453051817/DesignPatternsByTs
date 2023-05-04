/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-20 17:22:10
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-20 17:49:27
 * @FilePath     : \DesignPattens\JavaScripts\State\State.ts
 * @Description  : 修改描述
 */

/**
 * 状态拥有者
 */
export class Context {
    //当前状态
    m_state: State = null

    /**
     * 呈现当前状态的行为
     * @param value 状态id
     */
    public Request(value: number): void {
        this.m_state.Handle(value)
    }

    public SetState(theState: State): void {
        this.m_state = theState
    }
}

/**
 * 状态接口类
 */
export abstract class State {
    protected m_context: Context = null

    public State(theContext: Context) {
        this.m_context = theContext
    }

    public abstract Handle(value: number): void;
}

//定义三个具体状态
export class ConcreteStateA extends State {
    constructor(theContext: Context) {
        super()
        this.m_context = theContext
    }

    public override Handle(value: number): void {
        console.log("ConcreteStateA.handle")
        if (value > 10) {
            this.m_context.SetState(new ConcreteStateB(this.m_context))
        }
    }

}

export class ConcreteStateB extends State {
    constructor(theContext: Context) {
        super()
        this.m_context = theContext
    }

    public override Handle(value: number): void {
        console.log("ConcreteStateB.handle")
        if (value > 20) {
            this.m_context.SetState(new ConcreteStateC(this.m_context))
        }
    }

}

export class ConcreteStateC extends State {
    constructor(theContext: Context) {
        super()
        this.m_context = theContext
    }

    public override Handle(value: number): void {
        console.log("ConcreteStateC.handle")
        if (value > 30) {
            this.m_context.SetState(new ConcreteStateA(this.m_context))
        }
    }

}

