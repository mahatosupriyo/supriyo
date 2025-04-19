import styles from '@/app/home.module.scss'
import GridLayout from '@/components/gridlayout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={styles.wraper}>
        <div className={styles.container}>

          <div className={styles.navbar}>
            <h1 className={styles.title}>Supriyo Mahato</h1>
            <div className={styles.rightpanel}>
              <h1 className={styles.link}>Creations I made</h1>
              <div className={styles.paragraph}>
                Contact me
              </div>
            </div>

          </div>


          <div className={styles.hero}>
            <h1 className={styles.herotitle}>
              <span className={styles.spanprefix}>(About me)</span>Product designer and mentor, blending storytelling with systems that scale.
            </h1>


            <span className={styles.underline}></span>


            <div className={styles.herodescription}>
              <img src="https://i.ibb.co/8g2TsgFb/image-1.png" className={styles.creator} />

              <div className={styles.rightpanel}>
                <div className={styles.leftwraper}>
                  <h3 className={styles.subtitle}>
                    Shaping products with heart, logic, and 6+ years of grind.
                  </h3>

                  <p className={styles.description}>
                    I design like I live — curious, and always evolving.
                    <br /><br />
                    From robust B2B tools to expressive brand stories, I shape ideas into meaningful digital experiences.
                    <br /><br />
                    And I make time to guide new designers chasing their first big Job.
                  </p>
                </div>

                <div className={styles.rightwraper}>
                  <p className={styles.paragraph}>(Creations)</p>
                  <div className={styles.popularprojects}>
                    <Link className={styles.link} href="/">Antern</Link>
                    <Link className={styles.link} href="/">Skyvets</Link>
                    <Link className={styles.link} href="/">Ember's</Link>
                    <Link className={styles.link} href="/">Edu Burner</Link>
                    <Link className={styles.link} href="/">SBL</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
