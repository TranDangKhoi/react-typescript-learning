import { useEffect, useState } from "react";
import { Permission } from "./utils/enums";
import { Age } from "./utils/types";
// arrObj : {}[] = [{}]
const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string;
}[] = [
  {
    name: "Khoi Dev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 3,
    premiumUser: false,
    date: "04/08/2022",
  },
];

const travelItem: {
  name: string;
  image: string;
  totalReviews: number;
  rating: number;
  location: string;
  price: number;
  date: string;
  departure: string;
  features: {
    freeWifi: boolean;
    freeParking: boolean;
    specialOffers: boolean;
  };
}[] = [
  {
    name: "Zuich, Switzerland",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    totalReviews: 148,
    rating: 4.8,
    price: 30000000,
    location: "Switzerland",
    date: "11/06/2003",
    departure: "Brazil",
    features: {
      freeWifi: true,
      freeParking: true,
      specialOffers: false,
    },
  },
];
const user: {
  firstName: string;
  lastName: string;
  age: Age;
  isSophomore: boolean;
  school: (string | number)[];
  contact: [number, string];
  permission: Permission;
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  age: 18,
  isSophomore: true,
  school: ["FPT Aptech", "Kinh Te Quoc Dan"],
  contact: [09324252523, "baits12@gmail.com"],
  permission: Permission.ADMIN,
};

function App() {
  function displayReview(
    totalReviews: number,
    name: string,
    premiumUser: boolean
  ) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
        <strong>{name}</strong> {premiumUser ? "⭐️" : ""}
      </>
    );
  }
}

export default App;
