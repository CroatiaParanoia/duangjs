const typeOf = <T>(value: T): TypeName<T> => {
  return Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLocaleLowerCase() as TypeName<T>;
};

type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : T extends null
  ? "null"
  : T extends any[]
  ? "array"
  : "object";

export { typeOf };
