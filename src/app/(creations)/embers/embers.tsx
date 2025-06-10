"use client"
import BackgroundVideo from 'next-video/background-video';
import styles from './embers.module.scss'
import Lottie from 'lottie-react'
import burnerLoader from '../../../../public/Essentials/lottie/embers.json';

export default function Embers() {
    return (
        <div className={styles.eduburner}>
            <div className={styles.projectheader}>

                <div className={styles.chip}>
                    Ember's
                    <br />
                    <span className={styles.wiped}>
                        ↳ 2025
                    </span>
                </div>

                <div className={styles.chip}>
                    Texas Style BBQ Brand
                    <br />
                    <span className={styles.wiped}>
                        ↳ In Punjab India
                    </span>
                </div>

                <div className={styles.chip}>
                    Role
                    <span className={styles.wiped}>
                        <br />
                        · Logo Design
                        <br />
                        · Brand Identity
                        <br />
                        · Landing Page
                        <br />
                    </span>
                </div>

                <div className={styles.chip}>
                    For Ember’s, I built a Texas-style BBQ website that captures the brand’s warmth, boldness, and authenticity. It’s a dynamic, responsive, and engaging experience, perfect for making mouths water.
                </div>

            </div>
            <div className={styles.bannerwraper}>
                <img
                    src="https://ik.imagekit.io/localstore/Display_Mockup.png?updatedAt=1749327166188"
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
                        ↳ The fiery red background instantly evokes warmth, energy, and appetite, igniting a craving for barbecue.
                        <br />
                    </span>
                </div>

                <div className={styles.sqwraper}>
                    <Lottie animationData={burnerLoader} style={{ height: '100%', padding: '0rem', aspectRatio: '1/1', width: '100%' }} autoplay loop />
                </div>

                <div className={styles.holder}>


                    <div className={styles.chip}>
                        Features
                        <span className={styles.wiped}>
                            <br />
                            <span className={styles.chip}>
                                ↳ Bold Font
                            </span>
                            <br />
                            It triggers a sense of heritage and authenticity.
                            <br />
                            <span className={styles.chip}>
                                ↳ Color Psychology—Red & White
                            </span>
                            <br />
                            The fiery red background instantly evokes warmth, energy, and appetite, igniting a craving for barbecue. White lettering pops dramatically against the red, symbolizing honesty and boldness.
                            <br />
                            <span className={styles.chip}>
                                ↳ Sharp, Angular Letterforms
                            </span>
                            <br />
                            The edgy, angular design of the letters exudes confidence, passion, and intensity—qualities that perfectly match the heat and excitement of Texas-style BBQ.
                        </span>
                    </div>



                </div>


            </div>


            <div className={styles.labelheader}>

                <p className={styles.chip}>
                    ↳ Typography
                </p>

                <div className={styles.chip}>
                    The brand typography combines Interstate Ultra Bold as the primary font to deliver a modern, bold, and sharp presence, capturing the energetic and vibrant vibe of BBQ. Paired with Instrument Serif, which adds a traditional, experienced, and trustworthy feel, the typography strikes the perfect balance between contemporary edge and heritage, reflecting the brand’s journey of flavors and expertise.
                </div>
                <img src="https://ik.imagekit.io/localstore/campain.png?updatedAt=1749536837449" draggable="false" className={styles.sideimgbanner} />
            </div>

            <div className={styles.imagewraper}>
                <img src="https://ik.imagekit.io/localstore/Font.png" draggable="false" className={styles.imgbanner} />
            </div>




            <div className={styles.videoheader}>
                <span className={styles.chip}>
                    Tools used
                    <span className={styles.wiped}>
                        <br />
                        ↳ Next.js
                        <br />
                        ↳ GSAP
                        <br />
                        ↳ Florafauna AI
                    </span>
                </span>

                <span className={styles.chip}>
                    Built with scalability in mind, styling using SCSS variables for scalability.
                    <br />

                </span>
            </div>




            <div className={styles.videowraper}>
                <BackgroundVideo
                    draggable="false"
                    playbackId='h5JIvbV1ESvFWzCeO02kyxP5dIYChebkP91ngWzp1Dro'
                    autoPlay
                    poster="https://image.mux.com/h5JIvbV1ESvFWzCeO02kyxP5dIYChebkP91ngWzp1Dro/thumbnail.webp"
                    loop
                    blurDataURL='data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACwAQCdASoQAAoAAQAcJaQAAudLyaagAP4L/9vWno7/cb3D9zCjFG/up/9DgmS7/DPmRpuUKwL0BX0sMvu/4VH+Q62185841ss5rPm8IuqZAduQwMrBD4AA'
                    muted
                    className={styles.fullwidthbanner}
                />
            </div>


        </div>
    )
}