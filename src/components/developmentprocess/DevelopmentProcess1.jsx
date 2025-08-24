"use client"

import { useState, useEffect, useRef } from "react";
import "./DevelopmentProcess1.css";

const stages = [
  {
    id: 1,
    title: "Discovery Call & Planning",
    description:
      "Our journey begins with a discovery call, where we take the time to understand your vision, goals, and unique business needs. This stage is all about collaboration—discussing ideas, identifying challenges, and defining the scope of the project. Based on these insights, we move into the design phase, crafting wireframes and design concepts that align with your brand identity.",
    illustration: "/Images/img1.jpg",
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description:
    "Once the plan is in place, our creative team transforms ideas into visual experiences. We craft intuitive designs that reflect your brand identity while focusing on usability and aesthetics. Interactive prototypes are then developed to give you a clear picture of the user journey and overall look and feel of the product. This stage allows for early feedback and ensures that the design is both functional and engaging before moving into full development.",
    illustration: "/Images/design.svg",
  },
  {
    id: 3,
    title: "Development & Coding",
    description:
      "With the designs finalized, our development team brings your vision to life through clean, efficient, and scalable code. We follow best practices and modern technologies to ensure your product is fast, secure, and reliable. At this stage, every feature is carefully built, tested, and integrated to match the planned functionality. Our goal is to create a seamless user experience while maintaining high-quality standards in performance and maintainability.",
    illustration: "/Images/coding.svg",
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description:
      "Before launch, we put your product through a rigorous testing process to ensure everything works flawlessly. Our QA team checks for functionality, performance, compatibility, and security, making sure the solution is bug-free and reliable. This stage guarantees that every feature delivers the intended experience and meets the highest quality standards, so you can move forward with confidence.",
    illustration: "/Images/testing.svg",
  },
  
  {
    id: 5,
    title: "Deployment & Launch",
    description:
      "Once the product passes all quality checks, we move to deployment and make it live for your users. Our team ensures a smooth launch with proper configuration, security setup, and performance optimization. We monitor the rollout closely to guarantee everything functions seamlessly, giving you a confident and successful start.",
    illustration: "/Images/launch.svg",
  },
  {
    id: 6,
    title: "Support and Maintenance",
    description:
      "Our work doesn’t end at launch — we stay with you to ensure long-term success. Through continuous monitoring, updates, and optimizations, we keep your product secure, up to date, and performing at its best. Whether it’s fixing issues, adding new features, or adapting to evolving business needs, our dedicated support and maintenance ensure your solution grows with you.",
   illustration: "/Images/support.svg",
  }
  

]

export default function DevelopmentProcess1() {
  const [activeStage, setActiveStage] = useState(1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef(null)
  const stageRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const windowHeight = window.innerHeight
      const scrollTop = window.pageYOffset

      // Calculate scroll progress within the container
      const startScroll = containerTop - windowHeight / 2
      const endScroll = containerTop + containerHeight - windowHeight / 2
      const progress = Math.max(0, Math.min(1, (scrollTop - startScroll) / (endScroll - startScroll)))

      setScrollProgress(progress)

      // Determine active stage based on scroll position
      const stageHeight = containerHeight / stages.length
      const currentStageIndex = Math.min(stages.length - 1, Math.floor(progress * stages.length))

      setActiveStage(currentStageIndex + 1)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="development-process" ref={containerRef}>
      <div className="container">
        <div className="header">
          <h2 className="title">Our Development Process</h2>
          <p className="subtitle">
            From concept to launch, we follow a proven methodology that ensures your project's success
          </p>
        </div>

        <div className="content">
          {/* Progress Bar */}
          <div className="progress-sidebar">
            <div className="progress-track">
              <div className="progress-fill" style={{ height: `${scrollProgress * 100}%` }} />
            </div>
            <div className="stage-indicators">
              {stages.map((stage, index) => (
                <div
                  key={stage.id}
                  className={`stage-indicator ${activeStage >= stage.id ? "active" : ""}`}
                  style={{ top: `${(index / (stages.length - 1)) * 100}%` }}
                >
                  <div className="stage-number">{stage.id}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stages Content */}
          <div className="stages-content">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                ref={(el) => (stageRefs.current[index] = el)}
                className={`stage ${activeStage >= stage.id ? "active" : ""}`}
              >
                <div className="stage-illustration">
                  <img
                    src={stage.illustration || "/placeholder.svg"}
                    alt={stage.title}
                    className="illustration-image"
                  />
                </div>
                <div className="stage-info">
                  <h3 className="stage-title">{stage.title}</h3>
                  <p className="stage-description">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
