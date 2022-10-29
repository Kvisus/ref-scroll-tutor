import React, { createRef, useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const cardIds = [0, 1, 2, 3];
  const [unclickedCardIds, setUnclickedCardIds] = useState(cardIds);

  // console.log(unclickedCardIds);

  const refs = cardIds.reduce((acc, value) => {
    acc[value] = createRef();
    return acc;
  }, {});

  // console.log(refs);

  useEffect(() => {
    if (
      unclickedCardIds.length > 0 &&
      unclickedCardIds.length < cardIds.length
    ) {
      const highestId = Math.min(...unclickedCardIds);
      refs[highestId].current.scrollIntoView({ behavior: "smooth" });
    }
    //scroll to highest
  }, [unclickedCardIds]);

  return (
    <div>
      <header></header>
      {cardIds.map((card) => (
        <Card
          key={card}
          cardId={card}
          unclickedCardIds={unclickedCardIds}
          setUnclickedCardIds={setUnclickedCardIds}
          ref={refs[card]}
        />
      ))}
    </div>
  );
};

export default App;
