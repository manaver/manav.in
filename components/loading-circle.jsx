import {Loader2} from "lucide-react";

export default function LoadingCircle() {
    return <div className="w-full flex justify-center">
        <Loader2 className='animate-spin text-blue-600'/>
    </div>
}