import { Card, Title, Text, ActionIcon, Grid } from "@mantine/core";
import { socialLinks } from "../data/information";

export function SocialLinksCard(){
    return (
        <Card
          shadow="lg"
          padding="xl"
          radius="lg"
          style={(theme) => ({
            backgroundColor: 'rgba(26, 27, 30, 0.8)',
            border: `2px solid ${theme.colors.winter[8]}`
          })}
        >
          <Title 
            order={2} 
            mb={30}
            ta="center"
            style={(theme) => ({
              fontFamily: theme.other.fonts.slab,
              color: theme.colors.winter[1],
              fontSize: '2rem'
            })}
          >
            Connect With Me
          </Title>

          <Grid justify="center">
            {socialLinks.map((social, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                <SocialLinkCard social={social} />
              </Grid.Col>
            ))}
          </Grid>
        </Card>
    )
}

function SocialLinkCard({social}: {social: typeof socialLinks[0]}){
    return (
        <Card
        component="a"
        href={social.url}
        target="_blank"
        shadow="md"
        padding="lg"
        radius="md"
        style={{
          backgroundColor: 'rgba(26, 27, 30, 0.6)',
          border: `1px solid rgba(255, 255, 255, 0.1)`,
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          textDecoration: 'none',
          textAlign: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = `0 8px 25px ${social.color}30`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <ActionIcon
          size="xl"
          variant="light"
          style={{ 
            backgroundColor: `${social.color}20`,
            color: social.color,
            margin: '0 auto 1rem'
          }}
        >
          <social.icon size={24} />
        </ActionIcon>
        <Title 
          order={4} 
          mb="xs"
          style={(theme) => ({
            fontFamily: theme.other.fonts.slab,
            color: theme.colors.winter[0]
          })}
        >
          {social.name}
        </Title>
        <Text 
          size="xs" 
          style={(theme) => ({
            color: theme.colors.winter[3]
          })}
        >
          {social.description}
        </Text>
      </Card>
    )
}