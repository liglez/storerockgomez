import ItemCount from "../Items/ItemCount";

const ItemListContainer = (props) => {
        console.log(props)
        return(
                <div>
                    {props.mensaje}
                    <ItemCount 
                        stock={20}
                        initial={0}
                        />
                </div>
        )
}

export default ItemListContainer;
