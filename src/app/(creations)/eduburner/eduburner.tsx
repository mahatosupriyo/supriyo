"use client"

import styles from './eduburner.module.scss'
import Lottie from 'lottie-react'
import burnerLoader from '../../../../public/Essentials/lottie/burner.json';
import icons from '../../../../public/Essentials/lottie/icons.json';
import CodeDisplay from './editor';

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
                    IPR Book & Platform
                    <br />
                    <span className={styles.wiped}>
                        ↳ Designed & Built from scratch
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
                        · Design System for Platform
                        <br />
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

            </div>

            <div className={styles.iconsetheader}>
                <span className={styles.chip}>
                    Icon Set
                </span>

                <span className={styles.chip}>
                    Created Instances and States for each Icons in Figma.
                    <br />
                    <span className={styles.wiped}>
                        Further in code created Icon Component with props to change the state, size, color of the icon.
                    </span>
                </span>
            </div>

            <div className={styles.iconwraper}>
                <Lottie animationData={icons} style={{ height: '100%', padding: '0rem', aspectRatio: '1/1', width: '100%' }} autoplay loop />
                <div className={styles.individualset}>
                    <img
                        src="https://ik.imagekit.io/localstore/icons/1.png?updatedAt=1749376645508"
                        draggable="false"
                        className={styles.iconimg}
                    />

                    <img
                        src="https://ik.imagekit.io/localstore/icons/2.png?updatedAt=1749376645508"
                        draggable="false"
                        className={styles.iconimg}
                    />

                    <img
                        src="https://ik.imagekit.io/localstore/icons/3.png?updatedAt=1749376645508"
                        draggable="false"
                        className={styles.iconimg}
                    />

                    <img
                        src="https://ik.imagekit.io/localstore/icons/4.png?updatedAt=1749376645508"
                        draggable="false"
                        className={styles.iconimg}
                    />

                    <img
                        src="https://ik.imagekit.io/localstore/icons/5.png?updatedAt=1749376645508"
                        draggable="false"
                        className={styles.iconimg}
                    />

                    <img
                        src="https://ik.imagekit.io/localstore/icons/6.png?updatedAt=1749376645508"
                        draggable="false"
                        className={styles.iconimg}
                    />
                </div>
            </div>

            <div className={styles.iconsetheader}>
                <span className={styles.chip}>
                    Figma Instances
                </span>

                <span className={styles.chip}>
                    Icon Component with props to change the state, size, color of the icon.
                </span>
            </div>


            <div className={styles.iconvariablewraper}>
                <img src="https://ik.imagekit.io/localstore/icons/v1.png?updatedAt=1749378182685"
                    className={styles.varimg} draggable="false"
                />

                <div style={{ display: 'flex', padding: 0, margin: 0, height: '100%', minHeight: '40rem', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <CodeDisplay />
                </div>

            </div>

            {/* <div className={styles.compheader}>
                <span className={styles.chip}>
                    Search Bar Component
                    <div className={styles.wiped}>
                        ↳ Used Atomic Design Principles to create a reusable Search Bar Component.
                    </div>
                </span>

                <span className={styles.chip}>
                    Settings Component
                </span>
            </div>

            <div className={styles.screens}>

                <img src="https://ik.imagekit.io/localstore/Search.svg?updatedAt=1749412941638"
                    className={styles.screen} draggable="false"
                />

                <img src="https://ik.imagekit.io/localstore/GHA.svg?updatedAt=1749412580759"
                    className={styles.screen} draggable="false"
                />

            </div> */}


            <div className={styles.screens} style={{ paddingTop: '10rem' }}>

                <img src="https://ik.imagekit.io/localstore/icons/Diwali.png?updatedAt=1749413384551"
                    className={styles.screen} draggable="false"
                />

                <img src="https://ik.imagekit.io/localstore/icons/Great.png?updatedAt=1749413710550"
                    className={styles.screen} draggable="false" />

                <div className={styles.instascreens}>
                    <img src="https://ik.imagekit.io/localstore/icons/Launch.png?updatedAt=1749413385554"
                        className={styles.instascreen} draggable="false"
                    />

                    <img src="https://ik.imagekit.io/localstore/icons/Quote.png?updatedAt=1749413912980"
                        className={styles.instascreen} draggable="false"
                    />
                </div>


            </div>
        </div>
    )
}