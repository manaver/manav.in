import { icons } from 'lucide-react';

export default function GetIcon({iconName, attributes}){
    const LucideIcon = icons[iconName];

    return <LucideIcon className={attributes} />;
}