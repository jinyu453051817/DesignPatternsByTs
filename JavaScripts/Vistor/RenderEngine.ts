/**
 * 绘图引擎
 */
export abstract class RenderEngine {
    public abstract Render(objName: string): void
    public abstract Text(text: string): void
}

/**
 * DirectX引擎
 */
export class DirectX extends RenderEngine {
    public override Render(objName: string): void {
        this.DXRender(objName)
    }

    public override Text(text: string): void {
        this.DXRender(text)
    }

    public DXRender(objName: string): void {
        console.log("DXRender:" + objName)
    }


}

/**
 * OpenGL引擎
 */
export class OpenGL extends RenderEngine {
    public override Render(objName: string): void {
        this.GLRender(objName)
    }

    public override Text(text: string): void {
        this.GLRender(text)
    }

    public GLRender(objName: string): void {
        console.log("GLRender:" + objName)
    }
}

/**
 * 形状
 */
export abstract class Ishape {
    //使用的绘图引擎
    protected renderEngine: RenderEngine = null
    //显示位置
    protected m_position: Vector = Vector.zero
    //大小
    protected m_scale: Vector = Vector.zero

    public SetRenderEngine(theRenderEngine: RenderEngine): void {
        this.renderEngine = theRenderEngine
    }

    public GetPosition(): Vector {
        return this.m_position
    }

    public GetScale(): Vector {
        return this.m_scale
    }

    public abstract Draw(): void;
}

/**
 * 球体
 */
export class Sphere extends Ishape {

    constructor(theRenderEngine: RenderEngine) {
        super()
        super.SetRenderEngine(theRenderEngine)
    }

    public override Draw(): void {
        this.renderEngine.Render("Sphere")
    }
}

/**
 * 立方体
 */
export class Cube extends Ishape {

    constructor(theRenderEngine: RenderEngine) {
        super()
        super.SetRenderEngine(theRenderEngine)
    }

    public override Draw(): void {
        this.renderEngine.Render("Cube")
    }
}

/**
 * 圆柱体
 */
export class Cylinder extends Ishape {

    constructor(theRenderEngine: RenderEngine) {
        super()
        super.SetRenderEngine(theRenderEngine)
    }

    public override Draw(): void {
        this.renderEngine.Render("Cylinder")
    }
}

/**
 * 形状容器
 */
export class ShapeContainer {
    m_shapes: Array<Ishape> = new Array<Ishape>()

    constructor() { }

    /**
     * 新增
     */
    public AddShape(theShape: Ishape): void {
        this.m_shapes.push(theShape)
    }
}