import React from 'react'
import styles from './index.module.css'

export default function ContactForm () {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.headerStyle} >Get in touch!</h2>
      <form className={styles.formStyle} method="POST" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <label className={styles.labelStyle} >
          <span>Name</span>
          <input className={styles.inputStyle} type="text" name="name" id="name" placeholder='name'/>
        </label>
        <label className={styles.labelStyle} >
          <span>Email</span>
          <input className={styles.inputStyle} type="email" name="email" id="email" placeholder='email'/>
        </label>
        <input type="hidden" name="bot-field" />
        <label className={styles.labelStyle}><span>Leave a message</span></label>
        <textarea className={styles.textAreaStyle} name="message" cols="30" rows="10" />
        <button className={styles.submitButton} type="submit">Submit</button>
      </form>
    </div>
  )
}
