import VLSI from "./vlsi";
import Embedded from "./embedded";
import IoT from "./iot";
import Communications from "./communication";
import Articles from "./Articles";

const ElectronicsPage = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Electronics</h2>
      <ul className="nav nav-tabs" id="electronicsTabs" role="tablist">
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
            id="vlsi-tab"
            data-bs-toggle="tab"
            data-bs-target="#vlsi"
            type="button"
            role="tab"
            aria-controls="vlsi"
            aria-selected="false"
          >
            VLSI
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="embedded-tab"
            data-bs-toggle="tab"
            data-bs-target="#embedded"
            type="button"
            role="tab"
            aria-controls="embedded"
            aria-selected="false"
          >
            Embedded
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="iot-tab"
            data-bs-toggle="tab"
            data-bs-target="#iot"
            type="button"
            role="tab"
            aria-controls="iot"
            aria-selected="false"
          >
            IoT
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="communications-tab"
            data-bs-toggle="tab"
            data-bs-target="#communications"
            type="button"
            role="tab"
            aria-controls="communications"
            aria-selected="false"
          >
            Communications
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3" id="electronicsTabsContent">
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
          id="vlsi"
          role="tabpanel"
          aria-labelledby="vlsi-tab"
        >
          <VLSI />
        </div>
        <div
          className="tab-pane fade"
          id="embedded"
          role="tabpanel"
          aria-labelledby="embedded-tab"
        >
          <Embedded />
        </div>
        <div
          className="tab-pane fade"
          id="iot"
          role="tabpanel"
          aria-labelledby="iot-tab"
        >
          <IoT />
        </div>
        <div
          className="tab-pane fade"
          id="communications"
          role="tabpanel"
          aria-labelledby="communications-tab"
        >
          <Communications />
        </div>
      </div>
    </div>
  );
};

export default ElectronicsPage;
