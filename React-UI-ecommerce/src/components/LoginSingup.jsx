import { Container} from "react-bootstrap";
// import {useFormik} from "Formik";
// const initialValues = {
//   name:"",
//   email:"",
//   password:"",
//   confirmPassword:"",
// };
const LoginSingup = () => {

// const formik = useFormik({
//     initialValues : initialValues,
//     onsubmit : (values) =>{
//       console.log(values);  

//     },
//   });
//   console.log(formik);
  return (
    <>
      <Container >
     
  
    
      <div class="row  justify-content-center  mt-4 mb-4 ">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class=" p-3 shadow">
            
              <h2 class="text-uppercase text-center mb-3">Create an account</h2>

              <form>

                <div class=" mb-2">
                <label class="form-label" for="enterName">Your Name</label>
                  <input type="text" id="enterName" name = "name" class="form-control form-control-md"  />
                  
                </div>

                <div class=" mb-2">
                <label class="form-label" for="email">Your Email</label>
                  <input type="email" id="email" name = "email" class="form-control form-control-md" />
                  
                </div>

                <div class=" mb-2">
                <label class="form-label" for="password">Password</label>
                  <input type="password" id="password" name = "password" class="form-control form-control-md" />
                 
                </div>

                <div class=" mb-2">
                <label class="form-label" for="confirmPassaword">Confirm password</label>
                  <input type="password" id="confirmPassaword" name = "confirmPassword" class="form-control form-control-md" />
                  
                </div>

                <div class="form-check d-flex justify-content-center mb-3">
                  <input class="form-check-input me-2" type="checkbox" value="" />
                  <label class="form-check-label">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class=" d-flex justify-content-center">
                  <button type="button"
                    class="btn border-0 bg-primary bg-gradient text-white btn-lg ps-5 pe-5">Register</button>
                </div>

                <p class="text-center text-muted mt-3 ">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>
          </div>
        </div>
      </div>
   
  

      </Container>
    </>
  );
};
export default LoginSingup;
