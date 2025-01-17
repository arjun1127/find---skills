import Articles from "./Articles";
import Codes from "./Codes";
import Languages from "./Languages";
import AiMl from "./AiMl";
const Programming = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Programming</h2>
      <ul className="nav nav-tabs" id="programmingTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="articles-tab"
            data-bs-toggle="tab"
            data-bs-target="#articles"
            type="button"
            role="tab"
            aria-controls="articles"
            aria-selected="true"
          >
            Articles
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="ai-ml-tab"
            data-bs-toggle="tab"
            data-bs-target="#ai-ml"
            type="button"
            role="tab"
            aria-controls="ai-ml"
            aria-selected="false"
          >
            AI-ML
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="codes-tab"
            data-bs-toggle="tab"
            data-bs-target="#codes"
            type="button"
            role="tab"
            aria-controls="codes"
            aria-selected="false"
          >
            Codes
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="languages-tab"
            data-bs-toggle="tab"
            data-bs-target="#languages"
            type="button"
            role="tab"
            aria-controls="languages"
            aria-selected="false"
          >
            Languages
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3" id="programmingTabsContent">
        <div
          className="tab-pane fade show active"
          id="articles"
          role="tabpanel"
          aria-labelledby="articles-tab"
        >
          <Articles />
        </div>
        <div
          className="tab-pane fade"
          id="ai-ml"
          role="tabpanel"
          aria-labelledby="ai-ml-tab"
        >
          <AiMl />
        </div>
        <div
          className="tab-pane fade"
          id="codes"
          role="tabpanel"
          aria-labelledby="codes-tab"
        >
          <Codes />
        </div>
        <div
          className="tab-pane fade"
          id="languages"
          role="tabpanel"
          aria-labelledby="languages-tab"
        >
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default Programming;
