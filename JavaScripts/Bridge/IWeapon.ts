import {Icharacer} from "./Icharacer"

/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-24 13:44:21
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-24 14:42:51
 * @FilePath     : \DesignPattens\JavaScripts\Bridge\IWeapon.ts
 * @Description  : 武器接口
 */
export abstract class IWeapon {
    //额外增加攻击力
    protected m_atkPlusValue: number = 0
    //攻击力
    protected m_atk: number = 0
    //攻击距离
    protected m_range: number = 0

    //显示模型
    protected m_gameObject: Core.GameObject = null
    //武器拥有着
    protected m_weaponOwner: Icharacer = null

    /**
     * 发射子弹
     * @param targetPosition 
     * @param lineWidth 
     * @param displayTime 
     */
    protected ShowBulletEffect(targetPosition: Vector, lineWidth: number, displayTime: number) {

    }

    /**
     * 攻击目标
     * @param theTarget 
     */
    public abstract Fire(theTarget: Icharacer): void;
}