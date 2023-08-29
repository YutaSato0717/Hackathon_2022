import { Textarea,Box,Center} from '@mantine/core';
import { Button } from '@mantine/core';
import { useState } from 'react';
import { FileButton, Group, Card,Container } from '@mantine/core';
import { Image } from '@mantine/core';
import {AppShell,Navbar,Header,MediaQuery,Burger,
    useMantineTheme,Avatar,Title} from '@mantine/core';
import { useNavigate, Link} from "react-router-dom";
import { IconStar } from '@tabler/icons';
import agImage from "../pages/1259784_s.jpg";


function Report() {
  const [file, setFile] = useState(null);
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

            <Title order={1}>参加した感想</Title>
          </div>
        </Header>
      }
    >
          <Box sx={{ maxWidth: 1000 }} mx="auto">
      <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
      <Group style={{height:300}} position="center">
      <Center>
        <Textarea style={{width: 300}}
        placeholder="タイトルを入力"
        label="タイトル"
        withAsterisk />
      </Center>
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>写真を追加</Button>}
        </FileButton>
      </Group>
      {file && (
                //<Text size="sm" align="center" mt="sm">
                //Picked file: {window.URL.createObjectURL( file ) }
              //</Text>
              <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
      <Image
        radius="md"
        src={window.URL.createObjectURL( file )}
        alt="Random unsplash image"
      />
    </div>
      )}

      
      <Center>
        <Textarea style={{width:300}}
        placeholder="感想等"
        label="感想等"
        withAsterisk />
      </Center>
        <p></p>
        <form onSubmit={submitresult} style={{height:100}}>
        <Center><Button mt="md" type="submitresult">
        みんなに知らせる
      </Button></Center>
      </form>
      </Card.Section>
      </Card>

      <br></br>

      <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Container>
        <h3>
      例)<br></br>
      みんなでゲートボール
      </h3>
        </Container>

    <div style={{ width: 300, margin: 'auto'}}>
    <Center><img  width={200} src={agImage} /></Center>
    </div>
<p></p>
<Center><Container>
      楽しかった👉😁👈
      </Container></Center>
      <br></br>
      </Card.Section>
      </Card>

      <br></br>

    </Box>
    </AppShell>
  )
    }

export default Report