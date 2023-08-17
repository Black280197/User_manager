import { Header } from "../../Component/TopComponent/Header"
import { Navbar } from "../../Component/TopComponent/Navbar"

export const TopLayout = () => {
    return (
        <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-purple-200">
            <Header />
            <Navbar />
        </div>
    )
}