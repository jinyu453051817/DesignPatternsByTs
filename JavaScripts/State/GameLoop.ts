import PBaseDefenseGame from "../Facade/PBaseDefenseGame";
import GameUI1_Generate from "../ui-generate/GameUI1_generate";
import GameUI2_Generate from "../ui-generate/GameUI2_generate";
import GameUI3_Generate from "../ui-generate/GameUI3_generate";
import SceneStateController from "./SceneStateController";
import StartState from "./StartState";

@Core.Class
export default class GameLoop extends Core.Script {

    //转换场景
    private m_sceneStateController: SceneStateController = new SceneStateController()

    protected onStart(): void {
        //切换场景不会被删除

        this.useUpdate = true
        //设置起始场景
        this.m_sceneStateController.SetState(new StartState(this.m_sceneStateController), GameUI3_Generate)

    }

    protected onUpdate(dt: number): void {
        this.m_sceneStateController.StateUpdate()
    }

}