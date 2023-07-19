import "./form.css";

const Form: React.FC = () => {
  return (
    <>
      <section className="cu-section">
        <div className="container">
          <div className="grey-bg text-center">
            <h3
              className="section-title"
              style={{ transform: "translate(0px,0px)", opacity: "1" }}
            >
              Contact us
            </h3>
            <p className="subtext">
              If you have some questions feel free to contact us.
            </p>
            <div className="contact-in-form-container">
              <div className="wpcf7 js">
                <div className="screen-reader-response">
                  <p></p>
                  <ul></ul>
                </div>
                <form
                  action=""
                  className="wpcf7-form mailchimp-ext-0.5.68 init"
                >
                  <div className="contact-in-form-inner">
                    <span className="wpcf7-form-control-wrap">
                      <input
                        type="text"
                        size={40}
                        className="wpcf7-form-control wpcf7-text"
                        placeholder="Your name"
                      />
                    </span>
                    <span className="wpcf7-form-control-wrap">
                      <input
                        type="text"
                        size={40}
                        className="wpcf7-form-control wpcf7-text"
                        placeholder="Your email"
                      />
                    </span>
                    <span className="wpcf7-form-control-wrap">
                      <textarea
                        className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                        placeholder="Your message"
                      ></textarea>
                    </span>
                    <div className="cap-wrapper">
                      <div
                        id="cf7sr-64b7a04e47284"
                        className="cf7sr-g-recaptcha"
                        data-sitekey="6LezBpAaAAAAAAMzDTEuZYW_zDtnWxPYuFZ3aYri"
                      ></div>
                      <span
                        className="wpcf7-form-control-wrap cf7sr-recaptcha"
                        data-name="cf7sr-recaptcha"
                      >
                        <input
                          type="hidden"
                          name="cf7sr-recaptcha"
                          value=""
                          className="wpcf7-form-control"
                        />
                      </span>
                    </div>
                    <p className="gray-txt after-form-txt">
                      *Your message will be processed in accordance with our{" "}
                      <a href="/privacy-policy/">Privacy Policy</a>
                    </p>
                    <input
                      className="wpcf7-form-control has-spinner wpcf7-submit btn btn-primary btn-submit"
                      type="submit"
                      value="Send"
                    />
                  </div>
                  <div
                    className="wpcf7-response-output"
                    aria-hidden="true"
                  ></div>
                  <p>
                    <span className="wpcf7-form-control-wrap referer-page">
                      <input
                        type="hidden"
                        name="referer-page"
                        className="wpcf7-form-control wpcf7-text referer-page"
                        aria-invalid="false"
                      />
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Form;
