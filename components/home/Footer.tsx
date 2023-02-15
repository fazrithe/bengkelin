import Grid from "@mui/material/Grid"
import { CardContent } from "@mui/joy"
import Typography from "@mui/joy/Typography"

export default function Footer() {
    return(
    <Grid item xs={12} sm={6} className="mt-4 mb-2">
            <CardContent sx={{ justifyContent: 'flex-end', textAlign: 'center' }}>
                bengkelin
            </CardContent>
        </Grid>
    )
}