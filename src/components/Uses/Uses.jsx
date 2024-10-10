import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const Uses = () => {
  return (
    <section>
      <div className="container my-14">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          <motion.div
            variants={SlideRight(0.2)}
            whileInView={"animate"}
            initial="initial"
            className="order-last md:order-first
           flex flex-col justify-center xl:pr-14"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
              How it Helps people
            </h1>
            <p className=" text-gray-400 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              esse ab natus.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <a href="#" className="text-primary">
                Learn More
              </a>
            </p>
            <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              Get in Touch
            </button>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.4)}
            whileInView={"animate"}
            initial="initial"
          >
            <img className="w-full rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5_OjffbO3KYTKA7hooft_FM7VAf1kOHB5IYfZU_2N2gNdIpGKDBFqTC6s5k01Phyf6c&usqp=CAU" alt="" />
            {/* <img src={Img1} alt="" className="w-full rounded-3xl " /> */}
            <p className="text-gray-400 mt-4">Client Meeting</p>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.6)}
            whileInView={"animate"}
            initial="initial"
          >
            <img className="w-full rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5_OjffbO3KYTKA7hooft_FM7VAf1kOHB5IYfZU_2N2gNdIpGKDBFqTC6s5k01Phyf6c&usqp=CAU" alt="" />
            
          <p className="text-gray-400 mt-4">Client Meeting</p>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
          >
                        <img className="w-full rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5_OjffbO3KYTKA7hooft_FM7VAf1kOHB5IYfZU_2N2gNdIpGKDBFqTC6s5k01Phyf6c&usqp=CAU" alt="" />

            <p className="text-gray-400 mt-4">Client Meeting</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
