import { typeOf } from "./typeOf";
export function toEnum<T extends Record<string, string | number>>(obj: T) {
  if (typeOf(obj) !== "object") return {};

  const newObj = { ...obj } as any;
  for (let key in newObj) {
    const value = newObj[key];
    newObj[value] = key;
  }
  return newObj;
}
