'use client';
import { useState } from "react";

export default function Home() {
  // YouTube search state
  const [search, setSearch] = useState("");
  function handleYouTubeSearch(e: React.FormEvent) {
    e.preventDefault();
    if (search.trim()) {
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(search)}`, "_blank");
    }
  }

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">PulseHustle</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-bg h-96 flex items-center justify-center text-white" style={{background: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(https://via.placeholder.com/1200x600?text=Home+Solutions)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to PulseHustle</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6">Affordable Home Solutions with Hard Work, Honesty, and Community</p>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-base sm:text-lg">Get Started</a>
        </div>
      </section>

      {/* YouTube Search Bar */}
      <section className="py-8 bg-white flex flex-col items-center">
        <form onSubmit={handleYouTubeSearch} className="w-full max-w-lg flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type anything you want to learn here (e.g., how to fix a leaky faucet)"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Search YouTube</button>
        </form>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">About Vince, Entrepreneur Dang</h2>
          <p className="text-base sm:text-lg text-center max-w-3xl mx-auto">
            Hello, I&apos;m Vince, known as Entrepreneur Dang, and I&apos;m the founder of PulseHustle. My journey began with a simple desire to create and help others. Growing up, I loved fixing things and discovered my passion for offering solutions to everyday challenges. Driven by hard work, honesty, and community, I started PulseHustle to provide quality help without the need for formal licensing, focusing on straightforward, reliable support.
          </p>
          <p className="text-center mt-4">
            <a href="https://www.nestinghomesolutions.com/experience" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View My Experience</a>
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Fencing Support</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">We offer hands-on fencing assistance, helping you install or repair fences to boost your property&apos;s look and security—affordable help at prices often 50% less than big companies, no license required.</p>
              <a href="#contact" className="text-blue-600 hover:underline text-sm sm:text-base">Learn More</a>
            </div>
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Home Upkeep Assistance</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">We provide practical support for home upkeep, tackling minor repairs and maintenance tasks with care and honesty, no licensing needed—just reliable help you can trust.</p>
              <a href="#contact" className="text-blue-600 hover:underline text-sm sm:text-base">Learn More</a>
            </div>
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Painting Help</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">We assist with interior and exterior painting to refresh your space, offering quality support at fair prices without the need for formal licensing.</p>
              <a href="#contact" className="text-blue-600 hover:underline text-sm sm:text-base">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* CYA Disclosure Section */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Cover Your Ass (CYA): Work Safe, Work Smart</h2>
          <p className="mb-4 text-base text-center">
            Below are links to resources and articles that discuss jobs or tasks under $1,000 that individuals can often perform without a license and with minimal risk of state repercussions in the U.S. These focus on roles or services considered minor, casual, or exempt from licensing, thus reducing legal oversight. However, state and local regulations vary widely, and even small jobs can face scrutiny if they involve safety, permits, or exceed cost thresholds. Always check your specific state and local laws to confirm compliance and avoid penalties.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <a href="https://www.nextinsurance.com/blog/how-much-work-can-you-do-without-a-contractor-license/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Next Insurance - "How Much Work Can You Do Without a Contractor License?"
              </a>
              <span className="block text-sm text-gray-600">Explains that in many U.S. states, handyman work under $1,000 (labor and materials) is often exempt from contractor licensing if it's minor or casual, like small repairs or painting. It notes exceptions (e.g., no electrical, plumbing, or structural work) to help you avoid state penalties. Check your state's contractor board for exact limits and rules.</span>
            </li>
            <li>
              <a href="https://www.handymanstartup.com/handyman-license/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Handyman Startup - "Handyman Licenses and Laws - How To Avoid Getting Stung"
              </a>
              <span className="block text-sm text-gray-600">Highlights that most states don't require a handyman license for minor home repairs or maintenance under $1,000, such as fixing fences or basic cleaning. It emphasizes understanding local laws to stay compliant and avoid fines or legal issues from state authorities.</span>
            </li>
            <li>
              <a href="https://www.getjobber.com/handyman/handyman-licensing-requirements/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                GetJobber - "Handyman Licensing Requirements in the U.S. and Canada"
              </a>
              <span className="block text-sm text-gray-600">Published August 30, 2024, this outlines states like Arizona, where jobs under $1,000 don't need a contractor license, covering tasks like minor carpentry or painting. It advises checking local regulations to protect against state enforcement, as permits or safety rules might still apply.</span>
            </li>
            <li>
              <a href="https://www.contractorslicensingschools.com/new-2025-rules-do-you-need-a-license-for-small-jobs-in-california/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Contractors Licensing Schools - "New 2025 Rules: Do You Need a License for Small Jobs in California?"
              </a>
              <span className="block text-sm text-gray-600">Published April 16, 2025, this notes California's threshold for unlicensed work rose to $1,000 starting January 1, 2025, per AB 2622. It covers minor tasks like fence repair or small painting jobs, helping you stay safe from state repercussions if you keep projects simple and within limits.</span>
            </li>
            <li>
              <a href="https://www.ziprecruiter.com/Jobs/No-License-Required" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                ZipRecruiter - "No License Required Jobs"
              </a>
              <span className="block text-sm text-gray-600">Lists over 512,301 jobs (e.g., house cleaning, lawn care, mobile car detailing) that typically don't require licenses and often fall under $1,000 per job. These roles face minimal state oversight if no permits or specialized skills are needed—verify local rules to protect yourself.</span>
            </li>
          </ul>
          <div className="text-sm text-gray-700 space-y-2">
            <p>An X post from May 30, 2025, by @bsomebodyK suggests cottage food operations, where you can make shelf-stable foods (e.g., jams, baked goods) from home for under $1,000 in startup costs, often with little to no licensing. Check your state's cottage food laws to avoid issues.</p>
            <p>Tasks like gutter cleaning, window washing, or junk removal (noted in an X post by @mhp_guy, October 22, 2024) are low-cost and typically unlicensed, but states may intervene if you advertise as a contractor, exceed cost limits, or touch regulated systems (e.g., electrical).</p>
            <p className="font-semibold">Protection Tips: Keep jobs under $1,000 (labor and materials), avoid work requiring permits (e.g., plumbing, electrical), document all transactions, and consult your state's contractor board or labor department for exemptions. Non-compliance risks fines, stop-work orders, or legal action.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-12 sm:py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Join PulseHustle Today!</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
            Whether you need assistance with fencing, home upkeep, or painting, or want to share your skills, PulseHustle is your platform to grow, give back, and hustle with purpose—no licensing required, just dedication and community spirit.
          </p>
          <a href="mailto:Pulsehustle2025@gmail.com" className="bg-white text-blue-600 hover:bg-gray-100 py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-base sm:text-lg">Contact Us</a>
          <div className="mt-4 text-lg">Phone: <a href="tel:9166342083" className="underline">916-634-2083</a></div>
          <div className="mt-1 text-lg">Email: <a href="mailto:Pulsehustle2025@gmail.com" className="underline">Pulsehustle2025@gmail.com</a></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 PulseHustle. All rights reserved.</p>
          <p className="mt-2">Email: <a href="mailto:Pulsehustle2025@gmail.com" className="hover:underline">Pulsehustle2025@gmail.com</a></p>
          <p className="mt-2">Phone: <a href="tel:9166342083" className="hover:underline">916-634-2083</a></p>
        </div>
      </footer>
    </div>
  );
}
