import { Card, CardHeader, CardMedia, CardContent, Typography } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { formatDate } from "../../utils/date";

function LaunchCard(props){
    const {
            name,
            flight_number, 
            date_utc,
            rocket: { name: rocket_name },
            links: { patch: { small = '' }},
            launchpad: { details = '' }
        } = props;



    return <div>
        <Card sx={{ maxWidth: 310, height: 490 }}>
            <CardMedia image={small} height="270" component="img"/>
            <CardContent>

                <Typography sx={{ my: '.5rem',  fontWeight: 'bold', fontSize: 14 }} component="div">
                     {rocket_name}
                </Typography>

                <Typography sx={{ my: '.5rem', color: 'gray', fontWeight: 'bold', fontSize: 14 }} component="div">
                     {name}
                </Typography>

                <Typography sx={{ my: '.5rem', color: 'gray', fontSize: 14 }} component="div">
                    {details.substring(0, 80)}...
                </Typography>

                <Typography sx={{ display: 'flex', justifyContent: 'space-between', mt:'2rem' }}>

                    <Typography sx={{ fontWeight: 'bold', fontSize: 13, color: 'gray', mt: '.1rem' }}>
                         {formatDate(date_utc)}
                    </Typography>

                    <Typography component="div">
                        <RocketLaunchIcon />
                        <strong> {flight_number} </strong>
                    </Typography>
                </Typography>
            </CardContent>
        </Card>
    </div>
}

export default LaunchCard;