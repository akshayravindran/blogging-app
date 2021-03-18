import axios from 'axios'
import { useEffect, useState } from 'react'
import './Comments.css'

interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export default function Comments() {
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        const postId: number = JSON.parse(localStorage.getItem('blogAppPostId') as string)
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => setComments(response.data))
            .catch(() => alert("Sorry! Some internal error occurred!"))
        localStorage.setItem('blogAppAlbumId', JSON.stringify(null))
    }, [])

    const CommentsContent = () => {
        if (comments.length === 0) {
            return (
                <div id="noCommentsContainer" className="d-flex">
                    <div className="align-self-center mx-auto">
                        <h1 id="noCommentsInfo">No comments to show!</h1>
                    </div>
                </div>
            )
        }
        else {
            return comments.map(comment =>
                <div id={"comment" + comment.id} className="card border-dark p-0 m-4">
                    <div className="card-body">
                        <h5 className="card-title">{comment.name}</h5>
                        <div className="card-text">{comment.body}</div>
                    </div>
                    <div className="card-footer text-muted text-end">
                        {comment.email}
                    </div>
                </div>
            )
        }
    }

    return (
        <div id="commentsContainer">
            {CommentsContent()}
        </div>
    )
}