import AnimatedHeaderSection from "../components/AnimatedHeaderSection"

const Services = () => {

    const text = `I build scalable interfaces and pixel-perfect components.
From landing pages to full-stack apps — clean code, SEO-ready, and built for performance.`
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
      subTitle={"One pixel at time"}
      title={"Service"}
      text={text}
      textColor={"text-white"}
      withScrollTrigger={true}
      />
    </section>
  )
}

export default Services
