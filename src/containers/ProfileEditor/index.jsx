import { Formik } from "formik";
import React from "react";
import FormGroup from "../../components/FormGroup";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

function ProfileEditor() {
  return (
    <div className="p-10">
      <Formik
        initialValues={{
          name: "",
          userName: "",
          job: "",
          email: "",
          mobile: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form className="" onSubmit={handleSubmit}>
            <FormGroup title={"Name"}>
              <TextField
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
            </FormGroup>
            <FormGroup title={"User Name"}>
              <TextField
                type="text"
                name="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
              />
              {errors.userName && touched.userName && errors.userName}
            </FormGroup>
            <FormGroup title={"Job"}>
              <TextField
                type="text"
                name="job"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.job}
              />
              {errors.job && touched.job && errors.job}
            </FormGroup>
            <FormGroup title={"Email"}>
              <TextField
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </FormGroup>
            <FormGroup title={"Mobile"}>
              <TextField
                type="text"
                name="mobile"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile}
              />
              {errors.mobile && touched.mobile && errors.mobile}
            </FormGroup>
            <Button className={"mt-10"}>Update</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ProfileEditor;
