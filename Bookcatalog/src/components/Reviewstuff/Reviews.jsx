import {useContext} from 'react';
import {Link} from "react-router-dom"
import Writereview from './Writereview';

function Reviews()

{//setting up the context
 const writerreview = useContext(Writereview)
const {reviewslist} = useContext (bookcontext);
return (
<div className='booklink'>
<div>
<Link to = {`/booksale/${books.title}`}></Link>
</div>
);
</div> 
);
}

export default Reviews