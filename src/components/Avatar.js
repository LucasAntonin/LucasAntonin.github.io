import NeonCircle from "./NeonCircle";

function Avatar({ className }) {
  return (
    <NeonCircle>
      <img
        className={`${className} w-48 h-48 rounded-full selector-image`} src="images/Foxi.png" alt="Rounded avatar"
      />
    </NeonCircle>
  );
}

export default Avatar;
