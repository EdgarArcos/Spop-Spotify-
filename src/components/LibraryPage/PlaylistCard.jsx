import { BsPinAngleFill } from "react-icons/bs";

export const PlaylistCard = ({ srcImg, nameList, infoList }) => {
  return (
    <div className="w-32 h-48 group">
      <img
        src={srcImg}
        alt={nameList}
        className="w-32 max-w-none h-32 rounded-xl"
      />
      <h3 className="mt-1.5 text-xs">{nameList}</h3>
      <h4 className="flex mt-0.5 text-[0.65rem]">
        <BsPinAngleFill className="mt-0.5 mr-0.5" />
        <span>{infoList}</span>
      </h4>
    </div>
  );
};
