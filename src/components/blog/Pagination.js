import React from 'react';
import { Button } from 'semantic-ui-react';

// first, prev, page, pages, next, last
const Pagination = ({ page, pages }) => {

  const firstPage = () => console.log('go to first page'); // first();

  const prevPage = () => console.log('go to next page'); // next();
  const goToPage = (i) => console.log('go to', i);  // goToPage();
  const nextPage = () => console.log('go to prev page'); // prev();

  const lastPage = () => console.log('go to last page'); // last();

	return (
		<div className="pagination">
      <Button.Group basic size='tiny'>
        <Button onClick={firstPage} icon='angle double left' disabled />
        <Button onClick={prevPage} icon='angle left' disabled />
      </Button.Group>
      <Button.Group basic size='tiny'>
        {[...Array(pages)].map((pg, i) => (
					<Button
						key={i}
						className={i+1 === page ? 'active page' : 'page'}
						onClick={() => goToPage(i+1)}
					>
          {i+1}
					</Button>
				))}
      </Button.Group>
      <Button.Group basic size='tiny'>
        <Button onClick={nextPage} icon='angle right' disabled />
        <Button onClick={lastPage} icon='angle double right' disabled />
      </Button.Group>
		</div>
	);
};

/* Pagination.propTypes = {
  page: React.PropTypes.number.isRequired
}; */

export default Pagination;
