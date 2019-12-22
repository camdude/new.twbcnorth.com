import React, { useState } from "react";
import Recaptcha from "react-recaptcha";

import { useForm } from "../hooks/useForm";
import {
  RULE_VALIDATOR_REQUIRED,
  RULE_VALIDATOR_EMAIL
} from "../components/FormElements/validate";
import MainLayout from "../layouts/MainLayout";
import Text from "../components/UIElements/Text";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import CardContainer from "../components/UIElements/CardContainer";
import NotificationBar from "../components/UIElements/NotificationBar";

const Contact = () => {
  const [formState, inputHandler] = useForm({
    name: {
      value: "",
      isValid: false
    },
    email: {
      value: "",
      isValid: false
    },
    message: {
      value: "",
      isValid: false
    },
    recaptcha: {
      value: null,
      isValid: false
    }
  });
  const [showNotif, setShowNotif] = useState(false);

  const recaptchaLoaded = () => {
    inputHandler("recaptcha", "Loaded", false);
  };

  const recaptchaVerify = () => {
    inputHandler("recaptcha", null, true);
  };

  const onMessageSubmit = event => {
    event.preventDefault();
    console.log(formState);
    setShowNotif(true);
  };

  const closeNotifHandler = () => {
    setShowNotif(false);
  };

  return (
    <MainLayout>
      {showNotif && (
        <NotificationBar onClose={closeNotifHandler}>
          Thankyou for your message. We will try to contact you as soon as
          possible.
        </NotificationBar>
      )}

      <section className="section">
        <Text element="h1">Contact Us</Text>
        <Text>
          Do you have a question about the conference or need to get in touch
          with us? You can contact us through the following methods or fill out
          the form below. We will try to get back to you as soon as possible.
        </Text>
      </section>
      <section className="section">
        <div className="row">
          <div className="col-1-of-2">
            <Text element="h2">Contact Information</Text>
            <Text>
              Email:
              <Text element="a" href="mailto:twbcnorth@outlook.com">
                twbcnorth@outlook.com
              </Text>
            </Text>
            <Text>
              Phone:
              <Text element="a" href="tel:0422926053">
                0422 926 053
              </Text>
            </Text>
            <Text>
              Facebook:
              <Text element="a" href="https://www.facebook.com/twbcn/">
                @twbcn
              </Text>
            </Text>
          </div>
          <div className="col-1-of-2">
            <CardContainer>
              <form onSubmit={onMessageSubmit}>
                <Text element="h3">Get In Touch</Text>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  label="Name"
                  onInput={inputHandler}
                  rules={[RULE_VALIDATOR_REQUIRED]}
                  errorMsg="Please enter your name."
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                  onInput={inputHandler}
                  rules={[RULE_VALIDATOR_REQUIRED, RULE_VALIDATOR_EMAIL]}
                  errorMsg="Please enter a valid email."
                />
                <Input
                  id="message"
                  element="textarea"
                  placeholder="Message"
                  label="Message"
                  onInput={inputHandler}
                  rules={[RULE_VALIDATOR_REQUIRED]}
                  errorMsg="Please enter your message."
                />
                <Recaptcha
                  sitekey="6LdAMckUAAAAAMNpUDphJvfyzLuMgiXrg6roJULH"
                  render="explicit"
                  onloadCallback={recaptchaLoaded}
                  verifyCallback={recaptchaVerify}
                />
                <Button type="submit" disabled={!formState.isFormValid}>
                  Send
                </Button>
              </form>
            </CardContainer>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
