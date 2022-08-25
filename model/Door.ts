export default class Door {
    private _number: number;
    private _havePresent: boolean;
    private _selected: boolean;
    private _open: boolean;

    constructor(
        number: number, 
        havePresent: boolean = false, 
        seleted: boolean = false, 
        open: boolean = false
    ) {
        this._number = number;
        this._havePresent = havePresent;
        this._selected = seleted;
        this._open = open;
    }

    get number() {
        return this._number;
    }

    get havePresent() {
        return this._havePresent;
    }

    get selected() {
        return this._selected;
    }

    get open() {
        return this._open;
    }

    get close() {
        return !this._open;
    }

    unseleted() {
        const selected = false;
        return new Door(this.number, this.havePresent, selected, this.open);
    }

    changeSeleted() {
        const selected = !this.selected;
        return new Door(this.number, this.havePresent, selected, this.open);
    }

    openDoor() {
        const doorOpen = true;
        return new Door(this.number, this.havePresent, this.selected, doorOpen);
    }
}