import { RenderEngine } from "./RenderEngine";

/**
 * 形状
 */
export abstract class Ishape {
    protected renderEngine: RenderEngine = null

    public SetRenderEngine(theRenderEngine: RenderEngine): void {
        this.renderEngine = theRenderEngine
    }

    public abstract Draw(): void;
}

export class Sphere extends Ishape {
    public override Draw(): void {
        this.renderEngine.Render("Sphere")
    }
}

export class Cube extends Ishape {
    public override Draw(): void {
        this.renderEngine.Render("Cube")
    }
}

export class Cylinder extends Ishape {
    public override Draw(): void {
        this.renderEngine.Render("Cylinder")
    }
}