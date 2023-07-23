import React from 'react';
import { Formik, Field, Form } from 'formik';
import { InputMask } from 'react-input-masked';
import './form.css'; // Import the CSS file

const initialValues = {
  text: '',
  select: '',
  multiSelect: [],
  toggle: false,
  radio: '',
  checkbox: false,
  date: '',
  dateRange: {
    startDate: '',
    endDate: '',
  },
  inputMask: '',
  phone: '',
  images: [],
  richEditor: '',
};

const handleSubmit = (values) => {
  // Handle form submission logic here
};

const YourForm = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="form-container">
        {/* Text Field */}
        <label htmlFor="text">Text Field</label>
        <Field type="text" id="text" name="text" />

        {/* Select Field */}
        <label htmlFor="select">Select Field</label>
        <Field as="select" id="select" name="select">
          <option value=""></option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Field>

        {/* MultiSelect Field */}
        <label htmlFor="multiSelect">MultiSelect</label>
        <Field as="select" id="multiSelect" name="multiSelect" multiple>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Field>

        {/* Toggle Input Field */}
        <label htmlFor="toggle">Toggle Input Field</label>
        <Field type="checkbox" id="toggle" name="toggle" />

        {/* Radio Button */}
        <label>Radio Button</label>
        <div>
          <label>
            <Field type="radio" name="radio" value="option1" />
            Option 1
          </label>
          <label>
            <Field type="radio" name="radio" value="option2" />
            Option 2
          </label>
          <label>
            <Field type="radio" name="radio" value="option3" />
            Option 3
          </label>
        </div>

        {/* Checkbox */}
        <label htmlFor="checkbox">Checkbox</label>
        <Field type="checkbox" id="checkbox" name="checkbox" />

        {/* DatePicker */}
        <label htmlFor="date">DatePicker</label>
        <Field type="text" id="date" name="date" />

        {/* DateRange Picker */}
        <label>DateRange Picker</label>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <Field type="text" id="startDate" name="dateRange.startDate" />

          <label htmlFor="endDate">End Date</label>
          <Field type="text" id="endDate" name="dateRange.endDate" />
        </div>

        {/* InputMask */}
        <label htmlFor="inputMask">Input Mask (DD-MM-YYYY)</label>
        <Field
          type="text"
          id="inputMask"
          name="inputMask"
          placeholder="DD-MM-YYYY"
          maxLength="10"
        />

        {/* PhoneInput */}
        <label htmlFor="phone">Phone Input</label>
        <Field
          render={({ field }) => (
            <InputMask
              mask="+99 (999) 999-9999"
              value={field.value}
              onChange={field.onChange}
            >
              {(inputProps) => (
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  {...inputProps}
                />
              )}
            </InputMask>
          )}
        />

        {/* Images Dropzone */}
        <label htmlFor="images">Images Dropzone</label>
        <Field type="file" id="images" name="images" multiple />

        {/* Rich Editor */}
        <label htmlFor="richEditor">Rich Editor</label>
        <Field
          as="textarea"
          id="richEditor"
          name="richEditor"
          placeholder="Enter text"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YourForm;
