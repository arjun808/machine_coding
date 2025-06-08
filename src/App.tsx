import InfiniteScrolling from "./Questions/InfiniteScrolling";
import PinterstLayout from "./Questions/PinterstLayout";
const List = Array.from({ length: 100 }).map((_, i) => `Item ${i + 1}`);
const App = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-2">
        Machine round prectise
      </h1>
      {/* <Stepper /> */}
      {/* <DragAndDrop /> */}
      {/* <PinterstLayout /> */}
      <InfiniteScrolling list={List} height={500} itemHeight={35} />;
    </div>
  );
};

export default App;
