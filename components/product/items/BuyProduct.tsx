import { Card, Grid, Button, Typography, CardContent, FormGroup, FormControl, InputLabel, OutlinedInput, TextField } from "@mui/material";
import {FavoriteBorder, Chat, Share} from '@mui/icons-material'

export default function BuyProduct(){
    return(
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography fontWeight="bold">Atur jumlah & catatan</Typography>
                    <Grid container>
                        <Grid item>
                            <FormGroup>
                                <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined">
                                <InputLabel color="secondary">Total</InputLabel>
                                <OutlinedInput
                                    type="text"
                                    label="Email"
                                    color="secondary"
                                />
                                </FormControl>
                            </FormGroup>
                        </Grid>
                        <Grid item alignContent="center" alignItems="center" className="mt-4">
                            <Typography>Stok: Sisa 4</Typography>
                        </Grid>
                    </Grid>
                    <TextField id="standard-basic" label="Catatan" color="secondary" variant="standard" />
                    <Grid container className="mt-4" spacing={2}>
                        <Grid item>
                            <Button variant="contained" color="secondary">+ Keranjang</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="secondary">B e l i</Button>
                        </Grid>
                    </Grid>
                    <Grid container className="mt-4" spacing={2}>
                        <Grid item sm={4}>
                            <Typography><Chat/>Chat</Typography>
                        </Grid>
                        <Grid item sm={5}>
                            <Typography><FavoriteBorder/>Wishlist</Typography>
                        </Grid>
                        <Grid item>
                            <Typography><Share/>Share</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}