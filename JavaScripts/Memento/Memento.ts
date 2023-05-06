
/**
 * 需要存储内容信息
 */
export class Originator {
    //状态 需要被保存
    m_state: string

    public SetInfo(state: string): void {
        this.m_state = state
    }

    public ShowInfo(): void {
        console.log("Originator State:" + this.m_state)
    }

    /**
     * 产生要存储的记录
     */
    public CreateMemento(): Memento {
        let newMemento: Memento = new Memento()
        newMemento.SetState(this.m_state)
        return newMemento
    }

    /**
     * 设置要恢复的记录
     */
    public SetMemento(m: Memento): void {
        this.m_state = m.GetState()
    }
}

/**
 * 存放Originator对象的内部状态
 */
export class Memento {
    m_state: string

    public GetState(): string {
        return this.m_state
    }

    public SetState(state: string): void {
        this.m_state = state
    }
}

/**
 * 保管所有的Memento
 */
export class Caretaker {
    m_mementos: Map<string, Memento> = new Map<string, Memento>()

    /**增加*/
    public AddMemento(version: string, theMemento: Memento): void {
        this.m_mementos[version] = theMemento
    }

    /**读取 */
    public GetMemento(version: string): Memento {
        if (this.m_mementos[version] == undefined) {
            return null
        }
        return this.m_mementos[version]
    }
}