import { styles } from "./styles";
import { useState } from "react";

const Item = ({item}) => {
   const [hover, setHover] = useState(false);
    return (
       <section key={item.id} style={styles.cards}>
          <article style={styles.card}>
            <div>
               <img title={item.title}  alt={item.title} src={item.pictureUrl} style={styles.img}/>
            </div>

            <div style={{...styles.card_content, ...(hover ? styles.hover : "")}} 
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}>
               
               <p style={styles.card_content_h2}>
                  <a style={styles.card_a} href={`item/${item.id}`}> {item.title}</a>
               </p>

               <p style={styles.card_content_h2}>SKU: {item.id}</p>
            
               <p style={styles.card_content_p}>{(item.price>0 ? `$${item.price}` : 'Free')}</p>
            </div>
         </article>
       </section>
    );
   }
   
export default Item;