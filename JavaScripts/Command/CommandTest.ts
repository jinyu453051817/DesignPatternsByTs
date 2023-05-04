import { Command, ConcreteCommand1, ConcreteCommand2, Invoker, Receiver1, Receiver2 } from "./Command"

@Core.Class
export default class CommandTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        let theInvoker: Invoker = new Invoker()
        let theCommand: Command = null

        //将命令与执行结合
        theCommand = new ConcreteCommand1(new Receiver1(), "你好")
        theInvoker.AddCommand(theCommand)
        theCommand = new ConcreteCommand2(new Receiver2(), 999)
        theInvoker.AddCommand(theCommand)

        //执行
        theInvoker.ExecuteCommand()

    }
}