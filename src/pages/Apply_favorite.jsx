import { Card, Image, Text, Badge, Button, Group , Table, Title, Box, Center} from '@mantine/core';
import { useState } from 'react';
import {AppShell,Navbar,Header,MediaQuery,Burger,
    useMantineTheme,Avatar} from '@mantine/core';
import { useNavigate, Link} from "react-router-dom";
import { IconStar } from '@tabler/icons';
import agImage from "../pages/23024481_s.jpg";
import { Switch } from '@mantine/core';



function Apply_favorite() {
    const navigate = useNavigate();
    const submitselect = () => {
      navigate("/selectnumber")
    }
    const submitsucceed = () => {
      navigate("/recruit_succeed")
    }
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const submitsearch = () => {
      navigate("/search")
    }
    const submithome = () => {
      navigate("/home")
    }
    const submitrecruit = () => {
      navigate("/recruit")
    }
    const submitresult = () => {
      navigate("/report_result")
    }
    const submitreport = () => {
      navigate("/report")
    }
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }
    }
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 100, lg: 200 }}>
           
            <form onSubmit={submithome}>
            <Center>
                    <Button mt="md" type="submithome" variant="subtle" color="dark">
                        HOME
                    </Button>
            </Center>
            </form>
            
          
           <form onSubmit={submitrecruit}>
               <Center>
                    <Button mt="md" type="submitrecruit" variant="subtle" color="dark">
                        募集画面
                    </Button>
                </Center>
            </form>
           
           <form onSubmit={submitsearch}>
               <Center>
                    <Button mt="md" type="submitsearch" variant="subtle" color="dark">
                        応募画面
                    </Button>
                </Center>
            </form>
           
           <form onSubmit={submitresult}>
               <Center>
                    <Button mt="md" type="submitresult" variant="subtle" color="dark">
                        口コミを見る
                    </Button>
                </Center>
            </form>
            <form onSubmit={submitreport}>
               <Center>
                    <Button mt="md" type="submitreport" variant="subtle" color="dark">
                        口コミをかく
                    </Button>
                </Center>
            </form>
           
                <Avatar component={Link} to="/Home" radius="xl" style={{top:400,left:300}} />
                <Avatar color="blue" radius="xl" component={Link} to="/apply_favorite" style={{top:420,left:300}}>
                <IconStar size={24}/>
                </Avatar>
                <Avatar component={Link} to="/Home" radius="xl" style={{top:440,left:300}}  src={null} alt="Vitaly Rtishchev">?</Avatar>
            
        </Navbar>
      }
      
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Title order={1}>お気に入りの募集</Title>
          </div>
        </Header>
      }
    >
    <Box sx={{ maxWidth: 1000 }} mx="auto">
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
      <Center><img src={agImage} /></Center>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={900}>イベント概要</Text><br />
        <Badge size="xl" color="pink" variant="light">
          募集中
        </Badge>
      </Group>
      <br />
    <Table>
          <Title order={2}>募集者名</Title><br />
          <Title order={3}>活動内容</Title><br />
          <Title order={3}>参加者人数</Title><br />
          <Title order={3}>日時</Title><br />
          <Title order={3}>場所</Title><br />
          <Switch
      label="お気に入り"
      color="red"
    />
    </Table>
    <form onSubmit={submitselect}>
      <Center>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md" size="lg" type="submitselect">
        応募する
      </Button>
      </Center>
    </form>
    </Card>
    </Box>
    </AppShell>
  );
}
export default Apply_favorite

