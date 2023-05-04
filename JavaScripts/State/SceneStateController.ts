import GameUI1_Generate from "../ui-generate/GameUI1_generate";
import ISceneState from "./ISceneState";
import { State } from "./State";

export default class SceneStateController {
    private m_state: ISceneState
    private m_bRunBegin = false

    constructor() { }

    /**
     * 设置状态
     * @param state 状态
     * @param loadSceneName 场景名
     */
    public SetState(state: ISceneState, loadUI): void {
        this.m_bRunBegin = false

        //载入场景（用换UI代替）
        UI.UIManager.instance.show(loadUI)

        //通知前一个state结束
        if (this.m_state != null) {
            this.m_state.StateEnd()
        }

        //设置
        this.m_state = state
    }

    /**
     * 更新
     */
    public StateUpdate(): void {
        //unity中如果在加载场景就返回

        //通知新的State开始
        if (this.m_state != null && this.m_bRunBegin == false) {
            this.m_state.StateBegin()
            this.m_bRunBegin = true
        }

        if (this.m_state != null) {
            this.m_state.StateUpdate()
        }
    }

}