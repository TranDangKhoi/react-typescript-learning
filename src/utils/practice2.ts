type LooseAutoComplete<T extends string> = T | Omit<string, T>;
type TIconSize = LooseAutoComplete<"xs" | "sm">;

const iconSize: TIconSize = "";
