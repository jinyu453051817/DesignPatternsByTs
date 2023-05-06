/** 
 * @Author       : chenxinyu
 * @Date         : 2023-05-04 18:18:26
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-05-05 10:35:30
 * @FilePath     : \DesignPattens\JavaScripts\Observer\Observer.ts
 * @Description  : 修改描述
 */
/**
 * 主题接口
 */
export abstract class Subject {
    m_observers: Array<Observer> = new Array<Observer>()

    /**
     * 加入观察者
     */
    public Attach(theObserver: Observer): void {
        this.m_observers.push(theObserver)
    }

    /**
     * 删除观察者
     */
    public Detach(theObserver: Observer): void {
        //找到需要删除的节点是第几个位置
        let index = this.m_observers.indexOf(theObserver)
        //从需要删除的位置删除一个
        this.m_observers.splice(index, 1)
    }

    /**
     * 通知所有观察者
     */
    public Notify(): void {
        this.m_observers.forEach(element => {
            element.Update()
        });
    }
}

/**
 * 主题实现
 */
export class ConcreteSubject extends Subject {
    m_subjectState: string

    public SetState(state: string): void {
        this.m_subjectState = state
        this.Notify()
    }

    public GetState(): string {
        return this.m_subjectState
    }
}

/**
 * 观察者接口
 */
export abstract class Observer {
    public abstract Update(): void;
}

//实现两个Observer
/**
 * 实现Observer1(先保存信息再显示)
 */
export class ConcreteObserver1 extends Observer {
    m_objectState: string
    m_subject: ConcreteSubject = null

    constructor(theSubject: ConcreteSubject) {
        super()
        this.m_subject = theSubject
    }

    /**通知subject更新*/
    public override Update(): void {
        console.log("ConcreteObserver1.Update")
        //获取subject状态
        this.m_objectState = this.m_subject.GetState()
    }

    public ShowState(): void {
        console.log("ConcreteObserver1.Subject 当前的主题：" + this.m_objectState)
    }
}

/**
 * 实现Observer2（马上将收到的信息显示出来）
 */
export class ConcreteObserver2 extends Observer {
    m_subject: ConcreteSubject = null

    constructor(theSubject: ConcreteSubject) {
        super()
        this.m_subject = theSubject
    }

    /**通知subject更新*/
    public override Update(): void {
        console.log("ConcreteObserver2.Update")
        //获取subject状态
        console.log("ConcreteObserver2.Subject 当前的主题：" + this.m_subject.GetState())
    }

}