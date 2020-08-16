import React from 'react';
import data from './data.json';
import Post from './Post';
import posed, { PoseGroup } from 'react-pose';

const Line = posed.div()

export default function Posts() {
    const [posts, setPosts] = React.useState(data);

    React.useEffect(() => {
        setTimeout(() => {
            const clonedPosts = [...posts];
            clonedPosts.unshift(clonedPosts.pop());
            setPosts(clonedPosts);
        }, 3000);
    }, [posts])

    return (
        <PoseGroup >
            {posts.slice(0, 3).map((post, i) =><Line key={post.name}><Post index={i} key={i} post={post} /></Line>)}
        </PoseGroup>
    )
}