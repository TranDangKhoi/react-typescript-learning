// Record
const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};

// Omit
interface Person {
  name: string;
  age: number;
  location?: string;
}
const Khoi: Omit<Person, "name" | "age"> = {
  location: "Kim Nguu",
};
