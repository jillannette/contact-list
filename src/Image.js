import React, { useState } from 'react'

//pass in URL not just a jpeg

const Image = () => {
    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };
}

        //             return (
        //         <>
        //         <div>
        //             <input type="text" onChange={onImageChange} />
        //             <img
        //             src={img} alt="" />
        //             <div/>
        //        <div/>
        //        </>
        //     )
        // }

   

export default Image
