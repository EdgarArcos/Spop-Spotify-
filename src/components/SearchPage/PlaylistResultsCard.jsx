import { useNavigate } from 'react-router-dom';

export const PlaylistResultsCard = ({ playlist }) => {
  const { _id, img, title, user } = playlist;
  const navigate = useNavigate();
  return (
    <div
      className="w-32 h-48 cursor-pointer"
      onClick={() => navigate(`/search/playlist/${_id}`)}
    >
      <img src={img} alt={title} className="w-32 max-w-none h-32 rounded-xl" />
      <h3 className="mt-1.5 text-xs">{title}</h3>
      <h4 className="flex mt-0.5 text-[0.65rem]">{user.name}</h4>
    </div>
  );
};
