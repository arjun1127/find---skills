import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import { Modal } from "bootstrap";


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const cleanUpModal = () => {
    document.body.classList.remove("modal-open");
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
  };
const handlePostArticle = () => {
  if (newArticle.title && newArticle.content && newArticle.author) {
    setArticles([...articles, newArticle]);
    setNewArticle({ title: "", content: "", author: "" });

    // Close modal programmatically
    const modalElement = document.getElementById("postArticleModal");
    const modalInstance = Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }

    if(modalInstance){
      modalInstance.hide();
      cleanUpModal();
    }
  }
};


  return (
    <div className="container mt-4">
      <h4 className="mb-4">Programming Articles</h4>

      {/* Articles List */}
      <div>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div className="card mb-3" key={index}>
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.content}</p>
                <p className="text-muted">By {article.author}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No articles yet. Be the first to post one!</p>
        )}
      </div>

      {/* Post Button */}
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#postArticleModal"
      >
        Post Article
      </button>

      {/* Post Article Modal */}
      <div
        className="modal fade"
        id="postArticleModal"
        tabIndex="-1"
        aria-labelledby="postArticleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="postArticleModalLabel">
                Post a New Article
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={newArticle.title}
                    onChange={handleChange}
                    placeholder="Enter article title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Content
                  </label>
                  <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    value={newArticle.content}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Enter article content"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    Author
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    value={newArticle.author}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePostArticle}
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
