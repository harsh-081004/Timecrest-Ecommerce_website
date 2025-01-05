import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./edit.css";

const EditWatchForm = ({ watch, onSave, onClose, url }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    // Add other fields based on your schema
  });

  // Populate the form data when the watch prop changes
  useEffect(() => {
    if (watch) {
      setFormData({
        name: watch.name || "",
        price: watch.price || 0,
        description: watch.description,
        id: watch.id || 0,
        // Add other fields as necessary
      });
    }
  }, [watch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure formData contains necessary fields
    if (!formData.name || formData.price <= 0) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Call the onSave function passed from the parent component
    try {
      await onSave({
        watchId: watch._id, // Ensure watchId is included here
        updatedData: formData, // This should include name, price, etc.
      });
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error while updating watch:", error);
      toast.error("An error occurred while updating the watch.");
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Edit watch</h2>
        <br></br>
        <label>
          Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="form"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <input type="hidden" name="id" value={formData.id} id="" />
        <br></br>
        <br></br>
        <label>
          <span className="des">description:&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <textarea
            className="textarea"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <input type="hidden" name="id" value={formData.id} id="" />
        <br></br>
        <br></br>
        <label>
          Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="form"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
        <br></br>
        <br></br>
        <button type="submit" className="update">
          Update
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="close" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditWatchForm;
