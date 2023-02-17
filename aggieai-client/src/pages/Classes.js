import { useNavigate } from "react-router-dom";

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      height: '95%',
      justifyContent: 'space-between',
      paddingHorizontal: '5%',
    },
  });

function Classes() {
    const navigate = useNavigate();


    return (
        <div>
            <p>
                Here are the classes
            </p>
            {/*Hello
            <button onClick={()=>navigate('about')}>Go to about page</button>
            */}
        </div>
    );
}

export default Classes;
