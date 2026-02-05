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
import img11 from '/assets/about/gallery/img11.jpeg'
import img12 from '/assets/about/gallery/img12.jpeg'
import img13 from '/assets/about/gallery/img13.jpeg'
import img14 from '/assets/about/gallery/img14.jpeg'
import img15 from '/assets/about/gallery/img15.jpeg'
import img16 from '/assets/about/gallery/img16.jpeg'
import img17 from '/assets/about/gallery/img17.jpeg'
import img18 from '/assets/about/gallery/img18.jpeg'
import img19 from '/assets/about/gallery/img19.jpeg'
import img20 from '/assets/about/gallery/img20.jpeg'
import img21 from '/assets/about/gallery/img21.jpeg'
import img22 from '/assets/about/gallery/img22.jpeg'
import img23 from '/assets/about/gallery/img23.jpeg'
import img24 from '/assets/about/gallery/img24.jpeg'
import img25 from '/assets/about/gallery/img25.jpeg'
import img26 from '/assets/about/gallery/img26.jpeg'
import img27 from '/assets/about/gallery/img27.jpeg'
import img28 from '/assets/about/gallery/img28.jpeg'
import img29 from '/assets/about/gallery/img29.jpeg'
import img30 from '/assets/about/gallery/img30.jpeg'


export const Gallery = (): React.ReactNode => {

    const collections = [
        img1, img30, img3, img24, img5, img13, img14, img8, img25, img10, 
        img22, img12, img7, img6, img27, img17, img16, img18, img19, img20,
        img21, img11, img23, img15, img9, img4, img26, img28, img29, img2
    ];

    return <div className="gallery">
        <h1>Gallery</h1>
        <div className="collections">
            {collections.map((item, index) => {
                return <div key={`collections--${index}`} className='img-container'>
                    <img src={item} />
                </div>
            })}
        </div>
    </div>
}