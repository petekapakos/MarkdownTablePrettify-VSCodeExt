import { TableViewModel } from "../viewModels/tableViewModel";

export class TableStringWriter {
    public writeTable(table: TableViewModel): string {
        /*
            * thow error for null
            * write the header in the first row
            * write the separator in the second row
            * write the rows in the next n rows
            * after all but the last columns, the separator "|" must be written
            * in case the view model has left border, start all rows with separator
            * in case the view model has right border, end all rows with separator
        */
        return "";
    }
}