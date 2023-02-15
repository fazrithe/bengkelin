import { Avatar, Grid, Typography, Button } from "@mui/material";

export default function Store(){
    return(
        <>
            <Grid item xs={8} sm={8}>
                <Grid container>
                    <Grid item xs={4} sm={2}>
                        <Avatar alt="Aji Motor" src="/global/store.jpg" />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Typography>Aji Motor</Typography>
                        <Typography color="green" fontWeight="bold">.Online</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} sm={4}>
                <Button variant="outlined" color="secondary">Follow</Button>
            </Grid>
        </>
    )
}