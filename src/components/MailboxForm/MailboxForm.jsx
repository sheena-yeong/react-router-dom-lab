import { useState } from "react";

function MailboxForm({ addBox }) {
  const [formData, setFormData] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.boxOwner || !formData.boxSize) return
    addBox(formData);
    setFormData({ boxOwner: "", boxSize: "Select Size" });
  }

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <p>Enter a Boxholder:</p>
        <input
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
        />

        <p>Select a Box Size:</p>
        <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option selected disabled>Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button>Submit</button>
      </form>
    </>
  );
}

export default MailboxForm;
