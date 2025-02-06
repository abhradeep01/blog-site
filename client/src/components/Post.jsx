import { ArrowOutward, Bookmark, BookmarkBorder } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import './style/post.scss';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

function Post({id,title,img,description,iseven}) {
    //bookmark state
    const [isBookmarked, setIsBookmarked] = React.useState(false);
    //navigate to post page
    const navigate = useNavigate();
    //reac more or not
    const [readMore, setReadMore] = React.useState(false);
    

  return (
    <div className={`post ${iseven?'row-reverse':'row'}`}>
        <div className="post-img">
            <img src={img} alt={title} width={640} height={360} />
        </div>
        <div className="post-content">
            <div>
                <h3 className="title">{title}</h3>
            </div>
            <div>
                <p className="description">
                    {readMore?
                    description.substring(0,500):
                    description.substring(0,200)} <button className='read-more' onClick={()=>setReadMore(!readMore)}>{readMore?'read less':'read more'}</button>
                </p>
            </div>
            <div className="post-actions">
                <div className="visit">
                    <div className="text">Visit this blog:</div>
                        <button color="primary-btn" onClick={()=>navigate(`/post/${id}`)}>
                            click here <ArrowOutward fontSize='small' sx={{color:'white'}}/>
                        </button>
                </div>
                <IconButton onClick={()=>setIsBookmarked(!isBookmarked)}>
                    {isBookmarked?
                    <Bookmark color='error'/>:
                    <BookmarkBorder/>}
                </IconButton>
            </div>
        </div>
    </div>
  )
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iseven: PropTypes.bool.isRequired
};

export default Post