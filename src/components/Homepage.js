import { useNavigate } from "react-router-dom";

export const Homepage = ({ value, setValue }) => {
  const navigate = useNavigate();

  const re = /^[A-Za-z]+$/;

  const hadleSubmit = (e) => {
    e.preventDefault();
    if (re.test(value)) {
      navigate("/game");
    } else alert("Only English letters allowed!");
  };

  return (
    <div>
      <p className="center-text">
        Before you can continue please enter your name.
      </p>
      <p className="center-text font-xs">
        No white space, only English letters allowed!
      </p>
      <form onSubmit={hadleSubmit}>
        <div className="form-field-container">
          <input
            value={value}
            minLength={1}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
