import axios from 'axios'
import { useEffect, useState } from 'react'
import './Photos.css'

interface Photo {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export default function Photos() {
    const [photos, setPhotos] = useState<Photo[]>([])

    useEffect(() => {
        const albumId: number = JSON.parse(localStorage.getItem('blogAppAlbumId') as string)
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => setPhotos(response.data))
            .catch(() => alert("Sorry! Some internal error occurred!"))
        localStorage.setItem('blogAppPostId', JSON.stringify(null))
    }, [])

    const PhotosContent = () => {
        if (photos.length === 0) {
            return (
                <div id="noPhotosContainer" className="d-flex">
                    <div className="align-self-center mx-auto">
                        <h1 id="noPhotosInfo">No photos to show!</h1>
                    </div>
                </div>
            )
        }
        else {
            return photos.map(photo =>
                <div className="col-lg-3 m-5" key={photo.id}>
                    <div id={"photo" + photo.id} className="card border-dark">
                        <img src={photo.url} className="card-img-top" alt="Sample" />
                        <div className="card-footer text-center">
                            {photo.title}
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div id="photosContainer">
            <div data-align="center" className="row justify-content-around mx-0 w-100">
                {PhotosContent()}
            </div>
        </div>
    )
}