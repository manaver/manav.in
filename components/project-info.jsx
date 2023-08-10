import Link from "next/link";

export default function ProjectInfo({title, subHeading, projectUrl, liveUrl}) {

    const ProjectUrl = (data) => {
        return (
            <>
                <div className="ProjectUrl">
                    {data['data'].isPublic ?
                        <>
                            <Link
                                href={data['data']['url']}
                                target="_url"
                                className="flex cursor-pointer items-center space-x-1"
                            ><span>Check Repository</span>
                                <ion-icon name="arrow-forward-outline"></ion-icon
                                >
                            </Link>
                            <div>It's Open Source</div>
                        </>
                        :
                        <div>It's a hidden gem</div>
                    }
                </div>
            </>
        );
    };

    const LiveUrl = (data) => {
        return (
            <>
                <div className="LiveUrl">
                    {data['data'].isLive
                        ?
                        <Link
                            href={data['data']['url']}
                            target="_url"
                            className="flex items-center space-x-1"
                        ><span>Check Live Project</span>
                            <ion-icon name="arrow-forward-outline"></ion-icon
                            >
                        </Link>
                        :
                        <div>It's not live yet</div>
                    }
                </div>
            </>
        );
    }

    return (
        <>
            <div className="projectCard">
                <h5 className="text-2xl font-bold">
                    {title}
                </h5>
                <p className="subHeading">
                    {subHeading}
                </p>
                <ProjectUrl data={projectUrl}/>
                <LiveUrl data={liveUrl}/>
            </div>
        </>
    );
}