import { forwardRef } from "react";

const Card = ({ cardId, unclickedCardIds, setUnclickedCardIds }, ref) => {
  const handleClick = () => {
    setUnclickedCardIds(unclickedCardIds.filter((id) => id !== cardId));
  };

  return (
    <article className="card" onClick={handleClick} ref={ref}>
      {cardId}
    </article>
  );
};

export default forwardRef(Card);
