import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Grid, GridItem } from '@chakra-ui/react';

import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import ProfileCard from '../components/ProfileCard';

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

  return (
    <div>
      <Navbar />
      <Hero />
      <Grid templateColumns="repeat(4, 1fr)" gap={6} padding={100}>
        {profiles.map((profile, index) => {
          return (
            <Link href={`/profile/${profile.handle}`} key={index}>
              <GridItem w="100%" h="100%">
                <ProfileCard
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
                ></ProfileCard>
              </GridItem>
            </Link>
          );
        })}
      </Grid>
    </div>
  );
}
// );
//}
