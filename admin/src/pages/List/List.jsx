import React, { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import EditWatchForm from "../EditWatch/EditWatchForm";

const List = ({ url }) => {
  // const url="http://localhost:4000"
  const [list, setList] = useState([]);
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const fetchlist = async () => {
    const response = await axios.get(`${url}/api/watch/list`);
    console.log(response.data);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const removeWatch = async (watchId) => {
    console.log(watchId);
    const response = await axios.post(`${url}/api/watch/remove/`, {
      id: watchId,
    });
    await fetchlist();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };
  const openEditForm = (watch) => {
    setSelectedWatch(watch);
    setIsEditFormOpen(true);
  };
  const editWatch = async ({ watchId, updatedData }) => {
    // Destructure the parameters
    try {
      const response = await axios.post(`${url}/api/watch/edit`, {
        watchId, // This should be the watch ID
        updatedData, // This should contain the data to update
      });
      if (response.data.success) {
        toast.success(response.data.message || "watch updated successfully!");
        setIsEditFormOpen(false);
        await fetchlist(); // Refresh the list after updating
      } else {
        toast.error(response.data.message || "Error updating watch.");
      }
    } catch (error) {
      console.error("Error updating watch:", error);
      toast.error("An error occurred while updating the watch.");
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Watchs List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeWatch(item._id)} className="cursor">
                X
              </p>
              <p onClick={() => openEditForm(item)} className="cursor">
                <img className="edit" src={assets.edit} alt="" />
              </p>
            </div>
          );
        })}
      </div>
      {isEditFormOpen && selectedWatch && (
        <EditWatchForm
          watch={selectedWatch}
          onSave={editWatch}
          onClose={() => setIsEditFormOpen(false)}
          url={url}
        />
      )}
    </div>
  );
};
export default List;
