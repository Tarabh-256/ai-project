import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return(
        <div className="flex items-center p-4">
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu color="#3e9392" />
            </Button> 
        </div>

    );
}

export default Navbar;