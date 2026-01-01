import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
  return (
    <div className="relative  min-h-screen bg-black text-white">
        {/*Theme Toggle  */}
        <ThemeToggle/>

        {/* Background Effects */}
        <StarBackground/>
        {/* Navbar */}

        {/* Main Content */}


        {/* Footer */}
    </div>
  )
}