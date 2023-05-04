import PBaseDefenseGame from "../Facade/PBaseDefenseGame";
import GameUI1_Generate from "../ui-generate/GameUI1_generate";
import GameUI2_Generate from "../ui-generate/GameUI2_generate";
import ISceneState from "./ISceneState";
import SceneStateController from "./SceneStateController";

export default class BattleState extends ISceneState {
    constructor(controller: SceneStateController) {
        super(controller)
        this.StateName = "BattleState"
    }

    /**
     * 开始
     */
    public override StateBegin(): void {
        PBaseDefenseGame.Instance.Initinal()
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