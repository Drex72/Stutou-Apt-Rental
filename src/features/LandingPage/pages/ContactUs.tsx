import React from "react";
import { motion } from "framer-motion";
import ContactUsImage from "../../../assets/images/contact-us-image.png";
import "../styles/contact_us_styles.scss";
import Button from "../../../components/Button/Button";
import { useForm } from "../../../hooks/useForm";
import { emailValidator } from "../../../utils/validators/emailValidator";
import { emptyValidator } from "../../../utils/validators/emptyValidator";
import { nameValidator } from "../../../utils/validators/nameVaildator";
import Input, { TextArea } from "../../../components/form/Input/Input";
import LandingPageNavbar from "../../../layouts/LandingPageLayout/LandingPageNavbar/LandingPageNavbar";
interface ContactUsInput {
  email: string;
  name: string;
  message: string;
}
export const ContactUs = () => {
  const contactUsForm = useForm<ContactUsInput>(
    {
      email: "",
      name: "",
      message: "",
    },
    {
      email: emailValidator,
      name: nameValidator,
      message: emptyValidator,
    }
  );

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    const itemKey = name as keyof ContactUsInput;

    contactUsForm.onChange(itemKey, value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <LandingPageNavbar heroPage={false} sidebarOpened={false} openSideBar={() => console.log('hey')} />
      <motion.div className="mb_contact_us">
        <div className="mb_contact_us_content_wrapper">
          <motion.div className="mb_contact_us_content_wrapper-left">
            <motion.img
              src={ContactUsImage}
              alt="bg"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            />
          </motion.div>
          <motion.div
            className="mb_contact_us_content_wrapper-right"
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <h2 className="mb_contact_us_content_wrapper-right_header">
              Get in Touch
            </h2>

            <motion.form
              className="mb_contact_us_content_wrapper-right_form"
              onSubmit={handleSubmit}
              initial="initial"
              animate="animate"
            >
              <div className="inputs">
                <Input
                  id="Name"
                  label="Name"
                  error={contactUsForm.formErrors.name}
                  inputClassName="contact_us_input_field"
                  inputProps={{
                    name: "name",
                    placeholder: "Enter your Name",
                    value: contactUsForm.form.name,
                    onChange: handleChange,
                  }}
                />

                <Input
                  id="email"
                  label="Email Address"
                  error={contactUsForm.formErrors.email}
                  inputClassName="contact_us_input_field"
                  inputProps={{
                    name: "email",
                    placeholder: "Enter your email address",
                    value: contactUsForm.form.email,
                    onChange: handleChange,
                  }}
                />

                <TextArea
                  id="message"
                  label="Message"
                  error={contactUsForm.formErrors.message}
                  inputClassName="contact_us_input_field"
                  textareaProps={{
                    placeholder: "Leave a Message",
                    value: contactUsForm.form.message,
                    onChange: handleChange,
                    name: "message",
                  }}
                />
              </div>

              <div style={{ height: 16 }} />

              <Button
                variant="contained"
                label={"Send Message"}
                buttonClassName="contact_us_button"
              />
            </motion.form>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
};
