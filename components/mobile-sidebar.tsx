'use client'
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    if(!isClient){
        return null
    };
    

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size={"default"} className="md:hidden">
                    <Menu color="#000"  />
                    {/* <AlignJustify size="96" className="text-2xl" color="#000"  /> */}
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar;
