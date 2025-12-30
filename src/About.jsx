import { FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-slate-100 min-h-screen w-screen dark:bg-zinc-900 dark:text-slate-100 transition pt-16 pb-16">

      <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center border-b border-slate-900 dark:border-b-slate-50 animate-fadeIn bg-white/95 dark:bg-zinc-900/95 backdrop-blur z-50">
        <h1 className="text-lg font-semibold animate-fadeIn">
          Hi 👋, I'm Arasu Murali
        </h1>

        <div className="space-x-4">
          <a className="dark:text-slate-200 animate-fadeIn" href="https://www.linkedin.com/in/arasu-murali-73220a345/">LinkedIn</a>
          <a className="dark:text-slate-200 animate-fadeIn" href="mailto:arasu.king.014@gmail.com">Email</a>
          <a className="dark:text-slate-200 animate-fadeIn" href="https://github.com/arasulee">GitHub</a>
          <a className="dark:text-slate-200 animate-fadeIn" href="/Arasu-Murali.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <button
            className="animate-fadeIn"
            aria-label="Toggle theme"
            onClick={() => {
              document.documentElement.classList.toggle('dark')
              const isDark = document.documentElement.classList.contains('dark')
              localStorage.theme = isDark ? 'dark' : 'light'
            }}
          >
            ☾
          </button>
        </div>
      </nav>

      <div className="p-3 m-2 flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-col space-y-2 text-left text-xl animate-fadeIn">
          <p>🚀 Currently working on : Web Development projects</p>
          <p>📚 Learning : Backend Development and Computer Networking</p>
          <p>😸 Fun fact : I love playing Cricket</p>
        </div>
      </div>

      <div className="p-3 m-2">
        <h2 className="font-bold text-2xl text-center animate-fadeIn">🛠️ Technical Skills</h2>

        <div className="p-3 m-2">
          <h3 className="font-serif text-xl text-center animate-fadeIn">Frontend</h3>
          <div className="p-3 m-2 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-flow-col lg:auto-cols-max w-fit text-center gap-3 justify-center">
              <div className="px-4 py-2 border-2 border-slate-400 text-slate-700 dark:text-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-700 hover:text-white hover:border-slate-700 transition animate-fadeIn">HTML5</div>
              <div className="px-4 py-2 border-2 border-blue-400 text-blue-700 dark:text-blue-300 dark:border-blue-300 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition animate-fadeIn">CSS3</div>
              <div className="px-4 py-2 border-2 border-yellow-500 text-yellow-700 dark:text-yellow-300 rounded-lg hover:bg-yellow-600 hover:text-white hover:border-yellow-600 transition animate-fadeIn"> JavaScript</div>
              <div className="px-4 py-2 border-2 border-cyan-500 text-cyan-700 dark:text-cyan-300 rounded-lg hover:bg-cyan-600 hover:text-white hover:border-cyan-700 transition animate-fadeIn">React</div>
              <div className="px-4 py-2 border-2 border-teal-500 text-teal-700 dark:text-teal-300 rounded-lg hover:bg-teal-800 hover:text-white hover:border-teal-700 transition animate-fadeIn">Tailwind CSS</div>
            </div>
          </div>
        </div>

        <div className="p-3 m-2">
          <h3 className="font-serif text-xl text-center">Languages</h3>
          <div className="p-3 m-2 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-flow-col lg:auto-cols-max w-fit text-center gap-3 justify-center">
              <div className="px-4 py-2 border-2 border-emerald-400 text-emerald-700 dark:text-emerald-300 rounded-lg hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition animate-fadeIn">Python</div>
              <div className="px-4 py-2 border-2 border-orange-400 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-700 hover:text-white hover:border-orange-700 transition animate-fadeIn">Java</div>
            </div>
          </div>
        </div>

        <div className="p-3 m-2">
          <h3 className="font-serif text-xl text-center">Database</h3>
          <div className="p-3 m-2 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-flow-col lg:auto-cols-max w-fit text-center gap-3 justify-center">
              <div className="px-4 py-2 border-2 border-sky-400 text-sky-700 dark:text-sky-300 rounded-lg hover:bg-sky-700 hover:text-white hover:border-sky-700 transition animate-fadeIn">MySQL</div>
              <div className="px-4 py-2 border-2 border-green-500 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-700 hover:text-white hover:border-green-700 transition animate-fadeIn">MongoDB</div>
            </div>
          </div>
        </div>

        <div className="p-3 m-2">
          <h3 className="font-serif text-xl text-center">Tools & Technologies</h3>
          <div className="p-3 m-2 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-flow-col lg:auto-cols-max w-fit text-center gap-3 justify-center">
              <div className="px-4 py-2 border-2 border-slate-500 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-800 hover:text-white hover:border-slate-800 transition animate-fadeIn">GitHub</div>
              <div className="px-4 py-2 border-2 border-blue-500 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-700 hover:text-white hover:border-blue-700 transition animate-fadeIn">VS Code</div>
              <div className="px-4 py-2 border-2 border-neutral-500 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-800 hover:text-white hover:border-neutral-800 transition animate-fadeIn">Vercel</div>
            </div>
          </div>
        </div>
      </div>


      <div className="p-3 m-2 mb-1">
        <h3 className="font-serif text-xl text-center">Get in Touch</h3>
          <div className="p-3 m-2 flex justify-center">
            <div className="grid grid-cols-4 gap-4 w-fit text-center">
              <a href="https://wa.me/8608166921" aria-label="WhatsApp" title="WhatsApp" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border-2 border-emerald-400 text-emerald-700 dark:text-emerald-300 dark:border-emerald-600 hover:bg-emerald-700 hover:text-white transition animate-fadeIn">
                <FaWhatsapp size={18} />
                <span className="sr-only">WhatsApp</span>
              </a>

              <a href="https://www.instagram.com/arasu._.14/" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border-2 border-pink-500 text-pink-600 dark:text-pink-300 dark:border-pink-600 hover:bg-pink-600 hover:text-white transition animate-fadeIn">
                <FaInstagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>

              <a href="https://www.facebook.com/arasuleee" aria-label="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border-2 border-blue-600 text-blue-700 dark:text-blue-300 dark:border-blue-600 hover:bg-blue-700 hover:text-white transition animate-fadeIn">
                <FaFacebookF size={18} />
                <span className="sr-only">Facebook</span>
              </a>

              <a href="https://x.com/arasu_lee_28" aria-label="Twitter" title="Twitter" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border-2 border-sky-400 text-sky-700 dark:text-sky-300 dark:border-sky-500 hover:bg-sky-700 hover:text-white transition animate-fadeIn">
                <FaTwitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-2 text-center border-t border-slate-400 dark:border-slate-600 dark:text-slate-300 animate-fadeIn bg-white/95 dark:bg-zinc-900/95 backdrop-blur z-40">
        <div className="font-semibold">&copy; 💻 Crafted by Arasu Murali</div>
      </footer>
    </div> 
  );
};

export default About;
