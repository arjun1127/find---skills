import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeacherShareTechnologies.css'; 

const TeacherShareTechnologies = () => {
  const [teachersData, setTeachersData] = useState([]);
  const [techName, setTechName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [teacherEmail, setTeacherEmail] = useState('');
  const [teacherBio, setTeacherBio] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [languageProficiency, setLanguageProficiency] = useState('');
  const [isTeacher,setTeacher]=useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!techName || !teacherName || !teacherEmail || !teacherBio || !profilePhoto || !specialization || !languageProficiency) {
      alert('Please fill out all fields.');
      return;
    }

    const newTeacher = {
      techName,
      teacherName,
      teacherEmail,
      teacherBio,
      profilePhoto,
      specialization,
      languageProficiency,
    };

    setTeachersData([...teachersData, newTeacher]);
    setTechName('');
    setTeacherName('');
    setTeacherEmail('');
    setTeacherBio('');
    setProfilePhoto('');
    setSpecialization('');
    setLanguageProficiency('');
    setTeacher(true);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="appContainer">
      <div className="container teacher-share-container py-4">
        <h3 className="text-center mb-4 japanese-heading">Become a Teacher</h3>

        {/* Teacher Details Form */}
        <div className="container mb-4 japanese-container">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="techName" className="form-label">Technology Name</label>
              <input
                type="text"
                id="techName"
                className="form-control"
                value={techName}
                onChange={(e) => setTechName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="teacherName" className="form-label">Your Name</label>
              <input
                type="text"
                id="teacherName"
                className="form-control"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="profilePhoto" className="form-label">Your Profile Photo</label>
              <input
                type="file"
                id="profilePhoto"
                className="form-control"
                onChange={handlePhotoChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="teacherEmail" className="form-label">Your Email</label>
              <input
                type="email"
                id="teacherEmail"
                className="form-control"
                value={teacherEmail}
                onChange={(e) => setTeacherEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="teacherBio" className="form-label">Short Bio</label>
              <textarea
                id="teacherBio"
                className="form-control"
                rows="3"
                value={teacherBio}
                onChange={(e) => setTeacherBio(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="specialization" className="form-label">Specialization</label>
              <input
                type="text"
                id="specialization"
                className="form-control"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="languageProficiency" className="form-label">Language Proficiency</label>
              <input
                type="text"
                id="languageProficiency"
                className="form-control"
                value={languageProficiency}
                onChange={(e) => setLanguageProficiency(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        {/* Displaying Submitted Teachers */}
        <div className="teachers-section">
          <h4 className="text-center mb-4">Our Teachers</h4>
          <div className="row">
            {teachersData.map((teacher, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100 text-center border-0 shadow-sm technology-card">
                  <div className="card-body">
                    <img src={teacher.profilePhoto} alt={teacher.teacherName} className="img-fluid rounded-circle mb-3" />
                    <h5 className="card-title">{teacher.teacherName}</h5>
                    <p className="card-text"><strong>Email:</strong> {teacher.teacherEmail}</p>
                    <p className="card-text"><strong>Technology:</strong> {teacher.techName}</p>
                    <p className="card-text"><strong>Bio:</strong> {teacher.teacherBio}</p>
                    <p className="card-text"><strong>Specialization:</strong> {teacher.specialization}</p>
                    <p className="card-text"><strong>Language Proficiency:</strong> {teacher.languageProficiency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {
          isTeacher && (
            <div className="live-classes-section text-center mt-4">
              <h4>Share Live Classes</h4>
              <button className="btn btn-success">Start a Live Class</button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default TeacherShareTechnologies;