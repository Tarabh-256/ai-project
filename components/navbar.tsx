
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";

const Navbar = () => {
    return (
        <div className="flex items-center p-3 shadow-md">
            <MobileSidebar/>
            <nav>
                <ul className="flex items-center gap-4">
                    <li>
                        <a href="#" className="text-sm font-medium text-black hover:text-gray-400">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm font-medium text-black hover:text-gray-400">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm font-medium text-black hover:text-gray-400">Services</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm font-medium text-black hover:text-gray-400">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="flex w-full justify-end">
                <UserButton />
            </div>
        </div>

    );
}

export default Navbar;