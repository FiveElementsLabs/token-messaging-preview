import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { client, recommendedProfiles } from '../../api/profiles';

export default function Profile() {
  const router = useRouter();
  const handle = router.query.handle;

  return (
    <div>
      <h1>Handle</h1>
      <h1>{handle}</h1>
    </div>
  );
}
