import { OpenGL } from "../Vistor/RenderEngine"
import { BorderDecorator, Sphere } from "./ShapeDecorator"

@Core.Class
export default class DecoratorTest extends Core.Script {

    protected onStart(): void {
        this.UnitTest()
    }

    public UnitTest(): void {
        let theOpenGL: OpenGL = new OpenGL()

        //球体
        let theSphere: Sphere = new Sphere()
        theSphere.SetRenderEngine(theOpenGL)

        //在图形加外框
        let theSphereWithBorder: BorderDecorator = new BorderDecorator(theSphere)
        theSphereWithBorder.SetRenderEngine(theOpenGL)
        theSphereWithBorder.Draw()
    }
}