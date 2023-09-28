import { CloseLine, Line, LineType, OpenLine, ValueLine } from './types';

export function isOpenLine(line: Line): line is OpenLine {
  return line.type === LineType.Open;
}

export function isCloseLine(line: Line): line is CloseLine {
  return line.type === LineType.Close;
}

export function isValueLine(line: Line): line is ValueLine {
  return (
    line.type === LineType.Boolean ||
    line.type === LineType.Null ||
    line.type === LineType.Number ||
    line.type === LineType.String
  );
}
