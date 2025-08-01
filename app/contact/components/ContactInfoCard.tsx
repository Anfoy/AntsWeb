import { Card, Title, Text, ActionIcon, Stack, Group, Badge, Divider, Grid } from "@mantine/core";
import { contactInfo } from "../data/information";
import { IconMail, IconMapPin } from "@tabler/icons-react";


export function ContactInfoCard(){
    return (
        <Card
          shadow="lg"
          padding="xl"
          radius="lg"
          mb={60}
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
            Contact Information
          </Title>

          <Grid>
            <ContactInfo />


            <AvailableFor />

          </Grid>
        </Card>       
    )
}

function AvailableFor(){
    return (
        <Grid.Col span={{ base: 12, md: 6 }}>
        <Stack gap="lg">
          <Text 
            size="lg" 
            fw={600}
            style={(theme) => ({
              color: theme.colors.winter[1]
            })}
          >
            Available for:
          </Text>
          <Group gap="sm">
            <Badge variant="filled" color="green" size="lg">
              Full-time Positions
            </Badge>
            <Badge variant="filled" color="blue" size="lg">
              Internships
            </Badge>
            <Badge variant="filled" color="purple" size="lg">
              Freelance Work
            </Badge>
          </Group>

          <Divider my="md" />

          <Text 
            size="sm" 
            style={(theme) => ({
              color: theme.colors.winter[3],
              lineHeight: 1.6
            })}
          >
            I am particularly interested in opportunities involving web development, 
            data analysis, and software engineering. I am always eager to learn 
            new technologies and take on challenging projects.
          </Text>
        </Stack>
      </Grid.Col>
    )
}

function ContactInfo(){
    return (
<Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="lg" mt={30}>
                <Group gap="md">
                  <ActionIcon
                    size="lg"
                    variant="light"
                    color="blue"
                    style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  >
                    <IconMail size={20} />
                  </ActionIcon>
                  <div>
                    <Text size="sm" c="winter.4" mb={4}>Email</Text>
                    <Text 
                      size="md" 
                      style={(theme) => ({
                        color: theme.colors.winter[1],
                        fontWeight: 500
                      })}
                    >
                      {contactInfo.email}
                    </Text>
                  </div>
                </Group>


                <Group gap="md">
                  <ActionIcon
                    size="lg"
                    variant="light"
                    color="orange"
                    style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                  >
                    <IconMapPin size={20} />
                  </ActionIcon>
                  <div>
                    <Text size="sm" c="winter.4" mb={4}>Location</Text>
                    <Text 
                      size="md" 
                      style={(theme) => ({
                        color: theme.colors.winter[1],
                        fontWeight: 500
                      })}
                    >
                      {contactInfo.location}
                    </Text>
                  </div>
                </Group>
              </Stack>
            </Grid.Col>
    )
}