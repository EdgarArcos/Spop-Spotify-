import { useContext, useState } from 'react';
import { UsersContext } from '../../context/UsersContext';
import { useEffect } from 'react';
import { followPlaylist } from '../../api/userRequests';

export const ButtonFollowPlaylist = ({ playlistId }) => {
  const { user, editFollowedPlaylists } = useContext(UsersContext);

  const [isFollowed, setIsFollowed] = useState(false);

  useEffect(() => {
    const checkIsFollowed = user.followedPlaylists.filter(
      (playlist) => playlist._id === playlistId
    );
    return checkIsFollowed.length > 0
      ? setIsFollowed(true)
      : setIsFollowed(false);
  }, [playlistId]);

  const handleFollowPlaylist = async () => {
    const res = await followPlaylist({ userId: user._id, playlistId });
    if (res.data.ok) {
      editFollowedPlaylists(res.data.followedPlaylists);
      setIsFollowed(!isFollowed);
    }
  };

  return (
    <button
      className="border m-4 border-teal w-24 text-sm text-teal rounded-full p-2"
      onClick={handleFollowPlaylist}
    >
      {isFollowed ? 'Following' : 'Follow'}
    </button>
  );
};
