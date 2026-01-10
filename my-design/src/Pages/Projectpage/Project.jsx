
import React, { useState } from 'react'
import './Project.css'

function Project() {
	const images = [
		'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1400&q=80',
		'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1400&q=80',
		'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
		'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
		'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80'
	]

	const [index, setIndex] = useState(0)
	const [saved, setSaved] = useState(false)

	return (
		<div className="project-card">
			<div className="project-media">
				<img className="project-hero" src={images[index]} alt={`Project view ${index + 1}`} />

				<div className="project-thumbs" role="list">
					{images.map((src, i) => (
						<button
							key={i}
							className={`thumb ${i === index ? 'selected' : ''}`}
							onClick={() => setIndex(i)}
							aria-label={`Show image ${i + 1}`}
						>
							<img src={src} alt={`Thumbnail ${i + 1}`} />
						</button>
					))}
				</div>
			</div>

			<div className="project-content details-panel">
				<h1 className="project-title">Modern Living Room</h1>
				<p className="project-meta muted">Residential · 2025 · New York</p>

				<div className="chips">
					<span className="chip">Residential</span>
					<span className="chip">Sustainable Materials</span>
					<span className="chip">Natural Light</span>
				</div>

				<p className="project-desc">
					This project reimagines a living space with warm neutrals, layered textures, and bespoke millwork. We focused on natural light, durable materials, and flexible seating to make the room comfortable for family life and entertaining.
				</p>

				<ul className="features">
					<li>Custom millwork and built-ins</li>
					<li>Layered lighting plan</li>
					<li>Durable, kid-friendly finishes</li>
				</ul>

				<div className="project-stats">
					<div className="stat">
						<strong>1200</strong>
						<span>sq ft</span>
					</div>
					<div className="stat">
						<strong>3</strong>
						<span>Bedrooms</span>
					</div>
					<div className="stat">
						<strong>8</strong>
						<span>Weeks</span>
					</div>
				</div>

				<div className="project-actions">
					<a className="btn btn-primary" href="#">View Project</a>
					<button
						className="btn btn-ghost"
						onClick={() => setSaved(s => !s)}
						aria-pressed={saved}
					>
						{saved ? 'Saved ✓' : 'Save'}
					</button>
					<a className="btn" href="mailto:hello@studio.example">Contact Designer</a>
				</div>
			</div>
		</div>
	)
}

export default Project
