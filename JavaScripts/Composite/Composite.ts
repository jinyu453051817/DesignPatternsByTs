
/**
 * 组合体内含对象之界面
 */
export abstract class IComponent {
    protected m_value: string

    //一般操作
    public abstract Operation(): void;

    /**加入节点*/
    public Add(theComponent: IComponent): void {
        console.log("子类没实现")
    }

    /**删除节点*/
    public Remove(theComponent: IComponent): void {
        console.log("子类没实现")
    }

    /**获取子节点*/
    public GetChild(index: number): IComponent {
        console.log("子类没实现")
        return null
    }
}

/**
 * 代表组合结构的元节点之行为
 */
export class Composite extends IComponent {
    private m_children: Array<IComponent> = new Array<IComponent>()

    constructor(value: string) {
        super()
        this.m_value = value
    }

    //一般操作
    public override Operation(): void {
        console.log("Composite[" + this.m_value + "]")

        this.m_children.forEach(element => {
            element.Operation()
        });
    }

    /**加入节点*/
    public override Add(theComponent: IComponent): void {
        this.m_children.push(theComponent)
    }

    /**删除节点*/
    public Remove(theComponent: IComponent): void {
        //找到需要删除的节点是第几个位置
        let index = this.m_children.indexOf(theComponent)
        //从需要删除的位置删除一个
        this.m_children.splice(index, 1)
    }

    /**获取子节点*/
    public GetChild(index: number): IComponent {
        return this.m_children[index]
    }
}

/**
 * 代表组合结构之终端对象
 */
export class Leaf extends IComponent {
    constructor(value: string) {
        super()
        this.m_value = value
    }

    //一般操作
    public override Operation(): void {
        console.log("Leaf[" + this.m_value + "]执行Operationn")
    }
}