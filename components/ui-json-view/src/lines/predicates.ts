import { CloseLine, Line, LineType, OpenLine } from './types';

export function isOpenLine(line: Line): line is OpenLine {
  return line.type === LineType.ArrayOpen || line.type === LineType.ObjectOpen;
}

export function isCloseLine(line: Line): line is CloseLine {
  return line.type === LineType.ArrayClose || line.type === LineType.ObjectClose;
}
