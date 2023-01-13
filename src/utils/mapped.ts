// type Developer = {
//   name: string;
// } & Record<string, any>;

type Developer = {
  name: string;
  // Rest field sẽ có key là kiểu string và value là string hoặc number
  [key: string]: string | number;
};

const Tofu: Developer = {
  name: "Tran dang Khoi",
  age: 20,
  gender: "male",
  school: "FPT Aptech",
};

// 2nd Example with keyof:

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
// Type ["darkMode", "newUserProfile"]
// Property: darkMode: void, newUserProfile: void
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// Property: darkMode: boolean, newUserProfile: boolean

// Access Modifier
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type CreateMutable<Type> = {
  -readonly // Xóa readonly ra khỏi các file bên trong Type
  [Property in keyof Type]: Type[Property];
};

type UnlockedAccount = CreateMutable<LockedAccount>;

const unlockedUser: UnlockedAccount = {
  id: "fjskf1",
  name: "Khoi",
};

unlockedUser.name = "Tofu";

const lockedUser: LockedAccount = {
  id: "4124",
  name: "Bao",
};
// Cannot assign to 'name' because it is a read-only property.
// lockedUser.name = "Daddy";
