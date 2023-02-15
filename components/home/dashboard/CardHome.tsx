import Grid from "@mui/material/Grid"
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Image from "next/image";

const classes = {
    root: {
      flexGrow: 1
    },
    label: {
      padding: 20,
      textAlign: "center",
      color: "#ffffff",
      fontFamily: "Roboto"
    }
  };

export default function CardHome(){
  return(
    <>
        <Grid item xs={6} sm={3}>
            <Card  orientation="horizontal"
                    sx={{bgcolor: '#C69EFF' }}>
                <CardContent sx={{ px: 2, bgcolor: 'primary' }}>
                    <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
                    Special Discount
                    </Typography>
                </CardContent>
                <Divider />

            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Card  orientation="horizontal"
                    sx={{bgcolor: '#C69EFF' }}>
                <CardContent sx={{ px: 2, bgcolor: 'primary' }}>
                    <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
                    Special Discount
                    </Typography>
                </CardContent>
                <Divider />

            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Card  orientation="horizontal"
                    sx={{bgcolor: '#C69EFF' }}>
                <CardContent sx={{ px: 2, bgcolor: 'primary' }}>
                    <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
                    Special Discount
                    </Typography>
                </CardContent>
                <Divider />

            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Card  orientation="horizontal"
                    sx={{bgcolor: '#C69EFF' }}>
                <CardContent sx={{ px: 2, bgcolor: 'primary' }}>
                    <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
                    Special Discount
                    </Typography>
                </CardContent>
                <Divider />

            </Card>
        </Grid>
   </>
  )
}