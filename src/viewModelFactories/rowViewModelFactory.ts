import { RowViewModel } from "../viewModels/rowViewModel";
import { PadCalculator } from "../padCalculation/padCalculator";
import { Table } from "../models/table";
import { Alignment } from "../models/alignment";
import { AlignmentMarkerStrategy } from "./alignmentMarker";

export class RowViewModelFactory {

    constructor(
        private _contentPadCalculator: PadCalculator,
        private _separatorPadCalculator: PadCalculator)
    { }

    public buildRow(row: number, table: Table): RowViewModel {
        if (table == null) throw new Error("Paramter can't be null");

        let resultRow = new Array(table.columnCount);

        for(let col = 0; col < table.columnCount; col++)
            resultRow[col] =
                this._contentPadCalculator.getLeftPadding(table, row, col) +
                table.rows[row][col].getValue() +
                this._contentPadCalculator.getRightPadding(table, row, col);

        return new RowViewModel(resultRow);
    }

    public buildSeparator(table: Table): RowViewModel {
        let resultRow = new Array(table.columnCount);

        //TODO: extract this as constructor param
        let alignmentMarkerSelector = new AlignmentMarkerStrategy();
        for(let col = 0; col < table.columnCount; col++)
            resultRow[col] = alignmentMarkerSelector.marker(table.alignments[col]).mark(
                this._separatorPadCalculator.getLeftPadding(table, 1, col) +
                this._separatorPadCalculator.getRightPadding(table, 0, col)
            );

        return new RowViewModel(resultRow);
    }
/*
    private withAlignmentMarkers(padding: string, alignment: Alignment): string {
        if (alignment == Alignment.NotSet || padding == null)
            return padding;
        if (alignment == Alignment.Left)
            return ":" + padding.substr(1);
        if (alignment == Alignment.Right)
            return padding.substring(0, padding.length - 1) + ":";

        return ":" + padding.substring(1, padding.length - 1) + ":";
    }*/
}
