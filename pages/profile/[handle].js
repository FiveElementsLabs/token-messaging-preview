import { useState, useEffect } from 'react';
import { client, getProfileByHandle } from '../../api/profiles';
//import { getFollowers } from '../../api/followers';

import { useRouter } from 'next/router';
import ProfilePage from '../../components/ProfilePage';

export default function Profile() {
  const router = useRouter();
  const { handle } = router.query;
  const [profile, setProfile] = useState({});
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (handle) {
      fetchProfile();
    }
  }),
    [handle, profile];

  async function fetchProfile() {
    try {
      if (handle) {
        console.log('fetchProfile 2: ' + handle);
        const { data } = await client.query(getProfileByHandle(handle)).toPromise();
        console.log(data);
        setProfile(data.profile);
        console.log('profile: ' + profile);
        // const result = await client.query(getFollowers(id)).toPromise();
        // setFollowers(result.data.followers.items);
        // console.log(followers);
      }
    } catch (error) {
      console.log(error.toString());
    }
  }

  return (
    <div>
      {profile ? (
        <ProfilePage
          imageUrl={profile.picture && profile.picture.original ? profile.picture.original.url : ''}
          coverPicture={
            profile.coverPicture && profile.coverPicture.original
              ? profile.coverPicture.original.url
              : ''
          }
          name={profile.name}
          handle={profile.handle}
          stats={profile.stats}
        ></ProfilePage>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
