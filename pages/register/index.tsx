import * as React from 'react';
import {FormGroup, 
        FormControl, 
        InputLabel, 
        OutlinedInput, 
        InputAdornment, 
        IconButton, 
        Grid, 
        Paper,
        CardActionArea,
        CardMedia,
        Chip,
        Container,
        Stack,
        Breadcrumbs
        } from '@mui/material'
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ReactPlayer from "react-player";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Register(){
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    const breadcrumbs = [
        <Link key="1" color="inherit" href="/">
          Home
        </Link>,
        <Link
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Aksesoris
        </Link>,
        <Typography key="3">
          Login
        </Typography>,
      ];

    return(
        <>
           <div>
        <Container fixed>
            <Stack spacing={2} className="mt-2">
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack> 
        <Grid container spacing={1} className="mt-2">
          <Grid item xs={6} sm={6}>
            <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover>
                    <video
                        autoPlay
                        loop
                        muted
                        poster="https://assets.codepen.io/6093409/river.jpg"
                    >
                        <source
                        src="cover-register.mp4"
                        type="video/mp4"
                        />
                    </video>
                    </CardCover>
                    <CardContent>
                        <Typography
                            level="h6"
                            fontWeight="lg"
                            textColor="#fff"
                            mt={{ xs: 12, sm: 55 }}
                        >
                            Video
                        </Typography>
                    </CardContent>
            </Card>
        </Grid>
        <Grid item xs={1} sm={0}>

        </Grid>
        <Grid item xs={10} sm={4}>
            <Grid container alignItems="center" className="mt-4">
                    <Grid>
                        <Typography fontSize="14"  fontWeight="lg">Daftar Sekarang</Typography>
                        Sudah punya akun Bengkelin?<Link 
                        href="/login" 
                        as={`/login`}
                        > Masuk</Link>
                    </Grid>
                </Grid>
                <FormGroup>
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel color="secondary">Email</InputLabel>
                    <OutlinedInput
                        type="text"
                        label="Email"
                        color="secondary"
                    />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" color="secondary">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        color="secondary"
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                        <Button variant="contained" color="secondary">Daftar</Button>
                    </FormControl>
                </FormGroup>
        </Grid>
        <Grid item xs={6} sm={2}>
        </Grid>
        </Grid>
        </Container>
        </div>
        </>
    )
}