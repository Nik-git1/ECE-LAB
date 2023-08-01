import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Page7() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, feedback };
    try {
      const response = await axios.post(
        `https://sheet.best/api/sheets/c695c1ae-0007-45ee-ba9f-de2bdbc49e39`,
        formData
      );
      if (response.status === 200) {
        alert("Thank you for your feedback!");
      } else {
        alert("Oops, something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops, something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <section>
        <div className="relative bg-teal-600 text-white p-8 ">
          <div class="mx-4 sm:mx-10 md:mx-20 xl:mx-60 flex flex-col md:flex-row ">

            <div class="flex flex-col w-full lg:w-1/3 p-4 md:p-4">
              <p class="text-yellow-300 mx-8 md:mx-16 text-5xl sm:text-6xl uppercase tracking-loose">
                REVIEW
              </p>
              <p class="text-5xl sm:text-6xl md:text-4xl my-2 sm:my-4 leading-relaxed md:leading-snug">
                Please leave us a feedback!
              </p>
              <p class="text-2xl sm:text-4xl md:text-2xl text-gray-50 text-opacity-100 mt-2">
                For any information contact
                <br /> Dr. Rahul Gupta
                <br />
                Email: rahul@iiitd.ac.in <br />
                Contact No: <br />
              </p>
            </div>

            <div class="flex flex-col w-full lg:w-2/3 justify-center">
              <div class="container w-full px-4">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-6/12 px-2 sm:px-4 md:px-6">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-4 shadow-lg bg-white">
                      <div class="flex-auto p-4 sm:p-5 lg:p-8">
                        <h4 class="text-4xl sm:text-5xl md:text-5xl mb-2 text-black font-semibold">
                          Have a suggestion?
                        </h4>
                        <form id="feedbackForm" onSubmit={handleSubmit}>
                          <div class="relative w-full mb-3">
                            <label
                              class="block uppercase text-gray-700 text-lg font-bold mb-2"
                              for="email"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              class="border-0 px-3 py-3 rounded text-xs sm:text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div class="relative w-full mb-3">
                            <label
                              class="block uppercase text-gray-700 text-lg font-bold mb-2"
                              for="message"
                            >
                              Message
                            </label>
                            <textarea
                              maxLength="300"
                              id="feedback"
                              name="feedback"
                              value={feedback}
                              onChange={(e) => setFeedback(e.target.value)}
                              rows="4"
                              cols="80"
                              class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-xs sm:text-sm shadow focus:outline-none w-full"
                              placeholder="Enter your feedback"
                              required
                            ></textarea>
                          </div>
                          <div class="text-center mt-4 sm:mt-6">
                            <button
                              id="feedbackBtn"
                              class="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-lg sm:text-xl font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
