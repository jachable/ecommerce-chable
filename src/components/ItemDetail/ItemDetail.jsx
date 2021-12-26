import { styles } from "./styles";
const ItemDetail = ({detail}) => {
    return (
        <section key={detail.id}>
          <article>
            <div style={styles.card_content_img}>
               <img style={styles.img} title={detail.title}  alt={detail.title} src={detail.pictureUrl}/>
            </div>

            <div style={styles.card_content}>
               <h2 style={styles.card_content_h2}>{detail.title}</h2>
               <h3 style={styles.card_content_h2}>{detail.subtitle}</h3>
            
               <p style={styles.card_content_p}>{(detail.price>0 ? `$${detail.price}` : 'Free')}</p>
               <div style={styles.card_content_detail}>
                   <p>DETALLES</p>
                   <p>{detail.description}</p>
                </div>
            </div>
         </article>
       </section>
     );
};
export default ItemDetail;