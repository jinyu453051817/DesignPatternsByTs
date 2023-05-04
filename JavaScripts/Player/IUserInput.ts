
@Core.Class
export default class IUserInput extends Core.Script {

    public Dup: number;
    public Dright: number;
    public Dmag: number;
    public Dvec: Vector;

    //1.pressing type signal
    public run: boolean;
    public canRun: boolean;

    protected targetDUp: number;
    protected targetDRight: number;
    protected velocityDUp: number;
    protected velocityDRight: number;

    protected SquareToCircle(input: Vector2): Vector2 {
        let output: Vector2 = Vector2.zero;
        // Gameplay.getCurrentPlayer().character.addMoveInput()

        output.x = input.x * Math.sqrt(1 - (input.y * input.y) / 2);
        output.y = input.y * Math.sqrt(1 - (input.x * input.x) / 2);

        return output;

    }

    protected UpdateDmagDvec(Dup2: number, Dright2: number): void {
        this.Dmag = Math.sqrt((Dup2 * Dup2) + (Dright2 * Dright2));

        this.Dvec = this.gameObject.transform.getRightVector().multiply(Dright2).clone().add(this.gameObject.transform.getForwardVector().multiply(this.Dup));
    }
}