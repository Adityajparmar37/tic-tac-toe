import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Board from "./component/Board";
import ErrorFallback from "./component/ErrorFallback";

function App() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}>
        <div className="App">
          <Board />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
