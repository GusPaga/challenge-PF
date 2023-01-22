import right from "../images/right.svg";
import left from "../images/left.svg";
import { icons } from "../Assets/support";

export const ImageBar = ({ handleFront, handleBack, value }) => {
  return (
    <div id="app" className="container">
      <div className="row">
        <div className="d-flex flex-row justify-content-center align-items-center">
          {/* BUTTON BACK */}
          <div>
            <button
              type="button"
              className="buttons btn btn-sm rounded-circle mx-3"
              onClick={(e) => handleBack(e)}
            >
              <img src={left} alt="back" />
            </button>
          </div>
          {/* BUTTON BACK */}
          {console.log(value)}

          {/* COMPONETS LOGO */}
          <div className="d-flex flex-row component">
            {icons?.map((e) => {
              return (
                <div
                  className={
                    value === e.id
                      ? "col-4 mx-3 select"
                      : "col-4 mx-3 logo opacity-50"
                  }
                  key={e.id}
                >
                  <img src={e.img} alt={e.name} />
                </div>
              );
            })}
          </div>
          {/* COMPONETS LOGO */}

          {/* BUTTON FRONT */}
          <div>
            <button
              type="button"
              className="buttons btn btn-sm rounded-circle mx-3"
              onClick={(e) => handleFront(e)}
            >
              <img src={right} alt="back" />
            </button>
          </div>
          {/* BUTTON FRONT */}
        </div>
      </div>
    </div>
  );
};
