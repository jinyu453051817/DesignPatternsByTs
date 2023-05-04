import SceneStateController from "./SceneStateController";

/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-20 18:13:20
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-21 11:20:42
 * @FilePath     : \DesignPattens\JavaScripts\State\ISceneState.ts
 * @Description  : 修改描述
 */
export default class ISceneState {
    //状态名称
    private m_stateName: string = "ISceneState"


    public get StateName(): string {
        return this.m_stateName
    }

    public set StateName(v: string) {
        this.m_stateName = v;
    }

    //控制者
    protected m_controller: SceneStateController = null

    //建造者
    constructor(controller: SceneStateController) {
        this.m_controller = controller
    }

    //开始
    public StateBegin(): void { }

    //结束
    public StateEnd(): void { }

    //更新
    public StateUpdate(): void { }

    public ToString(): string {
        return StringUtil.format("I_SceneState:StateName = {0}", this.StateName)
    }
}