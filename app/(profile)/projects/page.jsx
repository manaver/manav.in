import Heading from "@/components/Heading";
import LoadingCircle from "@/components/loading-circle";
import dynamic from 'next/dynamic'

const ProjectList = dynamic(() => import("@/components/project-list"), {
    loading: () => <LoadingCircle />
})

export default function Project() {

    const data = [{
        "Title": "Aslam Tour And Travels",
        "Subheading": "Tour and Travel Agency for Travel booking. Specialized in Hajj and Umrah Packages. Also provide custom Packages, Visa and Passport Services.",
        "ProjectUrl": {
            "isPublic": false, "url": "#"
        },
        "LiveUrl": {
            "isLive": true, "url": "https://aslamtourandtravel.xyz/"
        }
    }, {
        "Title": "Hindi Ringtone",
        "Subheading": "A ringtone downloading website designed to download free latest hindi ringtones.",
        "ProjectUrl": {
            "isPublic": false, "url": "#"
        },
        "LiveUrl": {
            "isLive": true, "url": "https://hindiringtone.site/"
        }
    }, {
        "Title": "CodeAPI",
        "Subheading": "CodeAPI is a platform that allows competitive programmers and developers to create and share custom APIs. It offers features such as easy API building, coding functionality implementation, private and public API sharing, extensive test case sorting, and collaboration with other developers.",
        "ProjectUrl": {
            "isPublic": true, "url": "https://github.com/its-working/code-api"
        },
        "LiveUrl": {
            "isLive": true, "url": "http://codeapi.aslamtourandtravel.xyz/"
        }
    }, {
        "Title": "Leaf",
        "Subheading": "Official website for leaf, the Internet’s largest open-source community for questions and answers. (My Hackathon Project)",
        "ProjectUrl": {
            "isPublic": true, "url": "https://github.com/manaver/leaf"
        },
        "LiveUrl": {
            "isLive": false, "url": "#"
        }
    }, {
        "Title": "Travel Journal",
        "Subheading": "Tour Journal is a web application that allows users to plan and document their travel experiences in a single platform. The application includes features such as a blog section for staying updated on travel information, a trip planner for organizing itineraries, and an interactive journal section for documenting and sharing travel memories.",
        "ProjectUrl": {
            "isPublic": true, "url": "https://github.com/WeNewBies/Travel-Journal"
        },
        "LiveUrl": {
            "isLive": false, "url": "#"
        }
    }, {
        "Title": "Blog With Admin Pannel",
        "Subheading": "Blog With Admin Pannel to write blogs and manage them",
        "ProjectUrl": {
            "isPublic": true, "url": "https://github.com/manaver/blog-with-admin-pannel"
        },
        "LiveUrl": {
            "isLive": false, "url": "#"
        }
    }];

    return (<>
        <div className="hero flex justify-center flex-col pt-10">
            <Heading title="The Inside Scoop on My Projects" />
            <ProjectList projects={data} />
        </div>
    </>);
}
