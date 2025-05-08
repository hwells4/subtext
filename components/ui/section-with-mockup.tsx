"use client"

import React from "react"
import { motion } from "framer-motion"

interface SectionWithMockupProps {
  title: string | React.ReactNode
  description: string | React.ReactNode
  primaryImageSrc: string
  secondaryImageSrc: string
  reverseLayout?: boolean
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
  title,
  description,
  primaryImageSrc,
  secondaryImageSrc,
  reverseLayout = false
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:grid-flow-col-dense"
    : "md:grid-cols-2"

  const textOrderClass = reverseLayout ? "md:col-start-2" : ""
  const imageOrderClass = reverseLayout ? "md:col-start-1" : ""

  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-48">
      <div className="container relative z-10 mx-auto w-full max-w-[1220px] px-6 md:px-10">
        <motion.div
          className={`grid w-full grid-cols-1 items-center gap-16 md:gap-8 ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Content */}
          <motion.div
            className={`mx-auto mt-10 flex max-w-[546px] flex-col items-start gap-4 md:mx-0 md:mt-0 ${textOrderClass}`}
            variants={itemVariants}
          >
            <div className="space-y-2 md:space-y-1">
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-[40px] md:leading-[53px]">
                {title}
              </h2>
            </div>

            <p className="text-sm leading-6 text-[#868f97] md:text-[15px]">
              {description}
            </p>
            {/* Optional: Add a button or link here */}
            {/* <div>
                            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md">Learn More</button>
                         </div> */}
          </motion.div>

          {/* App mockup/Image Content */}
          <motion.div
            className={`relative mx-auto mt-10 md:mt-0 ${imageOrderClass} w-full max-w-[300px] md:max-w-[471px]`}
            variants={itemVariants}
          >
            {/* Decorative Background Element */}
            <motion.div
              className={`absolute z-0 h-[317px] w-[300px] rounded-[32px] bg-[#090909] md:h-[500px] md:w-[472px]`}
              style={{
                top: reverseLayout ? "auto" : "10%",
                bottom: reverseLayout ? "10%" : "auto",
                left: reverseLayout ? "auto" : "-20%",
                right: reverseLayout ? "-20%" : "auto",
                transform: reverseLayout
                  ? "translate(0, 0)"
                  : "translateY(10%)",
                filter: "blur(2px)"
              }}
              initial={{ y: reverseLayout ? 0 : 0 }}
              whileInView={{ y: reverseLayout ? -20 : -30 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="relative size-full rounded-[32px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${secondaryImageSrc})`
                }}
              />
            </motion.div>

            {/* Main Mockup Card */}
            <motion.div
              className="relative z-10 h-[405px] w-full overflow-hidden rounded-[32px] border-0 bg-[#ffffff0a] backdrop-blur-[15px] backdrop-brightness-[100%] md:h-[637px]"
              initial={{ y: reverseLayout ? 0 : 0 }}
              whileInView={{ y: reverseLayout ? 20 : 30 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="h-full p-0">
                <div
                  className="relative h-full"
                  style={{
                    backgroundSize: "100% 100%"
                  }}
                >
                  {/* Primary Image */}
                  <div
                    className="size-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${primaryImageSrc})`
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom gradient */}
      <div
        className="absolute bottom-0 left-0 z-0 h-px w-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%)"
        }}
      />
    </section>
  )
}

export default SectionWithMockup
