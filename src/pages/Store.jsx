import Items from "../components/Items";

function Store() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10 m-10">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </div>
  );
}

export default Store;
