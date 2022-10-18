import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import "./App.css";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <DragDrop />
      </div>
    </DndProvider>
  );
};

export default App;
