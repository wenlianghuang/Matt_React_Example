import {useParams} from 'react-router-dom';
import "../styles.css";
export default () => {
    let {h,s,l} = useParams();
    return(
        <div className="style_hsl" style={{background: `hsl(${h}, ${s}%, ${l}%)`}}>
            hsl({h},{s}%,{l}%)
        </div>
    )
}