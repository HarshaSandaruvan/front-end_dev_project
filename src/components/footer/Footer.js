import React from 'react'
import config from '../../config/colors/colors.json'
import logo from '../../assets/images/whiteLogo.png'
import styles from './Footer.module.css'

// footer Data
const footerData = [
    {
        title: 'Our Technologies',
        body: ['ReactJS', 'Gatsby', 'NextJS', 'NodeJS', 'GraphQL', 'Laravel']
    },
    {
        title: 'Our Services',
        body: ['Social media Marketing', 'Web & Mobile App Development', 'Data & Analytics', 'Google Marketing solutions', 'Search Engine Optimization']
    }
]

export default function Footer() {
    return (
        <div
            className={styles.footerContainer}
            style={{ backgroundColor: `${config.primaryColor}` }}
        >
            <div className={styles.mainInnerContainer}>
                <div className={styles.innerContainer_1}>
                    <img
                        src={logo}
                        alt='White-Logo'
                    />
                    <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </div>
                <div className={styles.innerContainer_2}>
                    {footerData.map((data, index) => {
                        return (
                            < div className={styles.card}>
                                <span
                                    className={styles.cardTitle}
                                    key={index}
                                >{data.title}</span>
                                {
                                    data.body.map((bodyData, index) => {
                                        return (
                                            <span
                                                className={styles.cardBody}
                                                key={index}
                                            >{bodyData}</span>
                                        )
                                    })
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.innerConatiner_3}>
                <hr />
                <p>Privacy Policy | Terms & Conditions</p>
            </div>
        </div >


    )
}
