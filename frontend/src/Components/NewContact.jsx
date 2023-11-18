import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
function NewContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const handleAdd = () => {
    axios
      .post("https://contact-app-yj7a.onrender.com/api/contacts/", {
        name: name,
        email: email,
        phone: phone,
      })
      .then((res) => {
        navigate("/");
      });
  };
  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Phone</label>
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input type="button" value="ADD" onClick={() => handleAdd()} />
    </div>
  );
}

export default NewContact;
