'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';


const GitHubProfile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/github-john-doe');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); 
        setProfileData(data); 
      } catch (error) {
        console.error('Error fetching GitHub data:', error); 
      }
    };

    fetchData(); 
  }, []); 

  if (!profileData) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="gitProfil">
        <Image
          className="githubImg"
          src="/img/github-profil.png"
          alt="image de profil github"
          width={230}
          height={230}></Image>
        <h1>{profileData.name}</h1> 
        <p>{profileData.bio}</p> 
        <p>Followers: {profileData.followers}</p> 
        <p>Following: {profileData.following}</p> 
        <a className="lienGit" href={profileData.html_url} target="_blank" rel="noopener noreferrer">
            Voir le profil GitHub
        </a> 
    </div>
  );
};

export default GitHubProfile;
