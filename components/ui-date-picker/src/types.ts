export type DayOfMonth = {
  date: Date;

  isOutOfMonth: boolean;
  isSelected: boolean;
};

export type Type = 'date' | 'time' | 'datetime';
