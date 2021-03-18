import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './Posts.css'

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const history = useHistory()

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('blogAppUser') as string).id
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => setPosts(response.data))
            .catch(() => alert("Sorry! Some internal error occurred!"))
        localStorage.setItem('blogAppPostId', JSON.stringify(null))
        localStorage.setItem('blogAppAlbumId', JSON.stringify(null))
    }, [])

    const ShowCommentsHandler = (postId: number) => {
        localStorage.setItem('blogAppPostId', JSON.stringify(postId))
        history.push("/posts/comments")
    }

    const PostsContent = () => {
        if (posts.length === 0) {
            return (
                <div id="noPostsContainer" className="d-flex">
                    <div className="align-self-center mx-auto">
                        <h1 id="noPostsInfo">No posts to show!</h1>
                    </div>
                </div>
            )
        }
        else {
            return posts.map(post =>
                <div className="col-lg-3 m-5" key={post.id}>
                    <div id={"post" + post.id} className="card border-dark">
                        <h5 className="card-header bg-dark text-light">
                            {post.title}
                        </h5>
                        <div className="card-body bg-light pb-0">
                            <div className="card-text">{post.body}</div>
                            <hr />
                        </div>
                        <div className="d-flex bg-light">
                            <button id={"postBtn" + post.id} className="btn btn-dark mb-3 mx-auto" onClick={() => ShowCommentsHandler(post.id)}>
                                Show Comments
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div id="postsContainer">
            <div data-align="center" className="row justify-content-around mx-0 w-100">
                {PostsContent()}
            </div>
        </div>
    )
}