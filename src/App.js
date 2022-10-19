import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Calendar from "./sidebarComponent/Calendar";
import Kanban from "./sidebarComponent/Kanban";
import Customer from "./sidebarComponent/Customer";
import SelectColor from "./sidebarComponent/SelectColor";
import Line from "./sidebarComponent/chart/Line";
import Area from "./sidebarComponent/chart/Area";
import Bar from "./sidebarComponent/chart/Bar";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/HomePage" element={<Home />} />\
        <Route path="/customers" element={<Customer />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/color-picker" element={<SelectColor />} />
        <Route path="/line" element={<Line />} />
        <Route path="/area" element={<Area />} />
        <Route path="/bar" element={<Bar />} />
      </Routes>
    </Router>
  );
}

export default App;
