import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-container">
          <div className="row">
            <div className="col-4">
              <div className="footer_1 footer_widget">
                <a href="" className="footer_logo">
                  <img
                    src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logo-white.svg"
                    alt=""
                  />
                </a>
                <div className="footer-bottom-left">
                  <p className="copyright">
                    Evoplay © <span id="date">2023</span>.
                    <br />
                    All rights reserved.
                  </p>
                  <ul className="rounded-socials">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/evoplaygames/"
                        className="rounded-socials_ico"
                      >
                        <img
                          src="https://evoplay.games/wp-content/themes/evoplay/assets/img/icons/linkedin-gray.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/evoplay.games"
                        className="rounded-socials_ico"
                      >
                        <img
                          src="https://evoplay.games/wp-content/themes/evoplay/assets/img/icons/facebook-gray.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/evoplay.games/"
                        className="rounded-socials_ico"
                      >
                        <img
                          src="https://evoplay.games/wp-content/themes/evoplay/assets/img/icons/insta-gray.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/EvoplayGames"
                        className="rounded-socials_ico"
                      >
                        <img
                          src="https://evoplay.games/wp-content/themes/evoplay/assets/img/icons/twitter-gray.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC14e8mgpt2xlNa9Sh9NHSmQ"
                        className="rounded-socials_ico"
                      >
                        <img
                          src="https://evoplay.games/wp-content/themes/evoplay/assets/img/icons/youtube-gray.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="footer_2 footer_widget footer_widget-menus">
                <div className="widget_nav_menu">
                  <h4 className="footer-col-title">Discover</h4>
                  <ul id="menu-footer-discover" className="menu-footer-group">
                    <li
                      id="menu-item-3676"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3676"
                    >
                      <a href="https://evoplay.games/about-us/">About us</a>
                    </li>
                    <li
                      id="menu-item-3672"
                      className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-143 current_page_item menu-item-3672"
                    >
                      <a
                        href="https://evoplay.games/games/"
                        aria-current="page"
                      >
                        Games
                      </a>
                    </li>
                    <li
                      id="menu-item-3671"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3671"
                    >
                      <a href="https://evoplay.games/news-events/">
                        News & events
                      </a>
                    </li>
                    <li
                      id="menu-item-3674"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3674"
                    >
                      <a href="https://evoplay.games/partnerships/">
                        Partnerships
                      </a>
                    </li>
                    <li
                      id="menu-item-3673"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3673"
                    >
                      <a href="https://evoplay.games/contact/">Contact us</a>
                    </li>
                  </ul>
                </div>
                <div className="widget_nav_menu">
                  <h4 className="footer-col-title">Legal</h4>
                  <ul id="menu-footer-legal" className="menu-footer-group">
                    <li
                      id="menu-item-3678"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3678"
                    >
                      <a href="https://evoplay.games/website-terms/">
                        Website Terms
                      </a>
                    </li>
                    <li
                      id="menu-item-3679"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3679"
                    >
                      <a href="https://evoplay.games/privacy-policy/">
                        Privacy Policy
                      </a>
                    </li>
                    <li
                      id="menu-item-3677"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3677"
                    >
                      <a href="https://evoplay.games/cookie-notice/">
                        Cookie Notice
                      </a>
                    </li>
                    <li
                      id="menu-item-5109"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5109"
                    >
                      <a href="https://evoplay.games/brand-assets-policy/">
                        Brand assets policy
                      </a>
                    </li>
                  </ul>
                  <ul className="menu-footer-group">
                    <li className="menu-item">
                      <a
                        target="_blank"
                        href="https://cloud.playevoplay.com/s/THPOp0zUITjRgsl?path=/_evoplay_Brand_Assets"
                      >
                        Brand Assets
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        target="_blank"
                        href="https://cloud.playevoplay.com/s/THPOp0zUITjRgsl"
                      >
                        Promo Materials
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="footer_3 footer_logos_wrapper">
                <h4 className="footer-col-title">Awards and Shortlists</h4>
                <div className="footer-logos row row-m-5">
                  <div className="col-4">
                    <div
                      className="footer-logos-item tooltip-item"
                      data-placement="top-start"
                      data-tippy-content="Shortlisted: Rising Star in Casino Innovation"
                    >
                      <img
                        src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/sbc.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      className="footer-logos-item tooltip-item"
                      data-placement="top-start"
                      data-tippy-content="Shortlisted: Casino Developer of the Year and Mobile Innovation of the Year"
                    >
                      <img
                        src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/sbc2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      className="footer-logos-item tooltip-item"
                      data-placement="top-start"
                      data-tippy-content="Nominated: In-browser VR Mode on Mobile"
                    >
                      <img
                        src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/g2e_asia.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="footer-logos-item tooltip-item"
                      data-placement="top-start"
                      data-tippy-content="Nominated: Game of the Year"
                    >
                      <img
                        src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/egr_operator.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="footer-logos-item tooltip-item"
                      data-placement="top-start"
                      data-tippy-content="Nominated: Innovation in Mobile"
                    >
                      <img
                        src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/b2b_aw.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      className="footer-logos-item tooltip-item"
                      data-placement="top-start"
                      data-tippy-content="Shortlisted: Software Rising Star and Mobile Supplier"
                    >
                      <img
                        src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/egr.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      className="footer-logos-item tooltip-item"
                      data-placement="top-start"
                      data-tippy-content="‘Sprinkle’ recognized as the leading innovation"
                    >
                      <img
                        src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/spinovation.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      className="footer-logos-item tooltip-item"
                      data-placement="top-start"
                      data-tippy-content="Winner: Slots Developer of the Year, Marketing Guru of the Year, and Speaker of the Year"
                    >
                      <img
                        src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/login-casino.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="footer_4">
                <h4 className="footer-col-title">LICENSEs & certificates</h4>
                <div className="footer-logos row row-m-5">
                  <div className="col-12">
                    <div className="footer-logos-item hover">
                      <a
                        target="_blank"
                        href="https://secure.ecogra.org/certification/267bfd18-1dcb-43e8-92e2-e77115dce30e"
                      >
                        <img
                          src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/ecogra.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="footer-logos-item hover curasao">
                      <style>
                        {`
                      .footer-logos-item.curasao a img {
                        height: 47px!important;
                        object-fit: contain;
                      }
                    `}
                      </style>
                      <a target="_blank" href="https://evoplay.games/iso13">
                        <img
                          style={{ width: "100%" }}
                          src="https://20704af1-2ab9-42e5-a415-7b7d8a1f677c.snippet.antillephone.com/sealassets/61c9371f0a62785820e24e7a6d442c4a-evoplay.games-cc81f3360fce83eb803d6fa851045874713eca3cc300fdf81e3162f68c03be0ded34b728833953659ff7875a1924b90b-c2VhbC5wbmc%3D?status=valid"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="footer-logos-item hover">
                      <a target="_blank" href="https://evoplay.games/iso13">
                        <img
                          style={{ width: "100%" }}
                          src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/iso-wh-13.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="footer-logos-item hover">
                      <a target="_blank" href="https://evoplay.games/iso19">
                        <img
                          style={{ width: "100%" }}
                          src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/iso-wh-19.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
