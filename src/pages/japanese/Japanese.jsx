import LearnBasics from "./learnBasics";
import FrameSentences from "./frameSentences";

const Japanese = () => {
  return (
    <div className="container my-4 japanese-container">
      <h2 className="text-center mb-4 japanese-heading">
        Learn Japanese <span className="highlight">Effectively</span>
      </h2>
      <ul className="nav nav-tabs" id="japaneseTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="learnBasics-tab"
            data-bs-toggle="tab"
            data-bs-target="#learnBasics"
            type="button"
            role="tab"
            aria-controls="learnBasics"
            aria-selected="true"
          >
            Learn Basics
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="frameSentences-tab"
            data-bs-toggle="tab"
            data-bs-target="#frameSentences"
            type="button"
            role="tab"
            aria-controls="frameSentences"
            aria-selected="false"
          >
            Frame Sentences
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3" id="japaneseTabsContent">
        <div
          className="tab-pane fade show active"
          id="learnBasics"
          role="tabpanel"
          aria-labelledby="learnBasics-tab"
        >
          <LearnBasics />
        </div>
        <div
          className="tab-pane fade"
          id="frameSentences"
          role="tabpanel"
          aria-labelledby="frameSentences-tab"
        >
          <FrameSentences />
        </div>
      </div>
    </div>
  );
};

export default Japanese;
