import CardPizza from "./CardPizza";

function Row({ children }) {
  return (
    <div key={CardPizza.id} className="row row-col-3 g-4">
      {children.map((CardPizza) => {
        return <div className="col">{CardPizza.id}</div>;
      })}
    </div>
  );
}
export default Row;
