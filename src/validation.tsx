
import './validation.css';
// import { RiUploadCloudFill } from "react-icons/ri";
// import { ImCloudUpload } from "react-icons/im";

// import logo from './42.jpeg'

function FunctionValidationForm()
{
  return (
    <section className="container forms " >
      <div className="container2">
        <div className="list1">
          <div className="form login">
            <div className="form-content">
              <header >
                Account Info
              </header>
              <div className="user-img">
                <img id="photo"/>
                <input type="file" id="file"/>
                {/* <ImCloudUpload /> */}
                <label htmlFor="file" id="uploadbtn">
                </label>
              </div>
              <form action="#">
                <div className="field input-field">
                  <input type="text" placeholder="FullName" className="input" />
                </div>
                <div className="field input-field">
                  <input type="text" placeholder="NickName" className="password" />
                </div>
                <div className="field input-field">
                  <input type="text" placeholder="NickName" className="password" />
                </div>
                <div className="field button-field Sp">
                  <button className='Sp' style={{fontWeight: 'bold'}} >Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FunctionValidationForm;