import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getInfoAnotherUser } from '../../api/api-utils';
import { ContainerLists } from './ContainerLists';
import { BiUser } from 'react-icons/bi';

const ProfileAnotherUser = () => {
  const { userId } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: [userId],
    queryFn: () => getInfoAnotherUser(userId),
  });

  return (
    <div className="pb-24 w-screen pt-10 sm:pl-[16rem]">
      {error && <p>An error has occurred: {error.message}</p>}
      {!isLoading && data.data.ok && (
        <>
          <header className="flex items-center">
            <div className="mx-4 mb-2 bg-gray-200 flex items-center justify-center rounded-full w-32 h-32 overflow-hidden min-[650px]:shadow-md min-[650px]:shadow-slate-600 md:w-52 md:h-52 lg:w-60 lg:h-60">
              {data.data.user.img.secure_url ? (
                <img
                  src={data.data.user.img.secure_url}
                  alt="Profile image"
                  className="object-cover"
                />
              ) : (
                <BiUser className="text-teal text-[4rem] md:text-[7rem] lg:text-[8rem]" />
              )}
            </div>
            <h2 className="text-lg pl-1 pb-20 md:text-2xl lg:text-5xl xl:text-6xl">
              {data.data.user.name}
            </h2>
          </header>
          <ContainerLists lists={data.data.playlists} />
        </>
      )}
    </div>
  );
};

export default ProfileAnotherUser;
