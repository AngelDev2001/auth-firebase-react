import * as React from "react";
import { Form as FormRadix } from "radix-ui";
import "./Form.css";

function Form() {
  return (
    <FormRadix.Root className="FormRoot">
      <FormRadix.Field className="FormField" name="email">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <FormRadix.Label className="FormLabel">Email</FormRadix.Label>
          <FormRadix.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </FormRadix.Message>
          <FormRadix.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </FormRadix.Message>
        </div>
        <FormRadix.Control asChild>
          <input className="Input" type="email" required />
        </FormRadix.Control>
      </FormRadix.Field>
      <FormRadix.Field className="FormField" name="question">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <FormRadix.Label className="FormLabel">Question</FormRadix.Label>
          <FormRadix.Message className="FormMessage" match="valueMissing">
            Please enter a question
          </FormRadix.Message>
        </div>
        <FormRadix.Control asChild>
          <textarea className="Textarea" required />
        </FormRadix.Control>
      </FormRadix.Field>
      <FormRadix.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }}>
          Post question
        </button>
      </FormRadix.Submit>
    </FormRadix.Root>
  );
}

export default Form;
