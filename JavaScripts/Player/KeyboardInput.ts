import IUserInput from "./IUserInput";

class KeybordInput extends IUserInput {

    //键盘按键
    public axisHori: string = "Horizontal";
    public axisVer: string = "Vertical";
    public axisJup: string = "axis5";
    public axisJright: string = "axis4";


    public mouseEnable: boolean = false;
    public mouseSensitivityX: number = 11.0
    public mouseSensitivityY: number = 1.0

    // Update is called once per frame

    protected onUpdate(DeltaTime: number): void {
        // this.targetDUp = InputUtil.get.GetAxis(axisVer);
        // this.targetDRight = Input.GetAxis(axisHori);


        // Jright = Input.GetAxis(axisJright);

        this.targetDRight = 0;
        this.targetDUp = 0;

        if (Math.abs(this.Dup) < 0.01) this.Dup = 0;
        if (Math.abs(this.Dright) < 0.01) this.Dright = 0;

        let tempDAxis: Vector2 = this.SquareToCircle(new Vector2(this.Dright, this.Dup));
        let Dright2: number = tempDAxis.x;
        let Dup2: number = tempDAxis.y;

        this.UpdateDmagDvec(Dup2, Dright2);
    }
}
