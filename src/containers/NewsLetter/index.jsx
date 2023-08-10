import React, { useState } from "react";
import background from "../../assets/image/banner.webp";
import ReactiveButton from "reactive-button";
import sendImage from "../../assets/image/send2.gif";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/motion";
import axios from "axios";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
function NewsLetter() {
  const [buttonState, setButtonState] = useState("idle");
  const [email, setemail] = useState("");
  const onClickHandler = async () => {
    if (email == "") {
      alert("Email should not be empty");
      setButtonState("idle");
      return;
    }
    setButtonState("loading");
    const docRef = doc(db, "subscriber", email);
    const data = await getDoc(docRef);
    if (data.exists()) {
      alert("Already subscribed!");
      setButtonState("idle");
      return;
    }
    const response = await axios
      .post(`${import.meta.env.VITE_APP_BASEURL}/v1/mail/newsletter`, {
        email: email,
      })
      .catch((err) => console.log(err));
    console.log(response);
    if (response.status == "200") {
      alert("newsletter sent");
      await setDoc(docRef, { date: new Date().toUTCString() });
    } else {
      alert("News Letter not sent");
    }
    setButtonState("idle");
  };

  return (
    <div className="bg-cover bg-center m-10 border-2 rounded text-white py-20">
      <div className="rounded-2xl flex flex-col items-center  ">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="rounded-2xl flex flex-col items-center leading-14 text-center"
        >
          <h2 className="text-2xl font-bold text-[#7340e2] text-[2rem]">
            Sign up for our newsletter
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 0.2, delay: 0.45 }}
          viewport={{ amount: 0.25, once: true }}
          className="font-normal text-center "
        >
          <br />
          Receive the latest news, updates, and more
          <br />
          every week
        </motion.div>

        <div className="flex flex-col md:flex-row space-x-3 pt-3 md:pt-5 ml:w-full md:w-full lg:w-[600px] md:justify-center">
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Enter your email address"
            required
            className="w-[50vw] border-2 border-solid rounded-full p-3 pl-3 outline-none bg-transparent  text-white placeholder-white"
          />
          <ReactiveButton
            style={{ padding: "12px" }}
            buttonState={buttonState}
            idleText="Subscribe"
            loadingText={
              buttonState === "loading" ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={sendImage}
                    alt="Sending"
                    style={{
                      marginRight: "8px",
                      width: "24px",
                      height: "30px",
                    }}
                  />
                  <span style={{ fontSize: "13px" }}>Sending</span>
                </div>
              ) : (
                "Sending"
              )
            }
            size="large"
            rounded={true}
            successText="Done"
            onClick={onClickHandler}
            type={"submit"}
            animation={true}
            className="w-full hover:shadow-lg mt-3 md:mt-0  transition-shadow duration-300  "
          />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
