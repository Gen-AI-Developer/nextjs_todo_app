// Colors [#145DA0] - primary
import Image from "next/image";
export default function NavBar() {
    return <>
        <nav className="flex flex-row m-3 p-2 bg-white border rounded-lg">
            <div className="flex items-center ">
                <Image

                    src={"/remainderlogoBluelarge.png"}
                    width={50}
                    height={50}
                    quality={50}
                    alt="Picture of the author"
                    priority={false}
                />
                <span className="ml-4 font-bold text-1xl text-[#145DA0]"> Reminder AI</span>

            </div>
        </nav>

    </>
}