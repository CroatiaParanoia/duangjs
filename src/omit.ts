const omit = <T extends Record<string, any>, K extends Array<keyof T>>(
  obj: T,
  keys: K
): Omit<T, K[number]> => {
  const o = {} as T;

  for (let key in obj) {
    if (!keys.includes(key)) {
      o[key] = obj[key];
    }
  }

  return o;
};

export { omit };
