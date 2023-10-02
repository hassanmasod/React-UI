import { Container } from "react-bootstrap";
const Login = () => {
  return (
    <>
      <div>
        <section>
          <Container className="mt-4 mb-4 ">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5 shadow ">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>

                  <button
                    className="btn btn-primary ps-5 pe-5 shadow "
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};
export default Login;
