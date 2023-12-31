import { render } from "react-dom";

import App from "./App";
import Test from "./Test";
// import Sample from "./PieChart2"; // deleted
import ScanProcessingJS from "./ScanProcessingJS";
import DoubleSpaceEnforcer from "./DoubleSpaceEnforcer";
import GlassDoorReviewFormatter from "./GlassDoorReviewFormatter";
import SentConnections from "./SentConnectionsLessBuggy";

// SentConnections

const rootElement = document.getElementById("root");
render(<ScanProcessingJS />, rootElement);
// render(<SentConnections />, rootElement);
// render(<DoubleSpaceEnforcer />, rootElement);

// render(<GlassDoorReviewFormatter />, rootElement);

// render(<Test />, rootElement);
// render(<App />, rootElement);
// render(<Sample />, rootElement); // deleted
