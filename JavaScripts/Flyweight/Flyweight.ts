/**
 * 可以被共享的flyweight接口
 */
export abstract class Flyweight {
    //显示的内容
    protected m_content: string

    //构造函数重载示例
    public constructor();
    public constructor(content: string);

    public constructor(content: string = "") {
        this.m_content = content
    }

    public GetContent(): string {
        return this.m_content
    }

    public abstract Operactor(): void
}

/**
 * 之后要被共享的组件
 */
export class ConcreteFlyweight extends Flyweight {
    public constructor(content: string) {
        super(content)
    }

    public override Operactor(): void {
        console.log("ConcreteFlyweight.content:[" + this.m_content + "]")
    }
}

/**
 * 不共享的组件（可以不继承） 包含共享资源和不共享资源
 */
export class UnsharedConcteteFlyweight {// extends Flyweight {
    //共享的组件
    m_flyweight: Flyweight = null
    //不共享的组件
    m_unsharedContent: string

    public constructor(content: string) {
        this.m_unsharedContent = content
    }

    /**
     * 设置共享组件
     * @param theFlyweight 
     */
    public SetFlyweight(theFlyweight: Flyweight): void {
        this.m_flyweight = theFlyweight
    }

    public Operactor(): void {
        let msg = StringUtil.format("ConcreteFlyweight.content[{0}]", this.m_unsharedContent)
        if (this.m_flyweight != null) {
            msg += "包含了：" + this.m_flyweight.GetContent()
        }
        console.log(msg)
    }
}

/**
 * 负责产生Flyweight的工厂接口
 */
export class FlyweightFactor {
    private m_flyweights: Map<string, Flyweight> = new Map<string, Flyweight>()

    /**
     * 获取共享的组件
     */
    public GetFlyweight(key: string, content: string): Flyweight {
        if (this.m_flyweights[key] != undefined) {
            return this.m_flyweights[key]
        }

        //产生并设置内容
        let theFlyweight: ConcreteFlyweight = new ConcreteFlyweight(content)
        this.m_flyweights[key] = theFlyweight
        console.log("new ConcreteFlyweight key[" + key + "]  content[" + content + "]")
        return theFlyweight
    }

    //获取组件重载
    /**
     * 获取组件（只获取不共享的flyweight）
     */
    public GetUnsharedFlyweight(content: string): UnsharedConcteteFlyweight;
    /**
     * 获取组件（包含共享部分的flyweight）
     */
    public GetUnsharedFlyweight(key: string, sharedContent: string, unsharedContent: string): UnsharedConcteteFlyweight

    //重载的实现
    public GetUnsharedFlyweight(keyOrContent: string, sharedContent: string = "", unsharedContent: string = ""): UnsharedConcteteFlyweight {
        if (keyOrContent.length != 1) {
            //只获取不共享
            return new UnsharedConcteteFlyweight(keyOrContent)
        } else {
            //获取包含共享
            //先获取共享的部分
            let sharedFlyweight: Flyweight = this.GetFlyweight(keyOrContent, sharedContent)
            //产生组件
            let theFlyweight: UnsharedConcteteFlyweight = new UnsharedConcteteFlyweight(unsharedContent)
            //设置共享的部分
            theFlyweight.SetFlyweight(sharedFlyweight)
            return theFlyweight
        }
    }

}