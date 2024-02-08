import Card from "../card/Card";
import "./cardList.styles.css";

const CardList = ({ robots }) => {
  return (
    <div className="card-list">
      {robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

export default CardList;
