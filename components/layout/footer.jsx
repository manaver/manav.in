export default function Footer(){
    return (
        <div
            className="allCenter flex-col space-y-4 relative h-32 p-4">
        <div>
        {/*<Social_icons />*/}
        </div>
        <p>
            © 2023 Manav Verma.
            <a
                href="https://github.com/manaver/manav.in.git"
                className="underline underline-offset-2 italic"
                target="_gh"
            >This website is open source.</a
            >
        </p>
</div>
    );
}