import Link from "next/link";

const Categories = ({ name}: { name: string }) => {
    return (
        <div>
                <h1>{name}</h1>
        </div>
    );
}

export default Categories;