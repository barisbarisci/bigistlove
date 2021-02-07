import Link from "next/link";

import Head from "next/head";

export default function Home() {
  return (
    <div classNameName="container">
      <Head>
        <title>BigistLove</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main-area">
          <div className="container full-height position-static">
            <section className="left-section full-height">
              <a className="logo" href="#">
                {/* <img src="/images/logo-black.png" alt="Logo" /> */}
              </a>

              <div className="display-table">
                <div className="display-table-cell">
                  <div className="main-content">
                    <h1 className="title">
                      <b>Under Construction</b>
                    </h1>
                    <p>
                      Our website is currently undergoing scheduled maintenance.
                      We Should be back shortly. Thank you for your patience.
                    </p>

                    <div className="email-input-area">
                      <form method="post">
                        <input
                          className="email-input"
                          name="email"
                          type="text"
                          placeholder="Enter your email"
                        />
                        <button
                          className="submit-btn"
                          name="submit"
                          type="submit"
                        >
                          <b>NOTIFY US</b>
                        </button>
                      </form>
                    </div>

                    <p className="post-desc">
                      Sign up now to get early notification of our lauch date!
                    </p>
                  </div>
                </div>
              </div>

              <ul className="footer-icons">
                <li>Stay in touch : </li>
                <li>
                  <a href="#">
                    <i className="ion-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-social-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-social-googleplus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-social-instagram-outline"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-social-pinterest"></i>
                  </a>
                </li>
              </ul>
            </section>

            <section
              className="right-section bckg-img">
              <style jsx>
                {`
                  .bckg-img {
                    background-image: url(/images/countdown-1-1000x1000.jpg)
                  }
                `}
              </style>
              <div className="display-table center-text">
                <div className="display-table-cell">
                  <div id="rounded-countdown">
                    <div
                      className="countdown"
                      data-remaining-sec="2000000"
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
