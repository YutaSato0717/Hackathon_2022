import {  Button, Center, Radio,NumberInput,JsonInput} from '@mantine/core';
import { useState } from 'react';
import {AppShell,Navbar,Header,MediaQuery,Burger,
    useMantineTheme,Title,Avatar,Box} from '@mantine/core';
import { useNavigate, Link} from "react-router-dom";
import { IconStar } from '@tabler/icons';

function Selectnumber() {
    const navigate = useNavigate();
    const submitapply = ()=>{
        navigate("/Apply_succeed")
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
        return(
            <Box sx={{ maxWidth: 1000 }} mx="auto">
        <>
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

            <Title order={1}>応募ページ</Title>
          </div>
        </Header>
      }
    >
            <h2>参加メンバー申し込み</h2>
                <Radio.Group
                name="favoriteFramework"
                orientation="vertical"
                label="人数"
                offset="md"
                withAsterisk>
                <Radio value="one" label="1人" />
                <Radio value="other" label="複数人" />
                </Radio.Group>
         
         <NumberInput
            defaultValue={0}
            placeholder="自分を含めた参加人数"
            label="参加人数"
            size="sm"
            />

        <JsonInput
        placeholder="”、”で区切るか改行で参加者氏名を分けてください"
        label="参加者氏名"
        size="sm"
        withAsterisk
        />

        <Center>
            <form onSubmit={submitapply}>
            <Button mt="md" type="submitapply">申し込み
            </Button>
            </form>
            </Center>
    </AppShell>
            </>
            </Box>

    );
    
}

export default Selectnumber