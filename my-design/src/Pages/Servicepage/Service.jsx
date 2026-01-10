import React, { useEffect, useRef } from 'react';
import './Service.css';

const services = [
	{
		title: 'Space Planning',
		desc: 'Optimized layouts that balance function and flow for homes and offices.',
	},
	{
		title: 'Interior Styling',
		desc: 'Choose palettes, textures and furnishings to create distinctive interiors.',
	},
	{
		title: 'Lighting Design',
		desc: 'Layered lighting plans that enhance mood and highlight architecture.',
	},
	{
		title: '3D Visualization',
		desc: 'Photoreal renders and walkthroughs to preview your finished space.',
	},
	{
		title: 'Custom Furniture',
		desc: 'Bespoke pieces designed to fit your needs and aesthetics.',
	},
	{
		title: 'Project Management',
		desc: 'End-to-end coordination from concept through installation.',
	},
];

export default function Service() {
	const refs = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15 }
		);

		refs.current.forEach((el) => el && observer.observe(el));

		return () => observer.disconnect();
	}, []);

	return (
		<section className="services-section" aria-labelledby="services-heading">
			<div className="services-graphics" aria-hidden="true">
				<div className="blob blob--left"></div>
				<div className="blob blob--right"></div>
			</div>

			<div className="services-inner">
				<header className="services-header">
					<h2 id="services-heading">Our Interior Design Services</h2>
					<p className="services-lead">Beautiful, functional spaces tailored to your life.</p>
				</header>

				<ul className="services-grid">
					{services.map((s, i) => (
						<li
							key={s.title}
							className="service-card"
							ref={(el) => (refs.current[i] = el)}
							style={{ ['--delay']: `${i * 80}ms` }}
						>
							<div className="card-badge" aria-hidden="true">
								<svg viewBox="0 0 24 24" className="badge-icon">
									<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
								</svg>
							</div>
							<div className="card-body">
								<h3 className="card-title">{s.title}</h3>
								<p className="card-desc">{s.desc}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
