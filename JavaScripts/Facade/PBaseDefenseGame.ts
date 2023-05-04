/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-21 15:33:18
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-21 17:24:06
 * @FilePath     : \DesignPattens\JavaScripts\Facade\PBaseDefenseGame.ts
 * @Description  : 修改描述
 */

import TestCameraSystem from "./TestCameraSystem";
import TestEventSystem from "./TestEventSystem";
import TestPlayerSystem from "./TestPlayerSystem";

export default class PBaseDefenseGame {
    //游戏系统
    private eventSystem: TestEventSystem
    private cameraSystem: TestCameraSystem
    private playerSystem: TestPlayerSystem

    //游戏是否结束
    private m_bGameOver: boolean

    //单例模式
    private static _instance: PBaseDefenseGame
    public static get Instance(): PBaseDefenseGame {
        if (this._instance == null) {
            this._instance = new PBaseDefenseGame()
        }
        return this._instance
    }

    private constructor() { }

    /**
     * 初始化
     */
    public Initinal(): void {
        this.m_bGameOver = false

        this.eventSystem = new TestEventSystem()
        this.cameraSystem = new TestCameraSystem()
        this.playerSystem = new TestPlayerSystem()
    }

    protected onUpdate(DeltaTime: number): void {
        this.eventSystem.Update()
        this.cameraSystem.Update()
        this.playerSystem.Update()
    }

    /**
     * 获得血量
     */
    public GetPlayerHP(): number {
        return this.playerSystem.hp
    }

    /**
     * 游戏是否结束
     * @returns 游戏是否结束
     */
    public ThisGameOver(): boolean {
        return this.m_bGameOver
    }
}