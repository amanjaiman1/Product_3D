import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import FormGroup from "../../components/FormGroup";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./../../firebase/firebase";
function ProfileEditor() {
  const [userInfo, setuserInfo] = useState({
    loading: true,
    data: null,
  });
  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
      setuserInfo({ data: userInfo, loading: false });
    };
    getUserInfo();
    console.log(userInfo);
  }, []);

  return userInfo.loading ? (
    <h1>Loading..</h1>
  ) : (
    <div className="p-10">
      <Formik
        initialValues={{
          ...userInfo.data,
        }}
        onSubmit={async (values) => {
          try {
            console.log(values);
            const docRef = doc(db, "users", values.uid);
            await updateDoc(docRef, { ...values });
            localStorage.setItem("userInfo", JSON.stringify(values));
            alert("Success Fully Updated");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form className="" onSubmit={handleSubmit}>
            <FormGroup title={"User Name"}>
              <TextField
                type="text"
                name="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
              {errors.fullName && touched.fullName && errors.fullName}
            </FormGroup>
            <FormGroup title={"Job"}>
              <TextField
                type="text"
                name="job"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.job}
              />
              {errors?.job && touched?.job && errors?.job}
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
            <Button className={"mt-10 text-white"}>Update</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ProfileEditor;
