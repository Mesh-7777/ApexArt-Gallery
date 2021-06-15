import React from "react";
import "./footer.css";
import Bgimg from "./Bgimg";
function Footer() {
	return (
		<>
			<Bgimg />			
			<div id="footer">
				<div className="section section1">
					<h3>Custome Service</h3>
					<ul>
						<li>Shipping</li>
						<li>MyAccount</li>
						<li>Sign In</li>
						<li>Register</li>
						<li>Find Store</li>
					</ul>
				</div>
				<div className="vl"></div>
				<div className="section section2">
					<h3>Social Contact</h3>
					<ul>
						<li>Facebook</li>
						<li>Instagram</li>
						<li>Twitter</li>
					</ul>
					<h3>Contact</h3>
					<ul>
						<li>smaheshsharma07@gmail.com</li>
						<li>+91 9603858959</li>
					</ul>
				</div>
				<div className="vl"></div>
				<div className="section section3">
					<p>
						The User's personal information can be disclosed and shared with
						partner agencies that render services on behalf of the Graphic
						Store. The services may include money transfer, data storage,
						payment processing etc. These third parties will receive only the
						information required to provide said specific services; the
						information will be kept and protected by the same principles and
						level of protection followed by Graphic Store, and it can not be
						used for any other purposes. © 2015 - 2021 *Your company name*. All
						rights reserved. Powered by X-Cart"
					</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
