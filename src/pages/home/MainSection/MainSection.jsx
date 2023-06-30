import { useState } from "react";
import Card from "./components/Card/Card";
import jsonRecord from "../../../dummydata/records.json";
export default function MainSection() {
  const [cards] = useState(jsonRecord);
  const viewCards = cards.map((x, i) => (
    <Card
      key={i}
      name={x.name}
      imageUrl={x.imageUrl}
      address={x.address}
      price={x.price}
      rating={x.rating}
    />
  ));
  return <div className="row ps-5 pe-2 remove-scroll">{viewCards}</div>;
}
