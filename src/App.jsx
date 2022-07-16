import { Links } from "./pages/Profile"
import { Projects } from './pages/MyProjects'
import { Post } from "./pages/Posts"
import { Tecnolog } from "./pages/Tecs"

function App() {

  return (
    <div className="text-[#837E9F]">
      <div className='flex'>
        <div className=' md:shrink-0'>
          <Links />
          <Tecnolog />
        </div>
        <div className=' flex-auto md:h-full md:w-full'>
          <Projects />
          <Post />
        </div>
      </div>
      <footer className='footer hover:text-white mt-12'>Feito com 💜 por Victor Schmücker Serpa</footer>
    </div>
  )
}

export default App
