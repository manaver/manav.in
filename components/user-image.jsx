import Image from "next/image";

export default function UserImage() {
    return <>
        <div className="image p-10 md:p-1">
            <Image
                className="rounded-xl w-[300px]"
                src="/manav.jpg"
                alt=""
                width={500}
                height={500}
            />
        </div>
    </>
}