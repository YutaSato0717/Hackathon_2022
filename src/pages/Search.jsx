import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text, Button , NativeSelect, Center, Box ,
    AppShell,Navbar,Header,Aside,MediaQuery,Burger,
    useMantineTheme,Title,Avatar} from '@mantine/core';
import { useNavigate, Link} from "react-router-dom";
import { IconStar } from '@tabler/icons';


function Search() {
  const [value, setValue] = useState('');
  const [debounced, cancel] = useDebouncedValue(value, 1000);
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const submitsearch = () => {
    navigate("/search")
  }
  const submithome = () => {
    navigate("/home")
  }
  const submitrecruit = () => {
    navigate("/recruit")
  }
  const submit = () => {
    navigate("/")
  }
  const submitresult = () => {
    navigate("/report_result")
  }
  const submitapply = () => {
    navigate("/apply")
  }
  const submitreport = () => {
    navigate("/report")
  }
  return (
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
                <Avatar color="blue" radius="xl" component={Link} to="/apply_favorite" style={{top:420,left:300}}><IconStar size={24}/>
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
      {<Box sx={{ maxWidth: 1000 }} mx="auto">
      <TextInput
        label="検索したい方はこちらから"
      
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <form onSubmit={submitapply}>
        <Center>
          <Button style={{left:142,bottom:37}} type="submitapply" variant="outline">
            検索
          </Button>
        </Center>
      </form>

  
    <NativeSelect
      data={['ゲートボール', 'ゴルフ','ボーリング','お散歩']}
      placeholder="一つ選んでください"
      label="一つ選択してください"
      description="スポーツ"
 
    />
    <form onSubmit={submitapply}>
    <Center><Button style={{left:142,bottom:37}} type="submitapply" variant="outline">  
      検索
    </Button>
    </Center>
    </form>
    <NativeSelect
      data={['将棋', 'お茶会','麻雀','映画鑑賞','囲碁']}
      placeholder="一つ選んでください"
      description="室内娯楽"
    />
    <form onSubmit={submitapply}>
    <Center><Button style={{left:142,bottom:37}} type="submitapply" variant="outline">  
      検索
    </Button>
    </Center>
    </form>
    <NativeSelect
      data={['どんど焼き', '芋煮会','花火大会','お花見','紅葉']}
      placeholder="一つ選んでください"
      description="年間行事"
    />
    <form onSubmit={submitapply}>
    <Center><Button style={{left:142,bottom:37}} type="submitapply" variant="outline">  
      検索
    </Button>
    </Center>
    </form>
    </Box>}
    </AppShell>
  </>
  );
}
export default Search