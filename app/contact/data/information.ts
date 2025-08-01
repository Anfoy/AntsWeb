import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter} from "@tabler/icons-react";

export const contactInfo = {
    email: 'anthonydierkes@gmail.com',
    location: 'Purdue University, IN',
    github: 'https://github.com/Anfoy',
    linkedin: 'https://linkedin.com/in/anthony-dierkes',
    twitter: 'https://twitter.com/AD_OG_',
    instagram: 'https://www.instagram.com/anthonydierkes_'
  };

  export const socialLinks = [
    {
      name: 'GitHub',
      url: contactInfo.github,
      icon: IconBrandGithub,
      color: '#333',
      description: 'View my code and projects'
    },
    {
      name: 'LinkedIn',
      url: contactInfo.linkedin,
      icon: IconBrandLinkedin,
      color: '#0077b5',
      description: 'Connect professionally'
    },
    {
      name: 'Twitter',
      url: contactInfo.twitter,
      icon: IconBrandTwitter,
      color: '#1da1f2',
      description: 'Follow my updates'
    },
    {
        name: 'Instagram',
        url: contactInfo.instagram,
        icon: IconBrandInstagram,
        color: '#E1306C',
        description: 'Follow my life'
    }
  ];