import { styles } from "./styles";
import { useState } from "react";

const Item = ({item}) => {
   const [hover, setHover] = useState([]);
    return (
       <section key={item.id} style={styles.cards}>
          <article style={styles.card}>
            <div>
               <img title={item.title}  alt={item.title} src={item.pictureUrl}/>
            </div>

            <div style={styles.card_content}>
               <h2 style={styles.card_content_h2}>{item.title}</h2>
            
               <p style={styles.card_content_p}>$ {item.price}</p>
               <p>Descripción. {item.description}</p>
            </div>
         </article>
       </section>
    );
   }
   
export default Item;