import Item from '../Item'

const ItemList = ({listaItem}) => {
   return (
      listaItem.map((newItem, index) => 
         <Item key={index} item={newItem}/>
      )
   );
}

export default ItemList;