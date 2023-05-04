/** 
 * @Author       : chenxinyu
 * @Date         : 2023-04-24 18:13:18
 * @LastEditors  : chenxinyu
 * @LastEditTime : 2023-04-24 18:38:14
 * @FilePath     : \DesignPattens\JavaScripts\Strategy\Strategy.ts
 * @Description  : 修改描述
 */

export abstract class Strategy {
    public abstract AlgorithmInterface();
}

/**
 * 算法A
 */
export class ConcreteStrategyA extends Strategy {
    public override AlgorithmInterface(): void {
        console.log("ConcreteStrategyA.AlgorithmInterface")
    }
}

/**
 * 算法B
 */
export class ConcreteStrategyB extends Strategy {
    public override AlgorithmInterface(): void {
        console.log("ConcreteStrategyB.AlgorithmInterface")
    }
}

/**
 * 算法C
 */
export class ConcreteStrategyC extends Strategy {
    public override AlgorithmInterface(): void {
        console.log("ConcreteStrategyC.AlgorithmInterface")
    }
}

export class Context {
    m_strategy: Strategy = null

    /**
     * 设置算法
     */
    public SetStrategy(strategy: Strategy): void {
        this.m_strategy = strategy
    }

    /**
     * 执行当前算法
     */
    public ContextInterface():void {
        this.m_strategy.AlgorithmInterface()
    }
}