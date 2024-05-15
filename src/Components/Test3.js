import React, {useState} from "react";

function Test3() {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [message, setMessage] = useState(0);

    let calcBmi = (e) => {
        e.preventDefault();
        if (weight === 0 || height === 0) {
            alert('Please enter a valid Weight and Height')
        }
        else {
            let bmi = (weight / (height * height) * 703);
            setBmi(bmi.toFixed(1))
            
            if (bmi < 25) {
                setMessage("You are Underweight");
            }
            
            else if (bmi >= 25 && bmi < 30) {
                setMessage("You are a Halthy weight")
            }
            
            else {
                setMessage("You are Overweigth")
            }
        }
    }

    let reload = () => {
        window.location.reload();
    }

    return (
      <>
        <div className="main">
          <div className="container">
            <h2>BMI Calculator</h2>
            <form onSubmit={calcBmi}>
              <div>
                <label>Weight (ibs)</label>
                <input
                  type="text"
                  placeholder="Enter Weight Value"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div>
                <label>Height (ibs)</label>
                <input
                  type="text"
                  placeholder="Enter Height Value"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div>
                <button className="btn" type="submit">
                  Submit
                </button>
                <button className="btn-2" type="submit" onClick={reload}>
                  Reload
                </button>
              </div>
              <div className="center">
                <h3>Your BMI is:{bmi}</h3>
                <p>{message}</p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}
export default Test3;
