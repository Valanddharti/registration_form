import { useState, useEffect } from "react";
import "./App.css";

const App=()=>{
  const [isFan, setFan] = useState(false);
  const initialValues = ({});
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "lastname is required!";
    }
    if (!values.username) {
      errors.username = "username is required!";
    }

    if (!values.email) {
      errors.email = "email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="loginBox rounded-4 position-relative pt-1 pb-5 rounded-4 d-flex flex-column">
         <div className='max-w-md w-full mx-auto mt-2 p-8'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
      <div className="text-center rounded-5 bg-black p-1 mt-4 d-flex w-auto">
        <button type='button' onClick={()=>setFan(true)}  className={`rounded-5 bg-black text-light customButton ${isFan && 'telent_signup'}`}>
            FAN SIGNUP
        </button>
        <button type='button' onClick={()=>setFan(false)} className={`rounded-5 bg-black text-light customButton ${!isFan && 'telent_signup'}`}>
            TALENT SIGNUP
        </button>
    </div>
    <isFan label={`${isFan ? 'Fan' : 'Talent'}`} />
    <div className="d-flex flex-column">
      <div className="create_your_fan_account form-control-lg text-white text-gray-900 mt-4 mb-4 text-center">
        Create Your Fan Account
      </div>

          <div className="field">
            <label className='name_font m-2 text-white'>First Name *</label>
            <input
              type="text"
              name="firstname"
              className="border_box rounded-5 w-100 text-light bg-transparent p-2 mb-4 "
              placeholder="Firstname"
              value={formValues.firstname}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger">{formErrors.firstname}</p>

          <div className="field">
          <label className='name_font m-2 text-white'>Last Name *</label>
            <input
              type="text"
              name="lastname"
              className="border_box rounded-5 w-100 text-light bg-transparent p-2 mb-4 "
              placeholder="Lastname"
              value={formValues.lastname}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger">{formErrors.lastname}</p>

          <div className="field">
            <label className='name_font m-2 text-white'>username *</label>
            <input
              type="text"
              name="username"
              className="border_box rounded-5 w-100 text-light bg-transparent p-2 mb-4 "
              placeholder="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger">{formErrors.username}</p>

          <div className="field">
          <label className='name_font m-2 text-white'>Email *</label>
            <input
              type="text"
              name="email"
              className="border_box rounded-5 w-100 text-light bg-transparent p-2 mb-4"
              placeholder="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger">{formErrors.email}</p>

          <div className="field">
          <label className='name_font m-2 text-white'>Password *</label>
            <input
              type="password"
              name="password"
              className="border_box rounded-5 w-100 text-light bg-transparent p-2 mb-4"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger">{formErrors.password}</p>

      <div className="text-center">
      <form action="/action_page.php">
        <input type="checkbox"name="agree" class="mx-2"/>
        <label for="check">
          <div className='last_text text-light text-center mt-3'>
            I agree to the<br className="d-block d-sm-none"/>
            <span className="terms_and_conditions color-black p-2 text-dark">Terms and Conditions.</span>
          </div>
        </label>
      </form>
      <button className="telent_signup mt-4 color-dark rounded-5 p-2 mx-2 text-dark me-sm-0">SIGN UP</button>
      </div>
        </div>

      </form>
    </div>
    </div>
  );
}
export default App;
