/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-24 13:48:42
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-24 13:59:16
 * @FilePath     : \DesignPattens\JavaScripts\Bridge\Icharacer.ts
 * @Description  : 修改描述
 */

import { IWeapon } from "./IWeapon";

export abstract class Icharacer {
    private m_weapon: IWeapon = null

    /**
     * SetWeapon
     */
    public SetWeapon(weapon: IWeapon): void {
        if (this.m_weapon != null) {
            // this.m_weapon.
        }


    }

}