import * as assert from 'assert';
import { assertExt } from "../../assertExtensions";
import { Table } from '../../../src/models/table';
import { Alignment } from '../../../src/models/alignment';
import { Cell } from '../../../src/models/cell';
import { PadCalculator } from '../../../src/padCalculation/padCalculator';
import { SeparatorPadCalculator } from '../../../src/padCalculation/separatorPadCalculator';
import { PadCalculatorSelector } from '../../../src/padCalculation/padCalculatorSelector';

suite("SeparatorPadCalculator tests", () => {

    test("getRightPadding() First column gets right padded with maxColLength+1 dashes", () => {
        const sut = createCalculator();
        const table = tableFor([
            [ "aaaaa", "bbbbb", "ccccc" ],
            [ "aaaaa", "bbbbb", "ccccc" ]
        ]);

        const pad = sut.getRightPadding(table, 1, 0);

        assert.equal(pad, "------");
    });

    test("getRightPadding() First column with left border gets right padded with maxColLength+1 dashes", () => {
        const sut = createCalculator();
        const table = tableFor([
            [ "aaaaa", "bbbbb", "ccccc" ],
            [ "aaaaa", "bbbbb", "ccccc" ]
        ]);
        table.hasLeftBorder = true;
        
        const pad = sut.getRightPadding(table, 1, 0);

        assert.equal(pad, "------");
    });

    test("getRightPadding() Middle column gets right padded with maxColLength+1 dashes", () => {
        const sut = createCalculator();
        const table = tableFor([
            [ "aaaaa", "bbbbb", "ccccc" ],
            [ "aaaaa", "bbbbb", "ccccc" ]
        ]);

        const pad = sut.getRightPadding(table, 1, 1);

        assert.equal(pad, "------");
    });

    test("getRightPadding() Empty middle column gets right padded with 2 dashes", () => {
        const sut = createCalculator();
        const table = tableFor([
            [ "aaaaa", "", "ccccc" ],
            [ "aaaaa", "", "ccccc" ]
        ]);

        const pad = sut.getRightPadding(table, 1, 1);

        assert.equal(pad, "--");
    });

    test("getRightPadding() Last column gets right padded with maxColLength+1 dashes", () => {
        const sut = createCalculator();
        const table = tableFor([
            [ "aaaaa", "bbbbb", "ccccc" ],
            [ "aaaaa", "bbbbb", "ccccc" ]
        ]);

        const pad = sut.getRightPadding(table, 1, 2);

        assert.equal(pad, "------");
    });

    test("getRightPadding() Last column with right border gets right padded with maxColLength+1 dashes", () => {
        const sut = createCalculator();
        const table = tableFor([
            [ "aaaaa", "bbbbb", "ccccc" ],
            [ "aaaaa", "bbbbb", "ccccc" ]
        ]);
        table.hasRightBorder = true;

        const pad = sut.getRightPadding(table, 1, 2);

        assert.equal(pad, "------");
    });

    function tableFor(rows: string[][]) {
        const alignments: Alignment[] = rows[0].map(r => Alignment.Left);
        let table = new Table(rows.map(row => row.map(c  => new Cell(c))), alignments);
        return table;
    }

    function createCalculator(): PadCalculator { 
        return new SeparatorPadCalculator(new PadCalculatorSelector(), "-");
    }
});