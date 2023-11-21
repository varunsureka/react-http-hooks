import React, { useEffect ,useState} from 'react';
import axios  from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const Blog = () => {
    const [posts,setPosts] = useState([]);
    const [postId,setPostId] = useState(null);
     useEffect(
        () => {
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(
            (response) => {
                const updatedPosts = response.data.slice(0,3);
               
                setPosts(updatedPosts);
                //console.log(posts);
            }
         ).catch(err => console.log(err.message));
         return () => {
           //clean up code anything 
         }
        },[]);
        const onClickHandler = (id) => {
            setPostId(id);
        }
          const postData = posts.map(p => <Post 
            key={p.id} title={p.title} clicked={() => onClickHandler(p.id)}/>)
        return (
        <div>
        <section className="Posts">
            {postData}
        </section>
        <section>
            <FullPost id={postId} />
        </section>
        <section>
            <NewPost />
        </section>
    </div>
    );
}
 
/* class Blog extends Component {
    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
} */

export default Blog;