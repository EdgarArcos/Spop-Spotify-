import { BsPinAngleFill } from "react-icons/bs";

export const PlaylistCard = ({ srcImg, nameList, infoList }) => {
  return (
    <div>
      <img src={srcImg} alt={nameList} />
      <h3>{nameList}</h3>
      <h4>
        <BsPinAngleFill />
        {infoList}
      </h4>
    </div>
  );
};
