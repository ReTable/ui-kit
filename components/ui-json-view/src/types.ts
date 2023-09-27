// region Json

export type JsonArray = JsonValue[];

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export type JsonObject = { [key: string]: JsonValue };

export type JsonValue = JsonArray | JsonObject | boolean | null | number | string;

// endregion

// region Options

export type JsonViewOptions = {
  showServiceData: boolean;
};

// endregion
