"use client"

import styles from "@/app/home.module.scss"
import Link from "next/link"
import { delay, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Staggered animation for navbar items
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  // Staggered animation for hero content
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
        ease: "easeInOut",
      },
    },
  }

  

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  }

    // Animation for project links
    const projectLinkVariants = {
      hidden: { opacity: 0, x: -10 },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 1 + i * 0.1,
          ease: "easeOut",
        },
      }),
    }

  // Animation for the underline
  const underlineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.8,
      },
    },
  }


  return (
    <>
      <div className={styles.wraper}>
        <div className={styles.container}>
          {/* Navbar with staggered fade-in */}
          <motion.div
            className={styles.navbar}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={navbarVariants}
          >
            <motion.h1 className={styles.title} variants={navbarVariants}>
              Supriyo Mahato
            </motion.h1>
            <div className={styles.rightpanel}>
              <motion.h1
                className={styles.link}
                variants={navbarVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Creations I made
              </motion.h1>
              <motion.div
                className={styles.paragraph}
                variants={navbarVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact me
              </motion.div>
            </div>
          </motion.div>

          {/* Hero section with staggered animations */}
          <motion.div
            className={styles.hero}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={heroVariants}
          >
            <motion.h1 className={styles.herotitle} variants={heroItemVariants}>
              <motion.span className={styles.spanprefix} variants={heroItemVariants}>
                (About me)
              </motion.span>
              Product designer and mentor, blending storytelling with systems that scale.
            </motion.h1>

            <motion.span className={styles.underline} variants={underlineVariants}></motion.span>

            <motion.div className={styles.herodescription} variants={heroItemVariants}>
              <motion.img
                src="https://i.ibb.co/8g2TsgFb/image-1.png"
                className={styles.creator}
                variants={heroItemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.6,
                    ease: "easeOut",
                  },
                }}
                whileHover={{ scale: 1.03 }}
              />

              <div className={styles.rightpanel}>
                <div className={styles.leftwraper}>
                  <motion.h3 className={styles.subtitle} variants={heroItemVariants}>
                    Shaping products with heart, logic, and 6+ years of grind.
                  </motion.h3>
                </div>

                <div className={styles.rightwraper}>
                  <motion.p className={styles.paragraph} variants={heroItemVariants}>
                    (Creations)
                  </motion.p>
                  <div className={styles.popularprojects}>
                    {["Antern", "Skyvets", "Ember's", "Edu Burner", "SBL"].map((project, i) => (
                      <motion.div
                        key={project}
                        variants={projectLinkVariants}
                        custom={i}
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                      >
                        <motion.div whileHover="hover" initial="initial">
                          <Link className={styles.link} href="/">
                            {project}
                            <motion.svg
                              className={styles.linkicon}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                            >
                              <path d="M13 26.6429L14.3571 28L27.9277 14.4294L26.5706 13.0723L13 26.6429Z" />
                              <path d="M26.0808 13V27.3938H28V13H26.0808Z" />
                              <path d="M13.6062 13V14.9192H28V13L13.6062 13Z" />
                            </motion.svg>
                          </Link>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
