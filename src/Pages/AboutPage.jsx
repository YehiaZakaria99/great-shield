import AboutPageCard from "../Components/AboutPageCard/AboutPageCard";
import AboutOverview from "../Sections/AboutOverview";

// imgs
import ourVision from "../assets/aboutSec/Our-Vision.webp";
import ourMessage from "../assets/aboutSec/Our-Message.webp";
import ourMissoin from "../assets/aboutSec/Our-Mission.webp";
import ourStandards from "../assets/aboutSec/Our-Standards.webp";
import MoreOurMessage from "../Sections/AboutPageViewMore/MoreOurMessage";

export default function AboutPage() {
  return (
    <section className="pt-32 pb-16 bg-[#111] text-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <AboutOverview />

        <AboutPageCard
          title="Our Vision"
          text="To become the leading construction company recognized for quality and innovation."
          id="vision-details"
          img={ourVision}
          moreContent={
            <p className="text-gray-300 text-lg leading-relaxed">
              Our vision guides every decision we make — focusing on quality,
              innovation, and sustainability in all our projects.
            </p>
          }
        />

        <AboutPageCard
          title="Our Mission"
          text="Delivering exceptional construction services with a commitment to integrity and excellence."
          id="mission-details"
          img={ourMissoin}
          moreContent={
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is not just about building structures, but about
              building lasting relationships with our clients.
            </p>
          }
        />

        <AboutPageCard
          title="Our Standards"
          text="We maintain the highest standards in safety, quality, and sustainability."
          id="standards-details"
          img={ourStandards}
          moreContent={
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
              <li>Strict safety protocols across all job sites.</li>
              <li>Use of eco-friendly materials and processes.</li>
              <li>Continuous quality assessment and improvement.</li>
            </ul>
          }
        />

        <AboutPageCard
          title="Our Message"
          text="Building the future with trust, transparency, and teamwork."
          id="message-details"
          img={ourMessage}
          moreContent={<MoreOurMessage />}
        />
      </div>
    </section>
  );
}

/* 










*/
