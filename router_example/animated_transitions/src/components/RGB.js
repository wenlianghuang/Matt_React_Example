import {useParams,useLocation} from 'react-router-dom';
import "../styles.css";

export default () => {
    let { r, g, b } = useParams();
    //let location = useLocation();
    //console.log("RGB",location);
    return(
        <div className="style_rgb" style={{background: `rgb(${r},${g},${b})`}}>
            rgb({r},{g},{b})
        </div>
    )
}