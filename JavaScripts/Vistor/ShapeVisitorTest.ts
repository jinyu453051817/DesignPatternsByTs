import { DirectX } from "./RenderEngine"
import { Cube, Cylinder, DrawVisitor, ShapeContainer, Sphere, VectorCountVisitor } from "./ShapeVisitor"

@Core.Class
export default class ShapeVisitorTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        let theDirectX: DirectX = new DirectX()

        //加入形状
        let theShapeContainer: ShapeContainer = new ShapeContainer()
        theShapeContainer.AddShape(new Cube(theDirectX))
        theShapeContainer.AddShape(new Cylinder(theDirectX))
        theShapeContainer.AddShape(new Sphere(theDirectX))

        //绘图
        theShapeContainer.RunVisitor(new DrawVisitor())

        //顶点数
        let theVectorCount: VectorCountVisitor = new VectorCountVisitor()
        theShapeContainer.RunVisitor(theVectorCount)
        console.log("顶点数：" + JSON.stringify(theVectorCount))

        //
    }
}