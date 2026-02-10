import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackgound } from "../components/StarBackground"

export const Home = () => {
    return( 
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle/>
            <StarBackgound/>


        </div>
    )
}
