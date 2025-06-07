"use client"
import styles from './eduburner.module.scss'
import Lottie from 'lottie-react'
import burnerLoader from '../../../../public/Essentials/lottie/burner.json';

export default function EduBurner() {
    return (
        <div className={styles.eduburner}>
            <div className={styles.projectheader}>

                <div className={styles.chip}>
                    Edu Burner
                    <br />
                    <span className={styles.wiped}>
                        ↳ 2024
                    </span>
                </div>

                <div className={styles.chip}>
                    IPR for class XII CBSE
                    <br />
                    <span className={styles.wiped}>
                        ↳ Wrote & Designed
                    </span>
                </div>

                <div className={styles.chip}>
                    Role
                    <span className={styles.wiped}>
                        <br />
                        · Logo Design
                        <br />
                        · Cover Design
                        <br />
                        · Editorial Design
                        <br />
                        · Authored
                    </span>
                </div>

                <div className={styles.chip}>
                    CBSE has outdated facts and books with dull designs—but I made this to change that. I’ve designed this book to make Informatics Practices more engaging, more immersive, and way more fun to learn. With vibrant graphics and interactive concepts.
                </div>

            </div>
            <div className={styles.bannerwraper}>
                <img
                    src="https://ik.imagekit.io/localstore/Banner%20IPR.png?updatedAt=1749241412373"
                    draggable="false"
                    loading="lazy"
                    className={styles.fullwidthbanner}
                />
            </div>

            <div className={styles.logowrapers}>


                <div className={styles.chip}>
                    Logo breakdown
                    <span className={styles.wiped}>
                        <br />
                        ↳ beautifully structured, modern design with a strong, educational feel that reflects adaptability and clarity.
                    </span>
                </div>

                <div className={styles.sqwraper}>
                    <Lottie animationData={burnerLoader} style={{ height: '100%', padding: '6rem', aspectRatio: '1/1', background: '#2165E8', width: '100%' }} autoplay loop />
                </div>

                <div className={styles.holder}>



                    <div className={styles.chip}>
                        Features
                        <span className={styles.wiped}>
                            <br />
                            ↳ Minimalism
                            <br />
                            Reinforces the idea of structure and systematic learning
                            <br />
                            ↳ Geometry
                            <br />
                            The clean lines and geometric forms are reminiscent of building blocks or learning modules, symbolizing knowledge construction.
                            <br />
                            ↳ Responsiveness
                            <br />
                            ↳ Both digital and print contexts kept in mind

                        </span>
                    </div>



                </div>


                {/* <div className={styles.sqwraper}>

                        <img src="https://ik.imagekit.io/localstore/FAV.png?updatedAt=1749291206409"
                            className={styles.sqimg}
                            draggable="false"
                        />
                    </div> */}


            </div>
        </div>
    )
}