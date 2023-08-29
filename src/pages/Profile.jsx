import { Box,TextInput,Radio,Center,Button,Card, Image, Text, Badge , Group , Table, Title} from '@mantine/core';
import { useState } from 'react';
import {AppShell,Navbar,Header,MediaQuery,Burger,
    useMantineTheme,Avatar} from '@mantine/core';
import { useNavigate, Link} from "react-router-dom";
import { IconStar } from '@tabler/icons';
import agImage from "../pages/23024481_s.jpg";
import bgImage from "../pages/24771367_s.jpg";
import cgImage from "../pages/IMG_2347.jpeg";
import { Switch } from '@mantine/core';
function Profile(){
  const navigate = useNavigate();

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
  const submitselect = () => {
    navigate("/select")
  }
  const submitreport = () => {
    navigate("/report")
  }
  const submitmessage = () => {
    navigate("/message")
  }
  const submitrecruitre = () => {
    navigate("/recruitre")
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
                        ホームに戻る
                    </Button>
            </Center>
            </form>
            
          
            <form onSubmit={submitrecruit}>
                <Center>
                    <Button mt="md" type="submitrecruit" variant="subtle" color="dark">
                        参加者を募集する
                    </Button>
                </Center>
            </form>
           
           <form onSubmit={submitsearch}>
               <Center>
                    <Button mt="md" type="submitsearch" variant="subtle" color="dark">
                        イベントに参加する
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
           
                <Avatar component={Link} to="/Profile" radius="xl" style={{top:400,left:300}} />
                <Avatar color="blue" radius="xl" component={Link} to="/apply_favorite" style={{top:420,left:300}}>
                <IconStar size={24}/>
                </Avatar>
            
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

            <Title order={1}>プロフィール</Title>
          </div>
        </Header>
      }
    >
  <Avatar radius="md" size="200px" src={cgImage}/>
  <Button variant="default" color="black">プロフィールの編集</Button>
  <div style={{height:100}}></div>
  <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
      <img width={400} src={agImage} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={900}>どんど焼き</Text><br />
        <form onSubmit={submitmessage}>
        <Button variant="default" color="black" type="submitmessage">メッセージ</Button>
        </form>
        <Badge size="xl" color="pink" variant="light">
          応募中
        </Badge>
      </Group>
      <br />
    <Table>
          <Title order={2}>募集者：佐藤優多</Title><br />
          <Title order={3}>活動内容：どんど焼き</Title><br />
          <Title order={3}>参加者人数: 3</Title><br />
          <Title order={3}>日時: 1月3日</Title><br />
          <Title order={3}>場所: 会津大学</Title><br />
          <Switch
      label="お気に入り"
      color="red"
    />
    </Table>
    </Card>
    <br /><br />
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
      <img width={400} src={bgImage} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={900}>芋煮会</Text><br />
        <form onSubmit={submitmessage}>
        <Button variant="default" color="black" type="submitmessage">メッセージ</Button>
        </form>
        <Badge size="xl" color="pink" variant="light">
          募集中
        </Badge>
      </Group>
      <br />
    <Table>
          <Title order={2}>募集者：佐藤優多</Title><br />
          <Title order={3}>活動内容：みんなで美味しい豚汁を作りましょう！</Title><br />
          <Title order={3}>参加者人数: 3</Title><br />
          <Title order={3}>日時: 1月3日</Title><br />
          <Title order={3}>場所: 会津大学</Title><br />
          <Switch
      label="お気に入り"
      color="red"
    />
    </Table>
    <Center>
    <form onSubmit={submitrecruitre}>
    <Button mt="xl" type="submitrecruitre" variant="outline">編集</Button>
    </form>
    </Center>
    </Card>
    </AppShell>
  ); 
    }








export default Profile