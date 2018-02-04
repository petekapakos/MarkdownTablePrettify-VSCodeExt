import { PadCalculator } from "./padCalculator";
import { Table } from "../models/table";
import { ColumnBasedPadCalculatorSelector } from "./columnBasedPadCalculatorSelector";

export class ContentPadCalculator implements PadCalculator {

    public getLeftPadding(paddingChar: string, table: Table, row: number, column: number): string {
        return new ColumnBasedPadCalculatorSelector().select(table, column).getLeftPadding(paddingChar, table, table.rows[row][column]);
    }

    public getRightPadding(paddingChar: string, table: Table, row: number, column: number): string {
        return new ColumnBasedPadCalculatorSelector().select(table, column).getRightPadding(paddingChar, table, row, column);
    }
}