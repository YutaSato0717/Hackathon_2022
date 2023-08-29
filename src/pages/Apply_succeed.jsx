import { useNavigate } from 'react-router-dom';
import { Button, Center} from '@mantine/core';
import { TextInput, Text, NativeSelect, Box} from '@mantine/core';

function Apply_succeed(){
    const navigate = useNavigate();
    const submit = ()=>{
    navigate("/home")
}
const submitprofile = ()=>{
    navigate("/profile")
}
return(
    <Box sx={{ maxWidth: 1000 }} mx="auto">
    <>
            <Center><h3>申し込みが完了しました。</h3></Center>
            <Center><form onSubmit={submit}>
              <Button mt="md" type="submit" variant="outline">ホームへ戻る</Button>
            </form></Center>
            <br /><br />
            <Center><h4>応募内容を確認したい方↓をクリック</h4></Center>
            <Center><form onSubmit={submitprofile}>
              <Button mt="md" type="submitprofile" variant="outline">プロフィール</Button>
      
            </form></Center>
            </>
    </Box>
)
}
export default Apply_succeed