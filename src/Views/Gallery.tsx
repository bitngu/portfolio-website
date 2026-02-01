import '../styles/Gallery.scss'
import img1 from '/assets/about/gallery/img1.jpeg'
import img2 from '/assets/about/gallery/img2.jpeg'
import img3 from '/assets/about/gallery/img3.jpeg'
import img4 from '/assets/about/gallery/img4.jpeg'
import img5 from '/assets/about/gallery/img5.jpeg'
import img6 from '/assets/about/gallery/img6.jpeg'
import img7 from '/assets/about/gallery/img7.jpeg'
import img8 from '/assets/about/gallery/img8.jpeg'
import img9 from '/assets/about/gallery/img9.jpeg'
import img10 from '/assets/about/gallery/img10.jpeg'


export const Gallery = (): React.ReactNode => {

    const collections = [img1, img2, img3, img4, img5, img7, img6, img8, img9, img10]
    return <div className="gallery">
        <h1>Gallery</h1>
        <div className="collections">
            {collections.map(item => {
                return <div className='img-container'>
                    <img src={item} />
                </div>
            })}
        </div>
    </div>
}