import Pagination from 'react-bootstrap/Pagination';



const Paginate = (props) => {
    const {cardsPerPage,
          totalCards,
          currentPage,
          handlePageChange} = props

    let active = 2;
        let items = [];
        for (let number = Math.max(currentPage - 5,1); number <= Math.min(currentPage + 5,Math.ceil(totalCards/cardsPerPage)); number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
            {number}
            </Pagination.Item>,
        );
        }
  return <div>
   
    <Pagination>
      <Pagination.First onClick={() => handlePageChange(1)}/>

      <Pagination.Prev onClick={() => handlePageChange(Math.max(currentPage - 1,1))}/>
      {items}
      <Pagination.Next onClick={() => handlePageChange(Math.min(currentPage + 1,Math.ceil(totalCards/cardsPerPage)))}/>
      <Pagination.Last onClick={() => handlePageChange(Math.ceil(totalCards/cardsPerPage))}/>

    </Pagination>
    <br />


  </div>
};

export default Paginate