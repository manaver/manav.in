import Image from "next/image";
import Heading from "@/components/Heading";

export default function About() {
    return (
        <>
            <div
                className="hero flex justify-center flex-col pt-10">
                <Heading title="The Untold Stories"/>

                <div className="pageContent flex justify-start flex-col-reverse items-center">
                    <div className="content py-5 p-3 md:p-1 md:w-3/5 space-y-8">
                        <h1
                            className="pe-10 md:pe-24 text-4xl w-full md:text-5xl font-bold">
                            Hi there,<br/>I'm Manav Verma.
                        </h1>
                        <div className="pe-10 md:pe-24 flex flex-col">
                            <p>
                                I am a passionate full-stack developer and freelancer with a strong
                                interest in open source and DevOps. I am skilled at writing clean
                                and functional web designs, and I am always looking for ways to
                                improve my skills in web development.
                            </p>
                            <div className="mt-3 flex flex-col space-y-3">
                                <p>Some of the projects I have worked on include:</p>
                                <ul className="list-disc pl-5 my-2 space-y-1">
                                    <li>
                                        Aslam Tour and Travels - A tour and travel agency specialized in
                                        Hajj and Umrah packages, custom packages, and visa and passport
                                        services.
                                    </li>
                                    <li>
                                        Hindi Ringtones - A ringtone downloading website designed to download free latest hindi ringtones.
                                    </li>
                                    <li>
                                        CodeAPI - I built CodeAPI, a platform for building and
                                        distributing custom APIs, designed for competitive programmers
                                        and developers, in a hackathon.
                                    </li>
                                    <li>
                                        Travel Journal - I created a web application for planning and
                                        documenting travel experiences, including a blog section, trip
                                        planner, and interactive journal, in a 1-day hackathon.
                                    </li>
                                </ul>
                                <p>
                                    I am proficient in the following programming languages and
                                    frameworks:
                                </p>
                                <ul className="list-disc pl-5 my-2 space-y-1">
                                    <li>PHP</li>
                                    <li>Laravel</li>
                                    <li>Next.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>Bootstrap</li>
                                </ul>
                                <p>I am also familiar with MySQL and Appwrite as databases.</p>
                                <p>
                                    Apart from coding, I enjoy spending my free time engaging in
                                    badminton and running, as well as exploring the outdoors.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="image p-10 md:p-1">
                        <Image
                            className="rounded-xl w-[300px]"
                            src="/manav.jpg"
                            alt=""
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}