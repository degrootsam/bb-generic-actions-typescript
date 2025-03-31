export type TAction = string;

export type TUsernamePasswordAuthProfile = {
  authenticationProfile: {
    kind: "usernamePassword";
    id: string;
  };
  username: string;
  password: "REDACTED";
};

export type TCustomAuthProfile = {
  authenticationProfile: {
    kind: "customAuthentication";
    id: string;
  };
  userId: number;
};

export type TAuthenticationProfile = TUsernamePasswordAuthProfile | TCustomAuthProfile;

export type TDefaultRecord = {
  id: number;
};

export type TCollection<T extends TDefaultRecord = TDefaultRecord> = {
  data: T[];
};

export type TCollectionWithModelData<T extends TDefaultRecord = TDefaultRecord> = {
  data: T[];
  model: TModelData<T>[];
};

export type TModelData<T extends TDefaultRecord = TDefaultRecord> = {
  name: keyof T;
  kind: "STRING";
};

export type TRecord<T extends TDefaultRecord = TDefaultRecord> = { data: T };

export type TRecordWithModelData<T extends TDefaultRecord> = {
  data: T;
  model: TModelData<T>[];
};

export type TModel = string;

export type TProperty = { name: string }[];

export type TMapItem = { key: string; value: string };

export type TPropertyMap = TMapItem[];

export type TInputVariableMap = TMapItem[];
