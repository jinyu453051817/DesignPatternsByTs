/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-21 14:52:34
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-21 14:57:18
 * @FilePath     : \DesignPattens\JavaScripts\State\EndState.ts
 * @Description  : 修改描述
 */
import GameUI1_Generate from "../ui-generate/GameUI1_generate";
import GameUI2_Generate from "../ui-generate/GameUI2_generate";
import ISceneState from "./ISceneState";
import SceneStateController from "./SceneStateController";

export default class EndState extends ISceneState {
    constructor(controller: SceneStateController) {
        super(controller)
        this.StateName = "EndState"
    }

    /**
     * 开始
     */
    public override StateBegin(): void {
        // UI.UIManager.instance.show(GameUI1_Generate)
    }

    /**
     * 结束
     */
    public override StateEnd(): void {
        // UI.UIManager.instance.show(GameUI2_Generate)
    }

    /**
     * 更新
     */
    public override StateUpdate(): void {
    }
}