import tailwindcss from 'tailwindcss'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow-md min-h-[80vh] flex flex-col gap-6">
      <header className="text-center">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80"
          alt="LoveUFest Logo"
          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
        />
        <h1 className="text-3xl font-bold text-red-500 mb-1">Welcome to LoveUFest!</h1>
        <p className="text-gray-600 text-lg">
          The ultimate celebration of music, love, and community.
        </p>
      </header>
      <section>
        <h2 className="text-xl font-semibold text-blue-700 mb-2">What to Expect</h2>
        <ul className="list-disc pl-5 text-gray-800 space-y-1">
          <li>Live performances from top artists</li>
          <li>Food trucks & local vendors</li>
          <li>Workshops and fun activities</li>
          <li>Family-friendly zones</li>
          <li>Eco-friendly initiatives</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Event Details</h2>
        <p className="text-gray-700">
          <span className="font-semibold">Date:</span> July 20, 2025<br />
          <span className="font-semibold">Location:</span> Central Park, Your City<br />
          <span className="font-semibold">Time:</span> 12:00 PM – 11:00 PM
        </p>
      </section>
      <footer className="text-center mt-auto text-gray-500 text-base">
        Follow us on{' '}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline"
        >
          Instagram
        </a>{' '}
        for updates!
      </footer>
    </div>
  );
}

function About() {
  return <h2 className="text-2xl font-bold text-center mt-10">About Page</h2>;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4 flex justify-center gap-6 mb-6">
        <Link to="/" className="text-blue-700 font-semibold hover:underline">Home</Link>
        <Link to="/about" className="text-blue-700 font-semibold hover:underline">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;