import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { client, recommendedProfiles } from '../api';

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
      {profiles.map((profile, index) => {
        //return <p>{profile.handle}</p>;
        return (
          <Link href={`profiles/${profile.handle}`} key={index}>
            <a>
              <div>
                {profile.picture ? (
                  <Image src={profile.picture.original.url} width="60px" height="60px" />
                ) : (
                  <div style={{ width: '60px', height: '60px', backgroundColor: 'gray' }}></div>
                )}
                <h4>{profile.handle}</h4>
                <p>{profile.bio}</p>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
