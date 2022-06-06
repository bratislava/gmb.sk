export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

export type ObjWithAttributes = {
  attributes?: Record<string, unknown> | null | undefined;
};

export type ObjWithTypename = {
  __typename?: string | null;
};

export type ObjWithTypenameError = {
  __typename: "Error";
  code: string;
  message: string;
};

export type WithRequired<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: NonNullable<Type[Property]>;
};

export type WithAttributes<Type extends ObjWithAttributes> = WithRequired<
  Type,
  "attributes"
>;

export type WithTypename<Type extends ObjWithTypename> = WithRequired<
  Type,
  "__typename"
>;

export function hasAttributes<T extends ObjWithAttributes>(value: T | null | undefined): value is WithAttributes<T> {
  return isDefined(value) && "attributes" in value && isDefined(value.attributes);
}

// export function withAttributes<T extends ObjWithAttributes>(value: T | null | undefined): WithAttributes<T> | null | undefined {
export function withAttributes<T extends ObjWithAttributes>(value: T | null | undefined): WithAttributes<T> {
  // if (isDefined(value)) {
  //   if (hasAttributes(value)) {
      return value as WithAttributes<T>;
  //   } else {
  //     return null
  //   }
  // } else {
  //   return value
  // } 
}

export function isError<T extends ObjWithTypename>(value: T | {__typename: 'Error'} | null | undefined): value is ObjWithTypenameError
{
  return isDefined(value) && "__typename" in value && isDefined(value.__typename) && value.__typename === "Error";
}
