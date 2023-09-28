import { CloseLine, Line, LineKind, OpenLine, ValueLine } from './types';

export function isOpenLine(line: Line): line is OpenLine {
  return line.kind === LineKind.Open;
}

export function isCloseLine(line: Line): line is CloseLine {
  return line.kind === LineKind.Close;
}

export function isValueLine(line: Line): line is ValueLine {
  return line.kind === LineKind.Value;
}
