import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contacts from "./Components/Contacts";
import EditContact from "./Components/EditContact";
import { useNavigate } from "react-router-dom";

import NewContact from "./Components/NewContact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/edit-contact" element={<EditContact />} />
          <Route path="/add-contact" element={<NewContact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
