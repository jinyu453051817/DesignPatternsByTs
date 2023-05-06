import { Proxy } from "./Proxy"

@Core.Class
export default class ProxyTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        //产生Proxy
        let theProxy: Proxy = new Proxy()

        //通过proxy存取
        theProxy.Request()
        theProxy.connectRemote = true
        theProxy.Request()
    }
}