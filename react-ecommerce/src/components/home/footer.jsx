import React from "react";
export default function Footer(props) {
  return (
    <div className="footer_bg">
      <div className="pt-5">
        <div className="news-sec d-flex justify-content-between bg-white  p-5 rounded ">
          <h2>Subscribe newsletter</h2>
          <a
            href=""
            className="send_btn text-decoration-none text-white rounded-4  p-3"
          >
            Email address
            <img src={props.icon} alt="" className="ps-5 " />
          </a>
          <div className="d-flex">
            <img src={props.icon} alt="" className="mb-3 me-2" />
            <p className="phone_num">
              Call us 24/7: <br />
              (+62)0123 567 789
            </p>
          </div>
        </div>
      </div>
      <div className="footer-list d-flex mt-5 justify-content-around pb-5">
        <ul className="logosec w-auto ">
          <li>
            <img src="images/logo.svg" alt="aaa" />
          </li>
          <li className="address text-start">
            64 st james boulevard <br />
            hoswick, ze2 7zj
          </li>
          <hr />
          <li className="d-flex text-start">
            <img src="images/vector.svg" alt="" />
            <img src="images/facebook.svg" alt="" className="ps-5" />
            <img src="images/whatsapp.svg" alt="" className="ps-5" />
          </li>
        </ul>
        <ul>
          <h4 className="text-start">Find Product</h4>
          <li>
            <a href="#">Brownze arnold</a>
          </li>
          <li>
            <a href="#">Chronograph blue</a>
          </li>
          <li>
            <a href="#">Smart Phones</a>
          </li>
          <li>
            <a href="#">Automatic watch</a>
          </li>
          <li>
            <a href="#">Hair straighteners</a>
          </li>
        </ul>
        <ul>
          <h4 className="text-start ">Get help</h4>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">Return policy</a>
          </li>
          <li>
            <a href="">Privacy policy</a>
          </li>
          <li>
            <a href="">Payment policy</a>
          </li>
        </ul>
        <ul>
          <h4 className="text-start">About us</h4>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Our policy</a>
          </li>
          <li>
            <a href="">Customer care</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
