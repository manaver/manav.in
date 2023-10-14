import Link from "next/link";
import GetIcon from "../get-icons";

export default function SocialIcons() {

    return (
        <>
            <div className="socialIcons flex flex-row w-fit mx-auto my-8 border-2 p-3 rounded-xl space-x-4 text-2xl">
                <Link href="https://twitter.com/Manav1924" 
                    aria-label="twitter"
                    target="_contact">
                    <GetIcon iconName="Twitter"
                        attributes="cursor-pointer hover:text-blue-600"
                    />
                </Link>
                <Link href="https://github.com/manaver" 
                    aria-label="github"
                    target="_contact">
                    <GetIcon iconName="Github"
                        attributes="cursor-pointer hover:text-gray-600"
                    />
                </Link>
                <Link   
                    href="https://www.linkedin.com/in/manav-verma-590a92204/"
                    aria-label="linkedin"
                    target="_contact"
                >
                    <GetIcon iconName="Linkedin"
                        attributes="cursor-pointer hover:text-blue-700"
                    />
                </Link>
                <Link 
                    href="https://api.whatsapp.com/send?phone=916006572059" 
                    aria-label="whatsapp"
                    target="_contact"
                    >
                    <GetIcon iconName="MessageCircle"
                        attributes="cursor-pointer hover:text-green-600"
                    />
                </Link>
                <Link
                    href="mailto:manavverma.me+work@gmail.com"
                    aria-label="mail"
                >
                    <GetIcon iconName="Mail"
                        attributes="cursor-pointer hover:text-red-600"
                    />
                </Link>
            </div>
        </>
    );
}