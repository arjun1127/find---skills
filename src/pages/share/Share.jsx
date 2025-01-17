import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeacherShareTechnologies.css'; // Minimal custom CSS for specific needs

const TeacherShareTechnologies = () => {
  const [technologyData, setTechnologyData] = useState([]);
  const [techName, setTechName] = useState('');
  const [techDescription, setTechDescription] = useState('');
  const [techImage, setTechImage] = useState(null);

  // Handle form submission to add new technology
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!techName || !techDescription || !techImage) {
      alert('Please fill out all fields.');
      return;
    }

    const newTechnology = {
      name: techName,
      description: techDescription,
      image: URL.createObjectURL(techImage), // Convert image file to a URL
    };

    setTechnologyData([...technologyData, newTechnology]);
    setTechName('');
    setTechDescription('');
    setTechImage(null);
  };

  return (
    <div className="teacher-share container py-4">
      <h3 className="text-center mb-4">Share a Technology</h3>

      {/* Technology Sharing Form */}
      <div className="mb-4">
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
            <label htmlFor="techDescription" className="form-label">Technology Description</label>
            <textarea
              id="techDescription"
              className="form-control"
              rows="3"
              value={techDescription}
              onChange={(e) => setTechDescription(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="techImage" className="form-label">Technology Image</label>
            <input
              type="file"
              id="techImage"
              className="form-control"
              accept="image/*"
              onChange={(e) => setTechImage(e.target.files[0])}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Share Technology</button>
        </form>
      </div>

      {/* Shared Technologies */}
      <div className="technologies-section">
        <h4 className="text-center mb-4">Shared Technologies</h4>
        <div className="row">
          {technologyData.map((tech, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <img src={tech.image} alt={tech.name} className="card-img-top tech-image" />
                <div className="card-body">
                  <h5 className="card-title">{tech.name}</h5>
                  <p className="card-text">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherShareTechnologies;
