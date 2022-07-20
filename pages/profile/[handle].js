import { useState, useEffect } from 'react';
import { client, getProfile } from '../../api/profiles';
//import { getFollowers } from '../../api/followers';

import { useRouter } from 'next/router';
import SocialComponentWithImage from '../../components/SocialComponentWithImage';

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState({});
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (id) {
      fetchProfile();
    }
  }),
    [id, profile];

  async function fetchProfile() {
    try {
      if (id) {
        console.log('fetchProfile: ' + id);
        const { data } = await client.query(getProfile(id)).toPromise();

        setProfile(data.profiles.items[0]);
        console.log(profile);
        const result = await client.query(getFollowers(id)).toPromise();
        setFollowers(result.data.followers.items);
        console.log(followers);
      }
    } catch (error) {
      console.log(error.toString());
    }
  }

  return (
    <div>
      {profile ? (
        <SocialComponentWithImage
          imageUrl={profile.picture && profile.picture.original ? profile.picture.original.url : ''}
          coverPicture={
            profile.coverPicture && profile.coverPicture.original
              ? profile.coverPicture.original.url
              : ''
          }
          name={profile.name}
          handle={profile.handle}
          stats={profile.stats}
        ></SocialComponentWithImage>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
