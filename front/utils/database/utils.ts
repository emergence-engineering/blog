export type WithKey<T> = T & {
  key: string;
};

// TODO: Array<WithKey<T> | undefined> return value
export const withKey = <T>(collection?: {
  [id: string]: T | undefined;
}): WithKey<T>[] =>
  collection
    ? Object.keys(collection)
        .map((key) => collection[key] && { ...collection[key], key })
        .filter((item): item is T & { key: string } => !!item)
    : [];
