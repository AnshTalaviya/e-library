import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://elibrarymanager.com/Images/eLibraryLogo.jpg" alt=''/>
                <img src="https://i0.wp.com/www.ihh-elibrary.com/wp-content/uploads/2021/02/unnamed-1.jpg?fit=512%2C292&ssl=1" alt=''/>
                <img src="https://awsstandardslibrary.com/images/product_image.png" alt=''/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5yN6WRPzkJ8Sj7x8Wjirb23kyRL86Ov4E3OiMQKKjqzbkRK0d11BiDrEjK9FAzOSkDE&usqp=CAU" alt=''/>
                <img src="https://guardian.ng/wp-content/uploads/2018/08/elibrary.jpg" alt=''/>
                <img src="https://www.belmont.wa.gov.au/belmontwebsite/media/media/Discover/Places%20to%20Go/Ruth%20Faulkner%20Library%20and%20Belmont%20Museum/Your%20Library/Your%20eLibrary/eLibrary-books-on-a-mobile-device.jpg?ext=.jpg" alt=''/>
                <img src="https://www.shutterstock.com/image-photo/elibrary-concept-person-use-laptop-260nw-2413785299.jpg" alt=''/>
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/2/BH/FO/LT/81579641/digital-library-services-offline-elibrary-500x500.jpeg" alt=''/>
                <img src="https://st3.depositphotos.com/16285388/19004/i/450/depositphotos_190043874-stock-photo-white-girl-sitting-bookshelves-library.jpg" alt=''/>
                <img src="https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery