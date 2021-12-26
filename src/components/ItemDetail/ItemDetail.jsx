import { styles } from "./styles";
const ItemDetail = ({detail}) => {
    return (
        <section key={detail.catId} style={styles.cards}>
          <article style={styles.card}>
            <div>
               <img title={detail.title}  alt={detail.title} src={detail.pictureUrl}/>
            </div>

            <div style={styles.card_content}>
               <h2 style={styles.card_content_h2}>{detail.title}</h2>
            
               <p style={styles.card_content_p}>{(detail.price>0 ? `$${detail.price}` : 'Free')}</p>
               <div>
                   <p>DETALLES</p>
                   <p>{detail.description}</p>
                </div>
            </div>
         </article>
       </section>
     );
};
export default ItemDetail;