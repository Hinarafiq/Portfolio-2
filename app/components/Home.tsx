import Image from 'next/image';

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="profile-container">
        <Image src="/Hina M.Rafiq.jpeg" alt="Hina Muhammad Rafiq" width={200} height={200} className="profile-img" />
        <h1>Hi, I'm <span>Hina Muhammad Rafiq</span></h1>
        <p>Passionate about exploring and embracing new technologies particularly in the world of <b> GenAI </b>. With expertise in <i>HTML, CSS, JavaScript and TypeScript</i>. I transform ideas into visually stunning and responsive web applications that captivate and engage.
        </p>
      </div>
    </section>
  )
}
