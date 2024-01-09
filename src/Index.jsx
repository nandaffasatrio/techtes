// FormComponent.jsx
import React, { useState } from "react";
import "./App.css";

const FormComponent = () => {
  const [form1Values, setForm1Values] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });

  const [average1, setAverage1] = useState(null);
  const [order1, setOrder1] = useState([]);

  const handleFormSubmit = (formValues, setAverage, setOrder) => (e) => {
    e.preventDefault();

    const values = Object.values(formValues).map(Number);

    if (values.every((value) => !isNaN(value) && value >= 1 && value <= 100)) {
      const avg = values.reduce((acc, val) => acc + val, 0) / values.length;
      const order = values.slice().sort((b, a) => a - b);

      setAverage(avg);
      setOrder(order);
    } else {
      alert("Nilai harus berupa angka antara 1 dan 10");
    }
  };

  const handleForm1Submit = handleFormSubmit(form1Values, setAverage1, setOrder1);

  const handleInputChange = (formValues, setFormValues) => (e) => {
    const { name, value } = e.target;

    if (!isNaN(value) && (value === "" || (value >= 1 && value <= 100))) {
      setFormValues({ ...formValues, [name]: value });
      e.target.style.borderColor = "green";
    } else {
      setFormValues({ ...formValues, [name]: value });
      e.target.style.borderColor = "red";
    }
  };

  const handleForm1InputChange = handleInputChange(form1Values, setForm1Values);

  return (
    <div className="form-container">
      <form onSubmit={handleForm1Submit}>
        <div className="form-input">
          <label>
            <input type="number" name="input1" value={form1Values.input1} onChange={handleForm1InputChange} />
          </label>
          <label>
            <input type="number" name="input2" value={form1Values.input2} onChange={handleForm1InputChange} />
          </label>
          <label>
            <input type="number" name="input3" value={form1Values.input3} onChange={handleForm1InputChange} />
          </label>
          <label>
            <input type="number" name="input4" value={form1Values.input4} onChange={handleForm1InputChange} />
          </label>
          <label>
            <input type="number" name="input5" value={form1Values.input5} onChange={handleForm1InputChange} />
          </label>
        </div>
        <button type="submit">Submit Form</button>
      </form>

      <form>
        <p>Average: {average1}</p>
        <p>Sorted Order: {order1.join(", ")}</p>
      </form>
    </div>
  );
};

export default FormComponent;
