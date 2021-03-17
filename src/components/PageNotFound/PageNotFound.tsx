import errorimage from './404image.png'
import './PageNotFound.css'

export default function PageNotFound() {
    return (
        <div id="notFoundContainer" className="mx-auto d-flex">
            <img id="notFoundImage" className="pt-5" src={errorimage} alt="404" />
        </div>
    )
}