import React from 'react'
import styles from './Home.module.css'
import config from '../../config/colors/colors.json'
import mainImage from '../../assets/images/backgroundImage.jpg'
import Button from '../../components/button/Button'
import img1 from '../../assets/images/image_1.png'
import img2 from '../../assets/images/image_2.png'

const details = [
    {
        "image": img1,
        "title": "Web & Mobile App Development",
        "description": "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
    },
    {
        "image": img2,
        "title": "Digital Strategy Consulting",
        "description": "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
    }
]

export default function Home() {
    return (
        <div>
            <div className={styles.innerContainer_1}>
                <img
                    src={mainImage}
                    alt={'Image 1'}
                    className={`${styles.backgrounImage}`} />
                <div
                    className={styles.innerCard}
                    style={{
                        background: `linear-gradient(256.73deg, ${config.analogousColor_2} 27.86%, ${config.darkColor} 100%)`,
                        border: `1px solid ${config.analogousColor_1}`
                    }}
                >
                    <span>We crush your competitors, goals, and sales records - without the B.S.</span>
                    <Button className={styles.btn}>Get free consultation</Button>
                </div>
            </div>
            <div className={styles.innerContainer_2}>
                <div className={`${styles.card} ${styles.left}`}>
                    <img
                        src={details[0].image}
                        alt={details[0].title}
                        className={`${styles.cardImg}`} />
                    <div className={`${styles.cardBody}`}>
                        <h3 style={{ color: `${config.primaryColor}` }}>{details[0].title}</h3>
                        <p style={{ color: `${config.textColor}` }}>{details[0].description}</p>
                        <Button>LEARN MORE</Button>
                    </div>
                </div>

                <div className={`${styles.card} ${styles.right}`}>
                    <img src={details[1].image} alt={details[1].title} className={`${styles.cardImg}`} />
                    <div className={`${styles.cardBody}`}>
                        <h3 style={{ color: `${config.primaryColor}` }}>{details[1].title}</h3>
                        <p style={{ color: `${config.textColor}` }}>{details[1].description}</p>
                        <Button>LEARN MORE</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}
