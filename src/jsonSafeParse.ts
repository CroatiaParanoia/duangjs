// 安全解析 JSON
import { typeOf } from "./typeOf";
export function jsonSafeParse(value: string, defaultValue: any) {
  if (typeOf(value) === "string") {
    try {
      const newValue = JSON.parse(value);

      if (typeOf(newValue) !== typeOf(defaultValue)) return defaultValue;

      return newValue;
    } catch {
      return defaultValue;
    }
  }
  return value ?? defaultValue;
}
