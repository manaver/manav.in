import {Github, Linkedin, MessageCircle, Twitter} from "lucide-react";
import Link from "next/link";

export default function SocialIcons()
{
    return (
        <>
            <div className="socialIcons flex flex-row w-fit mx-auto my-8 border-2 p-3 rounded-xl space-x-4 text-2xl">
                <Link href="https://twitter.com/Manav1924" target="_contact">
                    <Twitter
                        className="cursor-pointer hover:text-blue-600"
                    />
                </Link>
                <Link href="https://github.com/manaver" target="_contact">
                    <Github
                        className="cursor-pointer hover:text-gray-600"
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/manav-verma-590a92204/"
                    target="_contact"
                >
                    <Linkedin
                        className="cursor-pointer hover:text-blue-700"
                    />
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=916006572059" target="_contact">
                    <MessageCircle
                        class="cursor-pointer hover:text-green-600"
                    />
                </Link>
            </div>
        </>
    );
}