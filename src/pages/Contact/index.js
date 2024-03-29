import "./contact.css";

function Contact() {
    return (
        <div className="container contact">
            <div className="contact-section">
                <h1 className="title animate__animated animate__fadeInUp animate__delay-0.5s">
                    Contact
                </h1>
                <div className="contacts title animate__animated animate__fadeInUp animate__delay-0.5s">
                    <a href="mailto:gustavo_allm@outlook.com">
                        <span>gustavo_allm@outlook.com</span>
                    </a>
                    <a href="tel://+551999419-7044">
                        <span>+55 19 99419-7044</span>
                    </a>
                    <a
                        href="https://goo.gl/maps/9n1gnKtCyUpi26Sy6"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>Americana SP, Brasil</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
