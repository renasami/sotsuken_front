import { Button, TextField, Typography } from '@mui/material'

const QuestionnairePage = () => {
    return (
        <>
        <Typography color="text.primary" variant="h2">質問ページ</Typography>
        <TextField id="nickname" label="ニックネーム" />
        <Button variant="contained" color="primary" component="span">そうしん</Button>
        
        </>
    )
}

export default  QuestionnairePage