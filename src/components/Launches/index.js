import {Grid, Paper} from "@mui/material";
import LaunchCard from "../LaunchCard";
import styles from './launches.module.css';


const Launches = ({launches}) =>  {
    return (
        <div className={styles.page}>
            {launches.map((launch) => (
                <div key={launch.id}>
                    <LaunchCard {...launch}/>
                </div>
            ))}
        </div>
    );
}


export default Launches