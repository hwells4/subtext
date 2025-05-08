"use client"
import React, { useRef } from "react"
import { useScroll, useTransform, motion, MotionValue } from "framer-motion"

export const ContainerScroll = ({
  titleComponent,
  children
}: {
  titleComponent: string | React.ReactNode | null
  children: React.ReactNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.8, 1] : [0.95, 1.05]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [-50, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 0.8, 1])

  return (
    <div
      className="relative flex h-[55rem] items-center justify-center p-2 md:h-[70rem] md:p-8"
      ref={containerRef}
    >
      <div
        className="relative mx-auto w-full max-w-[90vw] py-8 md:py-20"
        style={{
          perspective: "1000px"
        }}
      >
        {titleComponent && (
          <Header translate={translate} titleComponent={titleComponent} />
        )}
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          opacity={opacity}
        >
          {children}
        </Card>
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  if (!titleComponent) return null

  return (
    <motion.div
      style={{
        translateY: translate
      }}
      className="div mx-auto mb-8 max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  opacity,
  children
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  opacity: MotionValue<number>
  children: React.ReactNode
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        opacity,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003"
      }}
      className="mx-auto h-[35rem] w-full max-w-[1400px] rounded-[30px] border-4 border-[#6C6C6C] bg-[#222222] p-2 shadow-2xl md:h-[50rem] md:p-6"
    >
      <div className="size-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl md:p-4 dark:bg-zinc-900">
        {children}
      </div>
    </motion.div>
  )
}
