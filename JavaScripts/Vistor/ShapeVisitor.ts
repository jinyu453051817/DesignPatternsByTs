import { RenderEngine } from "./RenderEngine"

/** 访问者接口*/
export abstract class IShapeVisitor {
    /** Sphere调用*/
    public VisitSphere(theSphere: Sphere): void { }

    /** Cube调用*/
    public VisitCube(theCube: Cube): void { }

    /** Cylinder调用*/
    public VisitCylinder(theCylinder: Cylinder): void { }
}

/**形状容器 */
export class ShapeContainer {
    m_shapes: Array<IShape> = new Array<IShape>()

    constructor() { }

    /** 新增*/
    public AddShape(theShape: IShape): void {
        this.m_shapes.push(theShape)
    }

    /**共享的访问者接口 */
    public RunVisitor(theVisitor: IShapeVisitor): void {
        this.m_shapes.forEach(element => {
            element.RunVisitor(theVisitor)
        });
    }
}

/**形状的定义 */
export abstract class IShape {
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

    /**绘出 */
    public abstract Draw(): void;
    /**获取体积 */
    public abstract GetVolume(): number;
    /**获取顶点数 */
    public abstract GetVectorCount(): number;
    public abstract RunVisitor(theVisitor: IShapeVisitor): void;
}

/** 球体*/
export class Sphere extends IShape {
    constructor(theRenderEngine: RenderEngine) {
        super()
        super.SetRenderEngine(theRenderEngine)
    }

    public override Draw(): void {
        this.renderEngine.Render("Sphere")
    }

    public override GetVolume(): number {
        return 0
    }
    public override GetVectorCount(): number {
        return 80
    }
    public override RunVisitor(theVisitor: IShapeVisitor): void {
        theVisitor.VisitSphere(this)
    }
}

/** 立方体*/
export class Cube extends IShape {

    constructor(theRenderEngine: RenderEngine) {
        super()
        super.SetRenderEngine(theRenderEngine)
    }

    public override Draw(): void {
        this.renderEngine.Render("Cube")
    }

    public override GetVolume(): number {
        return 0
    }
    public override GetVectorCount(): number {
        return 8
    }
    public override RunVisitor(theVisitor: IShapeVisitor): void {
        theVisitor.VisitCube(this)
    }
}

/** 圆柱体*/
export class Cylinder extends IShape {

    constructor(theRenderEngine: RenderEngine) {
        super()
        super.SetRenderEngine(theRenderEngine)
    }

    public override Draw(): void {
        this.renderEngine.Render("Cylinder")
    }

    public override GetVolume(): number {
        return 0
    }
    public override GetVectorCount(): number {
        return 16
    }
    public override RunVisitor(theVisitor: IShapeVisitor): void {
        theVisitor.VisitCylinder(this)
    }
}

/**绘图功能的Vistor */
export class DrawVisitor extends IShapeVisitor {
    /**由Sphere调用 */
    public override VisitSphere(theSphere: Sphere): void {
        theSphere.Draw()
    }

    /**由Cube调用 */
    public override VisitCube(theCube: Cube): void {
        theCube.Draw()
    }

    /**由Cylinder调用 */
    public override VisitCylinder(theCylinder: Cylinder): void {
        theCylinder.Draw()
    }
}

/**计算顶点数Vistor */
export class VectorCountVisitor extends IShapeVisitor {
    public count: number = 0

    /**由Sphere调用 */
    public override VisitSphere(theSphere: Sphere): void {
        this.count += theSphere.GetVectorCount()
    }

    /**由Cube调用 */
    public override VisitCube(theCube: Cube): void {
        this.count += theCube.GetVectorCount()
    }

    /**由Cylinder调用 */
    public override VisitCylinder(theCylinder: Cylinder): void {
        this.count += theCylinder.GetVectorCount()
    }
}