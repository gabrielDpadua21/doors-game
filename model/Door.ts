export default class Door {
    private _number: number;
    private _havePresent: boolean;
    private _seleted: boolean;
    private _open: boolean;

    constructor(
        number: number, 
        havePresent: boolean = false, 
        seleted: boolean = false, 
        open: boolean = false
    ) {
        this._number = number;
        this._havePresent = havePresent;
        this._seleted = seleted;
        this._open = open;
    }

    get number() {
        return this._number;
    }

    get havePresent() {
        return this._havePresent;
    }

    get seleted() {
        return this._seleted;
    }

    get open() {
        return this._open;
    }

    unseleted() {
        const seleted = false;
        return new Door(this.number, this.havePresent, seleted, this.open);
    }

    changeSeleted() {
        const seleted = !this.seleted;
        return new Door(this.number, this.havePresent, seleted, this.open);
    }

    openDoor() {
        const doorOpen = true;
        return new Door(this.number, this.havePresent, this.seleted, doorOpen);
    }
}