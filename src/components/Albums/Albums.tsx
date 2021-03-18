import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './Albums.css'

interface Album {
    userId: number,
    id: number,
    title: string
}

export default function Albums() {
    const [albums, setAlbums] = useState<Album[]>([])
    const history = useHistory()

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('blogAppUser') as string).id
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => setAlbums(response.data))
            .catch(() => alert("Sorry! Some internal error occurred!"))
        localStorage.setItem('blogAppPostId', JSON.stringify(null))
        localStorage.setItem('blogAppAlbumId', JSON.stringify(null))
    }, [])

    const ShowPhotosHandler = (albumId: number) => {
        localStorage.setItem('blogAppAlbumId', JSON.stringify(albumId))
        history.push("/albums/photos")
    }

    const AlbumsContent = () => {
        if (albums.length === 0) {
            return (
                <div id="noAlbumsContainer" className="d-flex">
                    <div className="align-self-center mx-auto">
                        <h1 id="noAlbumsInfo">No albums to show!</h1>
                    </div>
                </div>
            )
        }
        else {
            return albums.map(album =>
                <div className="col-lg-3 m-5" key={album.id}>
                    <div id={"album" + album.id} className="card border-dark">
                        <h5 className="card-header bg-dark text-light">
                            {album.title}
                        </h5>
                        <div className="card-body d-flex">
                            <button id={"albumBtn" + album.id} className="btn btn-dark mx-auto" onClick={() => ShowPhotosHandler(album.id)}>
                                Show Photos
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div id="albumsContainer">
            <div data-align="center" className="row justify-content-around mx-0 w-100">
                {AlbumsContent()}
            </div>
        </div>
    )
}