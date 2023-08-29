import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Center, Radio,PasswordInput , Box } from '@mantine/core';
function ProfileSetting() {

  const navigate = useNavigate();

   const submit = ()=>{
    navigate("/Home")
   }
   const form = useForm({
    initialValues: { name: '', email: '', age: 0 },

    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : '無効なメールアドレスです'),
      age: (value) => (value < 20 ? '20歳以上で登録してください' : null),
    },
   });

     return (
      <Box sx={{ maxWidth: 300 }} mx="auto">
      <>
      <div>プロフィール設定</div>
  
     <form onSubmit={submit}>
      <TextInput label="名前" placeholder="名前" {...form.getInputProps('name')} withAsterisk/>
      
      <NumberInput
        mt="md"
        label="年齢"
        placeholder="年齢"
        min={0}
        max={99}
        {...form.getInputProps('age')}withAsterisk />
        <Radio.Group
      name="favoriteFramework"
      orientation="vertical"
      label="性別"
      offset="md"
      withAsterisk>
      <Radio value="男性" label="男性" />
      <Radio value="女性" label="女性" />
      </Radio.Group>
      <TextInput label="住所" placeholder="福島県〜市" withAsterisk/>
      <TextInput mt="sm" label="メールアドレス" placeholder="example@email.com" {...form.getInputProps('email')} withAsterisk/>
      <PasswordInput
      placeholder="パスワード"
      label="パスワード"
      description="パスワードには、少なくとも 1 つの英字、数字、および特殊文字を含める必要があります" withAsterisk/>
      <Center><Button mt="md" type="submit">送信</Button></Center>
      
      </form>
      </>
      </Box>
    
    )
  
}

export default ProfileSetting
