import Link from "next/link";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export default function ProjectInfo({title, subHeading, projectUrl, liveUrl}) {

    const ProjectUrl = (data) => {
        return (
            <>
                <div className="ProjectUrl my-2">
                    {data['data'].isPublic ?
                        <>
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <div
                                        className="flex activeItem cursor-pointer items-center space-x-1"
                                    ><span>Check Repository</span>
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </div>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action will redirect to another page.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>
                                            <Link
                                                href={data['data']['url']}
                                                target="_url">
                                                Continue
                                            </Link>
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                            <div>It&apos;s Open Source</div>
                        </>
                        :
                        <div>It&apos;s a hidden gem</div>
                    }
                </div>
            </>
        );
    };

    const LiveUrl = (data) => {
        return (
            <>
                <div className="LiveUrl my-2">
                    {data['data'].isLive
                        ?
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div
                                    className="flex activeItem cursor-pointer items-center space-x-1"
                                ><span>Check Live Project</span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action will redirect to another page.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>
                                        <Link
                                            href={data['data']['url']}
                                            target="_url">
                                            Continue
                                        </Link>
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                        :
                        <div>It&apos;s not live yet</div>
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