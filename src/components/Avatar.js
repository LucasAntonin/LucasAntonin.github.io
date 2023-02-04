import NeonCircle from "./NeonCircle";

function Avatar() {
    return (
        <NeonCircle>
            <img className="w-48 h-48 rounded-full" src="images/space-cat.jpg" alt="Rounded avatar" />
        </NeonCircle>
    );
}

export default Avatar;