/**
 * 绘图引擎
 */
export abstract class RenderEngine {
    public abstract Render(objName: string): void
}

/**
 * DirectX引擎
 */
export class DirectX extends RenderEngine {
    public override Render(objName: string): void {
        this.DXRender(objName)
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

    public GLRender(objName: string): void {
        console.log("GLRender:" + objName)
    }
}