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
    <div
      className="pt-10 pb-10 md:pt-50 mx-auto max-w-1200 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})`, borderRadius: "25px" }}
    >
      <div className="r-50 rounded-2xl flex flex-col items-center leading-8 p-5 ">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="rounded-2xl flex flex-col items-center leading-14 text-center"
        >
          <h2
            className="text-2xl font-bold text-[#404ee2] text-[2rem]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Sign up for our newsletter
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 0.2, delay: 0.45 }}
          viewport={{ amount: 0.25, once: true }}
          className="text-custom2  font-normal pt-3 leading-loose text-center text-[#7340e2]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <br />
          Receive the latest news, updates, and more
          <br />
          every week
        </motion.div>

        <div className="flex flex-col md:flex-row pt-3 md:pt-5 ml:w-full md:w-full lg:w-[600px]">
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Enter your email address"
            required
            className="px-4 py-2 border border-gray-300 rounded-l-[40px] focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full md:max-w-[600px] h-[67px] md:h-[50px] max-sm:w-[300px] rounded-r-[50px] transition-shadow duration-300 hover:shadow-lg mb-4 md:mb-0 md:mr-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          />
          <ReactiveButton
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
            color={"293FCC"}
            size="large"
            rounded={true}
            successText="Done"
            onClick={onClickHandler}
            type={"submit"}
            animation={true}
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="w-full md:w-auto h-[49px] md:ml-0 max-sm:w-[49px] max-sm:h-[67px]  hover:shadow-lg transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
