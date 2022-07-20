import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Grid, GridItem } from '@chakra-ui/react';

import SocialProfileWithImage from '../components/SocialProfileWithImage';

import { client, recommendedProfiles } from '../api/profiles';

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    try {
      const response = await client.query(recommendedProfiles).toPromise();
      console.log(response);
      setProfiles(response.data.recommendedProfiles);
    } catch (error) {
      console.log(error);
    }
  }

  //return (
  // <div>
  //   {profiles.map((profile, index) => {
  //     return (
  //       <Link href={`profile/${profile.handle}`} key={index}>
  //         <a>
  //           <div>
  //             {profile.picture && profile.picture.original ? (
  //               <Image src={profile.picture.original.url} width="60px" height="60px" />
  //             ) : (
  //               <div style={{ width: '60px', height: '60px', backgroundColor: 'gray' }}></div>
  //             )}
  //             <h4>{profile.handle}</h4>
  //             <p>{profile.bio}</p>
  //           </div>
  //         </a>
  //       </Link>
  //     );
  //   })}
  // </div>

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} padding={100}>
      {profiles.map((profile, index) => {
        return (
          <Link href={`/profile/${profile.handle}`} key={index}>
            <GridItem w="100%" h="100%">
              <SocialProfileWithImage
                imageUrl={
                  profile.picture && profile.picture.original ? profile.picture.original.url : ''
                }
                coverPicture={
                  profile.coverPicture && profile.coverPicture.original
                    ? profile.coverPicture.original.url
                    : ''
                }
                name={profile.name}
                handle={profile.handle}
                stats={profile.stats}
              ></SocialProfileWithImage>
            </GridItem>
          </Link>
        );
      })}
    </Grid>
  );
}
// );
//}
