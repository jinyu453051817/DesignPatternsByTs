/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-23 16:48:56
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-23 17:20:30
 * @FilePath     : \DesignPattens\JavaScripts\Character\ICharacter.ts
 * @Description  : 角色接口
 */
export default class ICharacter {
    protected name: string = ""

    //是否阵亡
    protected killed: boolean = false
    //是否确认过阵亡事件
    protected checkKilled: boolean = false
    //是否可以删除
    protected canRemove: boolean = false
    //阵亡后多久删除
    protected removeTimer: number = 1.5

    public ICharacter() { }

    /**
     * 设置unity模型
     */
    public SetGameObject(): void { }
}