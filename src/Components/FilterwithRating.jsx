

function FilterwithRating(props){
    return (
        < >
      <label style={{marginLeft:"100px"}} > Search by Rating</label>
        < input style={{ width:"100px"}}  
          type="number"
         defaultValue='0'
         onChange={(e)=>props.handleFilterRating(e.target.value)}
        />
       </>
     
      
    )
}
export default FilterwithRating
