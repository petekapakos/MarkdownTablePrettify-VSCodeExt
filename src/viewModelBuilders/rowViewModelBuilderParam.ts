export class RowViewModelBuilderParam {

    constructor(
        private _maxTextLengthsPerColumn: number[]
    ) {
        if (_maxTextLengthsPerColumn == null)
            throw new Error("Can't build row without knowing the expected lengths.");
    }

    public get maxTextLengthsPerColumn(): number[] { return this._maxTextLengthsPerColumn; }
    public get numberOfColumns(): number { return this.maxTextLengthsPerColumn.length; }

    public rowValues: string[];
    public tableHasLeftBorder: boolean;
    public tableHasRightBorder: boolean;

}