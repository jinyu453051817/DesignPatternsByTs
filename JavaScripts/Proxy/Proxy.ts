/**制订RealSubject和Proxy共同遵循的接口 */
export abstract class Subject {
    public abstract Request(): void
}

/**真正执行功能的类 Proxy所代表的真正对象 */
export class RealSubject extends Subject {
    constructor() {
        super()
    }

    public override Request(): void {
        console.log("realSubject.Request")
    }
}

/**代理者 持有指向RealSubject对象的引用一边存取真正的对象 */
export class Proxy extends Subject {
    m_realSubject: RealSubject = new RealSubject()

    //权限控制 
    public connectRemote: boolean

    constructor() {
        super()
        this.connectRemote = false
    }

    public override Request(): void {
        //按当前状态决定是否存取RealSubject
        if (this.connectRemote) {
            this.m_realSubject.Request()
        } else {
            console.log("Proxy.Request")
        }
    }
}

