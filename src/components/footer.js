import React from "react"

import footerStyles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <a
        id={footerStyles.whatsapp}
        className={footerStyles.ring}
        aria-label="WhatsApp"
        href="https://api.whatsapp.com/send/?phone=%2B923352522522&text=This+is+Muhammad+Osama%2C+how+may+I+assist+you%3F&app_absent=0"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src={require("../images/icons/whatsapp.png")}
          alt="https://www.macrentalcompany.co.uk/"
          width="49"
          height="45"
        />
      </a>
      <div className={footerStyles.row}>
        <div className={`${footerStyles.column} ${footerStyles.col2}`}>
          <p className={footerStyles.title}>Info</p>
          <p className={footerStyles.description}>
            Hi! My name is Muhammad Osama. I am a Software Engineer and have
            been working with website designing and development, graphic design
            and ui/ux design since 2017.
          </p>
        </div>
        <div className={`${footerStyles.column} ${footerStyles.col1}`}>
          <p className={footerStyles.title}>Get in touch</p>
          <p className={footerStyles.description}>
            <a href="mailto:imuhammadosama@outlook.com">
              imuhammadosama@outlook.com
            </a>
            <br />
            Hasan Abdal, Pakistan
          </p>
        </div>
        <div className={`${footerStyles.column} ${footerStyles.col1}`}>
          <p className={footerStyles.title}>Newsletter</p>
          <p className={footerStyles.description}>
            <a href="https://www.messenger.com/t/OsamaLovesAllah">Sign up</a>{" "}
            for the latest arrivals, special offers and weekly picks.
          </p>
        </div>
        <div className={`${footerStyles.column} ${footerStyles.col1}`}>
          <p className={footerStyles.title}>Contact me</p>
          <p className={footerStyles.description}>
            <a
              href="https://www.messenger.com/t/OsamaLovesAllah"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../images/icons/footer/messenger.svg")}
                alt="https://www.macrentalcompany.co.uk/"
                width="25"
                height="25"
              />
            </a>
            <a
              href="https://www.instagram.com/imuhammadosama"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../images/icons/footer/instagram.svg")}
                alt="https://www.macrentalcompany.co.uk/"
                width="25"
                height="25"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B923352522522&text=This+is+Muhammad+Osama%2C+how+may+I+assist+you%3F&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../images/icons/footer/whatsapp.svg")}
                alt="https://www.macrentalcompany.co.uk/"
                width="25"
                height="25"
              />
            </a>
            <a
              href="https://join.skype.com/invite/oIfyThBmRrDo"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../images/icons/footer/skype.svg")}
                alt="https://www.macrentalcompany.co.uk/"
                width="25"
                height="25"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
