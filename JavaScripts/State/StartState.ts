import GameUI1_Generate from "../ui-generate/GameUI1_generate";
import GameUI2_Generate from "../ui-generate/GameUI2_generate";
import ISceneState from "./ISceneState";
import SceneStateController from "./SceneStateController";

export default class StartState extends ISceneState {
    constructor(controller: SceneStateController) {
        super(controller)
        this.StateName = "StartState"
    }

    /**
     * 开始
     */
    public override StateBegin(): void {
    }

    /**
     * 结束
     */
    public override StateEnd(): void {
    }

    /**
     * 更新
     */
    public override StateUpdate(): void {
    }
}