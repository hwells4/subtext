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
    <section className="relative overflow-hidden py-24 md:py-48">
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
              <h2 className="text-3xl font-semibold leading-tight md:text-[40px] md:leading-[53px]">
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
            <div
              className="absolute z-0 h-[317px] w-[300px] rounded-[32px] border-[3px] border-white/20 md:h-[500px] md:w-[472px]"
              style={{
                top: reverseLayout ? "auto" : "10%",
                bottom: reverseLayout ? "10%" : "auto",
                left: reverseLayout ? "auto" : "-20%",
                right: reverseLayout ? "-20%" : "auto",
                filter: "blur(1.5px)",
                boxShadow:
                  "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003"
              }}
            >
              <div
                className="relative size-full rounded-[28px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(/panel.svg)`
                }}
              />
            </div>

            {/* Main Mockup Card */}
            <div
              className="relative z-10 h-[405px] w-full overflow-hidden rounded-[32px] border-[3px] border-white/30 bg-[#ffffff15] backdrop-blur-[15px] backdrop-brightness-[100%] md:h-[637px]"
              style={{
                boxShadow:
                  "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003, inset 0 0 20px rgba(255,255,255,0.05)"
              }}
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
                      backgroundImage: `url(/panel.svg)`
                    }}
                  />
                </div>
              </div>
            </div>
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
