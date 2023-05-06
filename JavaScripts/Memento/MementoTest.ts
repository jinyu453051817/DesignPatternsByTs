import { Caretaker, Memento, Originator } from "./Memento"

@Core.Class
export default class MementoTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        let theOriginator: Originator = new Originator()
        let theCaretaker: Caretaker = new Caretaker()

        //设置信息
        theOriginator.SetInfo("Step1")
        theOriginator.ShowInfo()
        //保存
        theCaretaker.AddMemento("1", theOriginator.CreateMemento())

        //设置信息
        theOriginator.SetInfo("Step2")
        theOriginator.ShowInfo()
        //保存
        theCaretaker.AddMemento("2", theOriginator.CreateMemento())

        //设置信息
        theOriginator.SetInfo("Step3")
        theOriginator.ShowInfo()
        //保存
        theCaretaker.AddMemento("3", theOriginator.CreateMemento())

        //回退到第二版
        theOriginator.SetMemento(theCaretaker.GetMemento("2"))
        theOriginator.ShowInfo()

        //回退到第1版
        theOriginator.SetMemento(theCaretaker.GetMemento("1"))
        theOriginator.ShowInfo()
    }
}