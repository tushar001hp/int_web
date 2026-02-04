import React from "react"
import './Home.css'

function Home() {
  return (
    <>
    <section className="search-bar-section">
      <div className="container search-bar-wrapper">
        <div className="search-input-group">
          <input
            type="text"
            className="search-input"
            placeholder="Search projects, services..."/>
          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>

    <section className="home-hero">
      <div className="container hero-wrapper">
        <div className="hero-text">
            <h1 className="hero-title">ThoughtFul Design </h1>
            <p className="hero-subtitle">We design residential and commercial spaces that feel intentional, functional, and timeless.</p>
        </div>
        <div className="hero-image-section">
          <img src="/logo.jpeg" alt="Thoughtful Design logo" className="site-logo" />
        </div>
      </div>
    </section>

    <section className="projects-showcase">
      <div className="container">
        <div className="projects-grid">
          <div className="project-card">
            <img className="project-image" src="https://media.istockphoto.com/id/2077892760/photo/minimalist-living-room-interior-with-modern-fireplace-and-white-walls-interior-mockup-3d.jpg?s=612x612&w=0&k=20&c=YngddBAW5wUINAZC8bZTv2nUW2kjxK8I-_dfqSuOY4M=" alt="Modern Living Room" />
            <div className="project-body">
              <h3 className="project-title">Modern Living Room</h3>
              <p className="project-desc">Contemporary design with natural materials.</p>
              <a href="/projects/modern-living-room"></a>
               <a className="btn btn-primary" href="Project">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <img className="project-image" src="https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg" alt="Office Workspace" />
            <div className="project-body">
              <h3 className="project-title">Office Workspace</h3>
              <p className="project-desc">Productive and inspiring work environment.</p>
              <a href="/projects/office-workspace"></a>
                <a className="btn btn-primary" href="Project">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <img className="project-image" src="https://plus.unsplash.com/premium_photo-1661876306620-f2f2989f8f8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="Luxury Bedroom" />
            <div className="project-body">
              <h3 className="project-title">Luxury Bedroom</h3>
              <p className="project-desc">Elegant sanctuary with premium finishes.</p>
              <a href="/projects/luxury-bedroom"></a>  
              <a className="btn btn-primary" href="Project">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home