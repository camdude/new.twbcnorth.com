import React from "react";

import { useForm } from "../hooks/useForm";
import MainLayout from "../layouts/MainLayout";
import Text from "../components/UIElements/Text";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import {
  RULE_VALIDATOR_REQUIRED,
  RULE_VALIDATOR_EMAIL
} from "../components/FormElements/validate";

const Register = () => {
  const [formState, inputHandler] = useForm({
    first_name: {
      value: "",
      isValid: false
    },
    last_name: {
      value: "",
      isValid: false
    },
    email: {
      value: "",
      isValid: false
    },
    phone: {
      value: "",
      isValid: false
    },
    church: {
      value: "",
      isValid: false
    },
    payment: {
      value: ""
    },
    diet: {
      value: ""
    },
    comment: {
      value: "",
      isValid: false
    }
  });

  const onRegisterSubmit = event => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <MainLayout>
      <section className="section">
        <Text element="h1">Conference Registration</Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab magni
          praesentium ut nihil. Eius corrupti facilis nisi dignissimos esse sed,
          vel, fuga quas ipsum accusantium maiores incidunt! Excepturi, quas
          necessitatibus.
        </Text>
      </section>
      <div className="register">
        <form className="register__form" onSubmit={onRegisterSubmit}>
          <Text element="h3">Register</Text>
          <Input
            id="first_name"
            type="text"
            placeholder="First Name"
            label="First Name"
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
            errorMsg="Please enter your first name."
          />
          <Input
            id="last_name"
            type="text"
            placeholder="Last Name"
            label="Last Name"
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
            errorMsg="Please enter your last name."
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
            id="phone"
            type="tel"
            placeholder="Phone"
            label="Phone"
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
            errorMsg="Please enter a valid phone number."
          />
          <Input
            id="church"
            type="text"
            placeholder="Church"
            label="Church"
            initialValid={true}
            onInput={inputHandler}
          />
          <Input
            id="payment"
            element="select"
            label="Payment"
            options={["Direct Deposit", "Cheque", "Cash"]}
            initialValid={true}
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
          />
          <Input
            id="diet"
            element="select"
            label="Special Diet"
            options={["None", "Gluten Free", "Vegetarian"]}
            initialValid={true}
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
          />
          <Input
            id="comment"
            element="textarea"
            placeholder="Comment (optional)"
            label="Comment"
            initialValid={true}
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isFormValid}>
            Register
          </Button>
        </form>
        <div className="register__side">
          <Text element="h3">Prices</Text>
          <ul className="list">
            <li className="list__item">
              <span className="u-bold-text">Early Bird:</span> $30 before June
              10
            </li>
            <li className="list__item">
              <span className="u-bold-text">Standard:</span> $35 between 11-23
              June
            </li>
            <li className="list__item">
              <span className="u-bold-text">Last Minute:</span> $40 from June 24
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
