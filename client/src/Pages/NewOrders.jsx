import { SideBar } from "../Components/SideBar";
import "./NewOrders.css"
import React, { useState, useRef } from "react";
import "./NewOrders.css";
import { getDatabase, ref, set } from "firebase/database"; // Realtime Database
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase Storage
import { v4 as uuidv4 } from "uuid";


export function NewOrders() {
  const [startDate, setStartDate] = useState("");
  const [isImmediate, setIsImmediate] = useState(false);
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null); 
  const handleDateChange = (e) => {
    if (!isImmediate) setStartDate(e.target.value);
  };

  const handleImmediateChange = () => {
    setIsImmediate(!isImmediate);
    if (!isImmediate) {
      setStartDate("Immediate");
    } else {
      setStartDate(""); 
    }
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const db = getDatabase(); 
      const jobId = uuidv4(); 
      let photoURL = null;

      if (photo) {
        const storage = getStorage();
        const photoRef = storageRef(storage, `jobPhotos/${uuidv4()}-${photo.name}`);
        await uploadBytes(photoRef, photo);
        photoURL = await getDownloadURL(photoRef);
      }

      await set(ref(db, "jobs/" + jobId), {
        jobType,
        startDate: isImmediate ? "Immediate" : startDate,
        description,
        photoURL,
        timestamp: new Date().toISOString(),
      });

      console.log("Job saved!");

      setJobType("");
      setStartDate("");
      setDescription("");
      setPhoto(null);
      setIsImmediate(false);
      fileInputRef.current.value = ""; 

    } catch (error) {
      console.error("Error saving job: ", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container">
      <SideBar />
      <form onSubmit={handleSubmit}>
        <h1>Create a Job</h1>
        <div>
          <label>Job Type:</label>
          <input
            type="text"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={handleDateChange}
            disabled={isImmediate}
          />
          <label>
            <input
              type="checkbox"
              checked={isImmediate}
              onChange={handleImmediateChange}
            />
            Start Immediately
          </label>
        </div>

        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Upload Photo (optional):</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}
