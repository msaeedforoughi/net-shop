import { useLoginContext } from "../../contexts/LoginContext";
import Container from "../../components/layoutComponents/container/Container";
import Button from "../../components/layoutComponents/button/Button";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../validations/loginValidation";
import Heading from "../../components/layoutComponents/heading/Heading";
import Flex from "../../components/layoutComponents/flex/Flex";

function Login() {
  const { handleLogin } = useLoginContext();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleLogin(values.username, values.password);
      setSubmitting(false);
    },
  });

  return (
    <div>
      <Container>
        <Flex className="flex flex-col justify-center items-center h-[700px] bg-gray-100">
          <div className="md:w-[700px] w-[400px]  p-4 bg-white rounded-md shadow-md">
            <Heading heading="Login" className="text-center mb-4" />
            <form onSubmit={formik.handleSubmit} className="lex flex-col">
              <div className="flex flex-col mb-4">
                <label className="text-lg font-semibold mb-2">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter username"
                  className="w-full p-2 pl-10 placeholder:font-normal placeholder:text-sm text-gray-700 outline-none focus:border-black border-b-2"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500">{formik.errors.username}</div>
                ) : null}
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-lg font-semibold mb-2">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter password"
                  className="w-full p-2 pl-10 placeholder:font-normal placeholder:text-sm text-gray-700 outline-none focus:border-black border-b-2"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="flex justify-center my-4">
                <Link to="">
                  <p className="text-gray-300 hover:text-blue-700 ">
                    forget your password?
                  </p>
                </Link>
              </div>
              <div className="flex justify-center my-4">
                <Link to="/register">
                  <p className="text-gray-300 hover:text-blue-700 ">
                    create account
                  </p>
                </Link>
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  variant="warning"
                  className="flex justify-center"
                  disabled={formik.isSubmitting}
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Login;
