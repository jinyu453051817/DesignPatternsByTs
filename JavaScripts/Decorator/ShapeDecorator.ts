import { RenderEngine } from "../Vistor/RenderEngine"

/**
 * 形状
 */
export abstract class Ishape {
    //使用的绘图引擎
    protected renderEngine: RenderEngine = null

    public SetRenderEngine(theRenderEngine: RenderEngine): void {
        this.renderEngine = theRenderEngine
    }

    public abstract Draw(): void;
    public abstract GetPolygon(): string;
}

/**
 * 球体
 */
export class Sphere extends Ishape {
    public override Draw(): void {
        this.renderEngine.Render("Sphere")
    }

    public override GetPolygon(): string {
        return "Sphere多边形"
    }
}

/**形状装饰者接口 */
export abstract class IShapeDerector extends Ishape {
    m_component: Ishape

    constructor(theComponent: Ishape) {
        super()
        this.m_component = theComponent
    }

    public override Draw(): void {
        this.m_component.Draw()
    }

    public override GetPolygon(): string {
        return this.m_component.GetPolygon()
    }
}

/**实现能附加额外功能的类 */
export abstract class IAdditional {
    protected m_renderEngine: RenderEngine = null

    public SetRenderEngine(renderEngine: RenderEngine): void {
        this.m_renderEngine = renderEngine
    }

    public abstract DrawOnShape(theShape: Ishape): void;
}

/**外框 */
export class Border extends IAdditional {
    public override DrawOnShape(theShape: Ishape): void {
        this.m_renderEngine.Render("Draw Border On" + theShape.GetPolygon())
    }
}

/**外框装饰者 */
export class BorderDecorator extends IShapeDerector {
    //外框功能
    m_border: Border = new Border()

    constructor(theComponent: Ishape) {
        super(theComponent)
    }

    public SetRenderEngine(theRenderEngine: RenderEngine): void {
        super.SetRenderEngine(theRenderEngine)
        this.m_border.SetRenderEngine(theRenderEngine)
    }

    public override Draw(): void {
        //被装饰者的功能
        super.Draw()
        //外框功能
        this.m_border.DrawOnShape(this)
    }
}