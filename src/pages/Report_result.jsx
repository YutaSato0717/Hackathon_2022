import { Image } from '@mantine/core';
import { Title } from '@mantine/core';
import { Container } from '@mantine/core';
import { Button } from '@mantine/core';
import { Box, Center } from '@mantine/core';
import {AppShell,Navbar,Header,MediaQuery,Burger,
  useMantineTheme,Avatar} from '@mantine/core';
import { useNavigate, Link} from "react-router-dom";
import { IconStar } from '@tabler/icons';
import { useState } from 'react';
import { Card, Text, Badge, Group } from '@mantine/core';
import agImage from "../pages/1259784_s.jpg";
import bgImage from "../pages/24497130_s.jpg";
import cgImage from "../pages/832546_s.jpg";


function Report_result() {
  const navigate = useNavigate();
  const submit = ()=>{
  navigate("/home")
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

            <Title order={1}>みんなの口コミ</Title>

          </div>
        </Header>
      }
    >
    <Box sx={{ maxWidth: 1000 }} mx="auto">
      <Center><Title order={2}>レポート一覧</Title></Center>
      <br></br>
      <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Container>
        <h3>
      みんなでゲートボール
      </h3>
        </Container>

    <div style={{ width: 300, margin: 'auto'}}>
    <Center><img  width={200} src={agImage} /></Center>
    </div>
<p></p><Center><Container>
      楽しかった。
      </Container></Center>
      <br></br>
      </Card.Section>
      </Card>

      <br></br>

      <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Center>
        <Container>
      <h3>毎月開催！老人麻雀大会</h3>
      </Container>
        </Center>

      <div style={{ width: 300, marginLeft: 50, marginRight: 'auto' }}>
        <Center><img width={200} src={bgImage} /></Center>
      </div>
<p></p>
<Center><Container>
       負けて悔しかった
      </Container></Center>
      <br></br>
      </Card.Section>
      </Card>

      <br></br>
      <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Center><Container>
        <h3>
      ボウリング交流会
      </h3>
        </Container></Center>

    <div style={{ width: 300, margin: 'auto'}}>
      <Center><img  width={200} src={cgImage} /></Center>
    </div>
<p></p>
<Center><Container>
        ストライク気持ち良すぎだろ
      </Container></Center>
      <br></br>
      </Card.Section>
      </Card>

      <br></br>

      <form onSubmit={submit}>
        <Center><Button mt="md" type="report">ホームに戻る</Button></Center>
      </form>
    </Box>

  </AppShell>
  );
}

export default Report_result