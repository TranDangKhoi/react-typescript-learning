// [number, number] => [100, 200]
// Generic

function getTuple<T>(a: T, b: T): [T, T] {
  return [a, b];
}

let stringArray = getTuple("hello", "world");

let numberArray = getTuple(1.25, 2.56);

let ucStrings = stringArray.map((s) => s.toUpperCase());

let numInts = numberArray.map((n) => n.toFixed());

// function ranker
interface IRank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rankCallBack: (v: RankItem) => number
): RankItem[] {
  const ranks: {
    item: RankItem;
    rank: number;
  }[] = items.map((item) => ({
    item: item,
    rank: rankCallBack(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}
console.log(ranker([1, 2, 3, 4, 5], (number) => number * 5));
// [1,2,3,4,5], (v) => v * 5

const languages: {
  name: string;
  difficulty: number;
}[] = [
  {
    name: "ReactJS",
    difficulty: 60,
  },
  {
    name: "Angular",
    difficulty: 90,
  },
  {
    name: "VueJS",
    difficulty: 70,
  },
];

console.log(ranker(languages, ({ difficulty }) => difficulty));
