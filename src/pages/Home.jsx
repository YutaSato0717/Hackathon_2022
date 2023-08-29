import { Box, Button, Center, Image} from "@mantine/core";
import { useNavigate } from "react-router-dom"
import { BackgroundImage,Text,MantineProvider,Group } from '@mantine/core';
function Home() {
  const navigate = useNavigate();

  const submit = () => {
    navigate("/recruit")
  }

  const join = ()=> {
    navigate("/apply_index")
  }

  const report = () => {
    navigate("/report_result")
  }

  const report_write = () => {
    navigate("/Report")
  }

  return (
    <>
    <Box sx="auto" mx="auto">
      <BackgroundImage style={{height:180}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Ve85Xqdd9dRhirT6Cu3LHjAQq2i7FxAV6w&usqp=CAU"
        radius="sm"
      >

        <Center p="md"
        style={{height:220}}>
          <Text 
          color="#fff"
          >
            地域の活動を活発に。

          </Text>
        </Center>
      </BackgroundImage>
    </Box>


    
    <Box sx={{ maxWidth: 350 ,height:100}} mx="auto">
    <Center style={{height:100}}></Center>

    <form onSubmit={submit}>
    <Center><Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} mt="md" type="submit">　新しい活動の募集　</Button></Center>
    </form>

    <form onSubmit={join}>
    <Center><Button style={{ padding: "0px" }} variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} mt="md" type="submit">　イベントに参加する　</Button></Center>
    </form>

    <form onSubmit={report}>
    <Center><Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} mt="md" type="report">みんなの口コミを見る</Button></Center>
    </form>

    <form onSubmit={report_write}>
    <Center><Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} mt="md" type="report_write">　　口コミを書く　　</Button></Center>
    </form>

    </Box>
    <Center style={{height:1000}}>
    <Box sx="auto" mx="auto">
    <div style={{width:"auto" }} >
      <Image 
         radius="sm"
        src="https://sposuru.com/contents/wp-content/uploads/2021/10/97110655485e9996d8180e79f2994fea-884x600.webp"
        alt="Random unsplash image" />
    </div></Box></Center>
    </>
  )
}

export default Home
