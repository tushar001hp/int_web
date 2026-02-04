import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
	return (
		<section id="profile" className="profile-section">
			<div className="profile-card">
				<div className="profile-left">
					<div className="avatar" aria-hidden="true">TJ</div>
					<h1 className="name">Tushar Jamwal</h1>
					<p className="role">Interior Designer</p>
					<p className="location">India (H.P)</p>
					<div className="contact-list">
						<a href="mailto:jasmine@example.com" className="contact-item">Tusharjamwal001@gmail.com</a>
						<a href="tel:+1234567890" className="contact-item">+91 8091957184</a>
					</div>
				</div>

				<div className="profile-right">
					<h2>About</h2>
					<p className="bio">I design contemporary residential spaces focused on light, texture and materiality. My work balances function with calm aesthetics and sustainable materials.</p>

					<h3>Skills</h3>
					<ul className="skills">
						<li>Space Planning</li>
						<li>Material Selection</li>
						<li>3D Rendering</li>
						<li>Client Presentations</li>
					</ul>

					<h3>Portfolio</h3>
					<div className="portfolio-grid">
						<div className="thumb">
							<img src="https://www.oppeinhome.com/upload/images/ueditor/20230710/10-modern-living-room-ideas-1.webp" alt="Living Room" />
						</div>
						<div className="thumb">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zXD0_q57SdjKmBB8w9hSAnwKSNGBHh1beA&s" alt="Kitchen" />
						</div>
						<div className="thumb">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48NTEINIEDVDbk7mDIrV-iCfILQWtjG1-Bg&s" alt="Bedroom" />
						</div>
						<div className="thumb">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzOKOtGu-GDhXn53zcJ_Yx0Xqdw7_6Rt4YTw&s" alt="Bathroom" />
						</div>
					</div>

					<div className="actions">
						<Link to="/Project" className="btn primary">See Projects</Link>
						<Link to="/Contact" className="btn">Contact Me</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Profile

