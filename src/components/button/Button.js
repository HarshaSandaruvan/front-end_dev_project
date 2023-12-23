import React from 'react'
import config from '../../config/colors/colors.json'
import styles from './Button.module.css'

export default function Button({ children, className, ...props }) {
    return (
        <button className={`btn ${className} ${styles.btn}`} {...props} style={{ backgroundColor: `${config.secondaryColor}` }}>{children}</button>
    )
}
