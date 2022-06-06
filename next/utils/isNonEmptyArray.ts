import { isDefined } from './isDefined';

export function isNonEmptyArray<T>(
  maybeArray: T[] | undefined | null
): maybeArray is T[] {
  return (
    isDefined(maybeArray) && Array.isArray(maybeArray) && maybeArray.length > 0
  );
}
