/**
 * 两个可以执行功能的类
 */
export class Receiver1 {
    constructor() { }
    public Action(command: string): void {
        console.log("Receiver1.Action:Command[" + command + "]")
    }
}

export class Receiver2 {
    constructor() { }
    public Action(param: number): void {
        console.log("Receiver2.Action:param[" + param + "]")
    }
}

/**
 * 执行命令的界面
 */
export abstract class Command {
    public abstract Execute(): void;
}

/**
 * 命令和Receiver1绑定
 */
export class ConcreteCommand1 extends Command {
    m_receiver: Receiver1 = null
    m_command: string = ""

    constructor(receiver: Receiver1, command: string) {
        super()
        this.m_receiver = receiver
        this.m_command = command
    }

    public Execute(): void {
        this.m_receiver.Action(this.m_command)
    }
}

/**
 * 命令和Receiver2绑定
 */
export class ConcreteCommand2 extends Command {
    m_receiver: Receiver2 = null
    m_command: number = 0

    constructor(receiver: Receiver2, command: number) {
        super()
        this.m_receiver = receiver
        this.m_command = command
    }

    public Execute(): void {
        this.m_receiver.Action(this.m_command)
    }
}

/**
 * 命令管理者
 */
export class Invoker {
    m_commands: Array<Command> = new Array<Command>()

    /**
     * 加入命令
     */
    public AddCommand(theCommand: Command): void {
        this.m_commands.push(theCommand)
    }

    /**
     * 执行命令
     */
    public ExecuteCommand(): void {
        //执行
        this.m_commands.forEach(element => {
            element.Execute()
        });
        //清空
        this.m_commands.splice(0, this.m_commands.length)
    }
}