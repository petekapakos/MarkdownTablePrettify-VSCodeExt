import { IAlignmentMarker } from ".";

export class CenterAlignmentMarker implements IAlignmentMarker {
    public mark(padding: string): string {
        if (padding == null || padding.length < 2) 
            return padding;

        return ":" + padding.substring(1, padding.length - 1) + ":";
    }
}