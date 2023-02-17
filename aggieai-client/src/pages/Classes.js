import { useNavigate } from "react-router-dom";
import './Classes.css';

function Classes() {
    const navigate = useNavigate();


    return (
        <body>
            <p>
                Here are the classes
            </p>
            {/*Hello
            <button onClick={()=>navigate('about')}>Go to about page</button>
            */}
        </body>
            
    );
}

export default Classes;
