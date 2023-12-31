import { render } from "react-dom";

import App from "./App"; 
// import Sample from "./PieChart2"; // deleted
import ScanProcessingJS from "./ScanProcessingJS";
 
const rootElement = document.getElementById("root");
render(<ScanProcessingJS />, rootElement);

// render(<App />, rootElement);
// render(<Sample />, rootElement); // deleted
