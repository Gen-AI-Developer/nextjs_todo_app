// Colors [#145DA0] - primary
import Image from "next/image";
export default function NavBar() {
    return <>
        <nav className="flex flex-row m-3 p-2 bg-white">
            <Image
                src="/public/remainderlogoBluelarge.png"
                width={50}
                height={50}
                alt="Picture of the author"
            />
        </nav>

    </>
}