import './hero.css';
const Hero = () => {
 

  return (
    <div 
      className="bg-dark text-white py-5" 
      style={{ 
        backgroundImage: 'url(study_hero.jpeg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 animate-fadeIn text-dark"><b>Find @ Skills</b></h1>
        <p className="lead animate-slideIn text-dark ">
          Connect with experts and master your desired skills through documentation, live interactions, or AI.
        </p>
        <button 
          className="btn btn-outline-success btn-lg mt-3 animate-bounce" 
          data-bs-toggle="modal" 
          data-bs-target="#signupModal"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
