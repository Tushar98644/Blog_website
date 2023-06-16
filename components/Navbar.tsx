// follow javascript mastery tutorial

import Link from "next/link";
import Categories from "./Categories";


const Navbar = () => {
    return (
        <div className="flex flex-row gap-[5vw] p-[4vw] border-b border-blue-400 mb-10 pb-4">
            <div className="flex-1 justify-center items-center text-center ">
                <Link href='/'>
                    <span className="text-white text-left text-5xl font-bold animate-pulse">GraphCMS</span>
                </Link>
            </div>
            <div className="flex flex-row gap-3 ml-8 flex-1 mr-8 justify-center text-white text-xl font-semibold">
              categories
            </div>
        </div>
    );
}

export default Navbar;