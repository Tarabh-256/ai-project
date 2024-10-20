import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/utils/theme-toggler";
import Image from "next/image";
import Link from "next/link";
import '@/app/(landing)/style.css'

const LandingPage = () => {
    return (
        <>
            <div className="flex bg-slate-800 justify-around items-center  p-2">
                <div className="w-10 h-10 justify-center relative ml-2">
                    <Link href="/">
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.png"
                        />
                    </Link>
                </div>
                <div className="flex gap-3">
                    <Link href="/sign-in">
                        <Button variant={"secondary"}>
                            Login
                        </Button>
                    </Link>

                    <Link href="/sign-up">
                        <Button>
                            Register
                        </Button>
                    </Link>
                    <ModeToggle />
                </div>

            </div>


            <div className="body h-[calc(100vh-74px)] m-auto place-content-center w-full ">
                <div className="card">
                    <h1>Landing Page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ad exercitationem voluptatem ullam et, natus impedit quae veniam optio a doloremque officiis beatae, itaque nesciunt nostrum quasi molestiae laudantium dolor asperiores soluta sint sed ratione cupiditate. Laudantium earum reiciendis enim.</p>
                </div>
                <div className="m-auto w-full text-center justify-center flex-col">
                    <p className="text-white pt-4 m-5 italic shadow-2xl">Team- Bharat Yadav, Ansh Dubey, Dev Gupta</p>
                </div>
            </div>
        </>
    );
}
export default LandingPage;