// follow javascript mastery tutorial

import Link from "next/link";
import Categories from "./Categories";

const categories = [
    {
        id: 1,
        name: "Javascript",
        slug: "javascript"
    },
    {
        id: 2,
        name: "React",
        slug: "react"
    },
];

const Navbar = () => {
    return (
        <div className="flex flex-row gap-[5vw] p-[4vw] pb-0 border-b border-blue-400">
            <div className="flex-1 ml-12 justify-center items-center text-center ">
              <Link href='/'>
                <span className="text-white text-left text-5xl font-bold animate-pulse">GraphCMS</span>
              </Link>
            </div>
            <div className="flex flex-row gap-3 ml-8 flex-1 mr-8 justify-center text-white text-xl font-semibold">
                {categories.map((category, index) => (
                    <Link href={`/category/${category.slug}`} key={category.id}>
                        <Categories name={category.name}  key={category.id}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navbar;