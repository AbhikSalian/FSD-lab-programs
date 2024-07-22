const ListComponent=({items})=>{
    const itemList=items.map(items=>(
        <li>{items}</li>
    ));
    return(
        <div>
        <h2>Display animal names</h2>
        <ol>{itemList}</ol>
        </div>
    );
};
export default ListComponent;