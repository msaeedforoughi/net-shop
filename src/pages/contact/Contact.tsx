import Container from "../../components/layoutComponents/container/Container";
import { useFormik } from "formik";
import { contactSchema } from "../../validations/contactValidation";
import { IContactFormValues } from "../../types/contact";
import Button from "../../components/layoutComponents/button/Button";
import Heading from "../../components/layoutComponents/heading/Heading";
import Flex from "../../components/layoutComponents/flex/Flex";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    } as IContactFormValues,
    validationSchema: contactSchema,
    onSubmit: (
      values: IContactFormValues,
      { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
      // Make API call or send email here
      console.log(values);
      setSubmitting(false);
    },
  });

  return (
    <div>
      <Container>
        <Flex className="flex flex-col justify-center items-center h-screen bg-gray-100">
          <div className="md:w-[700px] w-[400px]  p-4 bg-white rounded-md shadow-md">
            <Heading heading="Contact us" className="text-center mb-4" />
            <form onSubmit={formik.handleSubmit} className="flex flex-col">
              <div className="flex flex-col mb-4">
                <label className="text-lg font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter name"
                  className="w-full p-2 pl-10 placeholder:font-normal placeholder:text-sm text-gray-700 outline-none focus:border-black border-b-2"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter email"
                  className="w-full p-2 pl-10 placeholder:font-normal placeholder:text-sm text-gray-700 outline-none focus:border-black border-b-2"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-lg font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter message"
                  className="w-full h-24 p-2 pl-10 placeholder:font-normal placeholder:text-sm text-gray-700 outline-none focus:border-black border-b-2 resize-none"
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={formik.isSubmitting}
                  variant="primary"
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >
                  {formik.isSubmitting ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Contact;
