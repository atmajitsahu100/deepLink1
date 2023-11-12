import { React, useState } from "react";
import axios from "axios";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

const SkillDetails = ({ userData, setUserData }) => {
  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newSkill, setNewSkill] = useState({
    name: "",
    level: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewSkill((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddSkill = async() => {
    if (newSkill.name === "" || newSkill.level === "") return;
    setUserData((prev) => ({
      ...prev,
      skill: [...prev.skill, newSkill],
    }));

    const response = await axios.put("http://localhost:4000/updateSkill",{
      userId: userData._id,
      skillName: newSkill.skillName,
      lavel: newSkill.level,
    })
    console.log(response.data);
    console.log(newSkill.name);
  };

  return (
    <div className="Skill-details details">
      {!showForm && (
        <>
          <div className="edit-details">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
              onClick={() => {
                setShowForm(true);
              }}
            >
              <AddCircleIcon />
            </svg>
          </div>
          <div className="form-container">
            <div className="Skill-info-section">
              <h4>Add Skill</h4>
            </div>
          </div>
        </>
      )}

      {showForm && (
        <>
          <div className="edit-details">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
              onClick={() => {
                setShowForm(false);
              }}
            >
              <CancelIcon />
            </svg>
          </div>
          <div className="edit-details">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
              onClick={() => {
                if (isEditMode) {
                  handleAddSkill();
                }
                setIsEditMode(!isEditMode);
              }}
            >
              {!isEditMode && <EditIcon />}
              {isEditMode && <SaveIcon />}
            </svg>
          </div>
          <div className="form-container">
            <form action="">
              <div className="Skill-info-section">
                <h4>Add Skill</h4>
                <div className="form-row">
                  <div className="form-data">
                    <label htmlFor="skill_name">Skill Name</label>
                    <input
                      type="text"
                      name="name"
                      value={newSkill.name}
                      onChange={handleChange}
                      disabled={!isEditMode}
                      required
                    />
                  </div>
                  <div className="form-data">
                    <label htmlFor="skill_level">Skill Level</label>
                    <select
                      name="level"
                      onChange={handleChange}
                      value={newSkill.level}
                      disabled={!isEditMode}
                      required
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="all-educations">
            {/* {userData.skill.map((skl, index) => (
              <div key={index} style={{ border: "1px solid black" }}>
                <h5>Skill: {skl.name}</h5>
                <p>Level: {skl.level}</p>
              </div>
            ))} */}
          </div>
        </>
      )}
    </div>
  );
};

export default SkillDetails;