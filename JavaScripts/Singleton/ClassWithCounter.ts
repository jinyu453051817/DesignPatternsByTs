/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-21 17:59:34
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-21 17:59:56
 * @FilePath     : \DesignPattens\JavaScripts\Singleton\ClassWithCounter.ts
 * @Description  : 修改描述
 */
export default class ClassWithCounter {
    protected static m_objConter: number = 0
    protected m_bEnable: boolean = false

    constructor() {
        ClassWithCounter.m_objConter++
        this.m_bEnable = (ClassWithCounter.m_objConter == 1) ? true : false

        if (!this.m_bEnable) {
            console.log("对象超过一个了！！")
        }
    }

    public Operator(): void {
        if (!this.m_bEnable) return
        console.log("可以执行")
    }

}