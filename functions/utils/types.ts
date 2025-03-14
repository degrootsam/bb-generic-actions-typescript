export type AuthenticationProfileBase = {
  authenticationProfile: {
    id: string;
  };
};

export type UsernamePasswordAuth = AuthenticationProfileBase & {
  authenticationProfile: { kind: "usernamePassword" };
  username: string;
  password: string;
};

export type CustomAuthenticationAuth = AuthenticationProfileBase & {
  authenticationProfile: { kind: "customAuthentication" };
  userId: number;
};

export type AuthenticationProfile =
  | UsernamePasswordAuth
  | CustomAuthenticationAuth;

export type DefaultRecord = {
  id: number;
};

export type PropertyKind =
  | "AUTO_INCREMENT"
  | "BOOLEAN"
  | "DATE"
  | "DATE_TIME"
  | "EMAIL_ADDRESS"
  | "IBAN"
  | "INTEGER"
  | "IMAGE"
  | "FILE"
  | "LIST"
  | "MINUTES"
  | "PASSWORD"
  | "PDF"
  | "SERIAL"
  | "STRING"
  | "TEXT"
  | "URL";

export type PropertyInformation = {
  kind: PropertyKind;
  name: string;
};

export type Map<K = string, V = any> = { key: K; value: V }[];

export type AdditionalModelInformation = {
  name?: string;
  properties: { kind: PropertyKind; name: string };
};

export type Collection<T = DefaultRecord> = T[];
export type CollectionWithModelData<T = DefaultRecord> = {
  data: Collection<T>;
  model: AdditionalModelInformation;
};
export type Model = { name: string };
export type Property = PropertyInformation[];
export type PropertyMap = Map<PropertyInformation[], any>;

export type Record<T = DefaultRecord> = { data: T };
export type RecordWithModelData<T = DefaultRecord> = {
  data: T;
  model: AdditionalModelInformation;
};

export type Value<T = any> = T;
export type VariableMap = Map<string, string>;
