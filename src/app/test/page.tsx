"use client"
import React from "react";
import styles from "./test.module.scss"

export default function Portfolio() {

    return (
        <div className={styles.wraper}>
            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <div className={styles.logo}>Supriyo M.</div>
                    <div className={styles.menu}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </header>

                {/* Left Sidebar */}
                <aside className={styles.sidebarLeft}>
                    <div className={styles.greeting}>Hello!</div>
                    <div className={styles.greeting}>My name is Supriyo Mahato.</div>
                </aside>

                {/* Main Content */}
                <main className={styles.main}>
                    <h1 className={styles.heroText}>
                        <span className={styles.highlight}>I am a Design Engineer and Entrepreneur</span>
                        <span className={styles.highlight}>, based in </span>
                        <span className={styles.muted}>India</span>
                        <span className={styles.highlight}>.</span>
                    </h1>
                </main>

                {/* Right Sidebar */}
                <aside className={styles.sidebarRight}>
                    <div className={styles.section}>
                        <div className={styles.title}>Last Update</div>
                        <div className={styles.item}>April 20 2020</div>
                    </div>

                    <div className={styles.section}>
                        <div className={styles.title}>Creations</div>
                        <div className={styles.item}>On the Orbit</div>
                        <div className={styles.item}>Edu Burner</div>
                        <div className={styles.item}>Skyvets</div>
                        <div className={styles.item}>Antern</div>
                        <div className={styles.item}>SBL</div>
                    </div>
                </aside>

                {/* Footer Left */}
                <section className={styles.footerLeft}>

                    A designer from India with 5+ years of crafting visuals that connect.
                    <br />
                    <br />
                    I’ve mentored 100+ folks kickstart their creative journeys, and nothing makes me happier than seeing someone win.
                    <br />
                    <br />
                    off-work? you’ll find me chasing music, on the road, or just soaking in the world to bring it back into my work.

                </section>

                {/* Footer Right */}
                <section className={styles.footerRight}>
                    <div className={styles.title}>Contact</div>
                    <a href="/" target="_blank" className={styles.contactItem}>Email</a>
                    <a href="/" target="_blank" className={styles.contactItem}>LinkedIn</a>
                    <a href="/" target="_blank" className={styles.contactItem}>Instagram</a>
                </section>

                <section className={`${styles.education} ${styles.resumeSection}`}>
                    <div className={styles.title}>Education</div>

                    <div className={styles.institution}>
                        <div className={styles.name}>Sister Nivedita University</div>
                        <div className={styles.details}>Kolkata, IN</div>
                        <div className={styles.details}>Bachelor of Design</div>
                        {/* <div className={styles.year}>2009</div> */}
                    </div>

                </section>

                {/* Recent History Section */}
                <section className={`${styles.history} ${styles.resumeSection}`}>
                    <div className={styles.title}>Recent History</div>

                    <div className={styles.company}>
                        <div className={styles.name}>
                            On the Orbit <span className={styles.details}>(Remote)</span>
                        </div>
                        <div className={styles.period}>May 2021 - Present</div>
                        <div className={styles.role}>Founder, CTO, Design Head</div>
                    </div>

                    <div className={styles.company}>
                        <div className={styles.name}>
                            SkyVets <span className={styles.details}>(Punjab, IN)</span>
                        </div>
                        <div className={styles.period}>Jan 2025 - Feb. 2025</div>
                        <div className={styles.role}>Designer (Freelance)</div>
                    </div>

                    <div className={styles.company}>
                        <div className={styles.name}>
                            Edu Burner <span className={styles.details}>(IN)</span>
                        </div>
                        <div className={styles.period}>Jun. 2023 - June. 2024</div>
                        <div className={styles.role}>Book Designer & Author</div>
                    </div>

                    <div className={styles.company}>
                        <div className={styles.name}>
                            Second Brain Labs <span className={styles.details}>(Bangalore, IN)</span>
                        </div>
                        <div className={styles.period}>Dec. 2024 - Jan 2025</div>
                        <div className={styles.role}>Product Designer</div>
                    </div>

                    <div className={styles.company}>
                        <div className={styles.name}>
                            Antern <span className={styles.details}>(Bangalore, IN)</span>
                        </div>
                        <div className={styles.period}>Jun. 2020 - Jun. 2024</div>
                        <div className={styles.role}>UX Designer</div>
                    </div>



                </section>

            </div>

        </div>

    )
}
