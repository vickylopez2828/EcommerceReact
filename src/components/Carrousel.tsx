import { useState } from "react";
import image1 from '/images/slider1.jpg';
import image3 from '/images/slider3.jpg';
import image2 from '/images/slider2.jpg';

const Carrousel = () => {
    const images = [image1, image2, image3]
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const goToImage = (idx: number) =>{
        setSelectedImage(images[idx]); 
        setSelectedIndex(idx)
    }
    //console.log(previous, next)
    return (
        <>
            <div className="container-slider">
                <img src={selectedImage} alt="img-slider" />
            </div>
            <div className="container-btn df">
                {
                    images.map((_, idx)=>(
                        <button key={idx} 
                                onClick={()=>goToImage(idx)} 
                                className={`btn-slider ${idx === selectedIndex ? "selected" : ""}`}>
                        </button>
                    ))
                }
            </div>
            
        </>
    )
}   

export default Carrousel
//const selectNewImage = (index: number, images: string[], next: boolean = true ) =>{
    //     setTimeout(() =>{
    //         const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
    //         const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 :  images.length - 1;
    //         setSelectedImage(images[nextIndex]);
    //         setSelectedIndex(nextIndex);
    //     }, 500)
        
    // }
