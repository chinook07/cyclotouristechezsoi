// // import styled from "styled-components";
// import { useState } from "react";
// import { create, FilePond, registerPlugin } from 'react-filepond';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond/dist/filepond.min.css';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// registerPlugin(FilePondPluginImagePreview);

// const TelevPhotos = () => {

//     const [photos, setPhotos] = useState([])

//     const handle = (e) => {
//         console.log(e);
//         setPhotos(photos)
//     }

//     return (
//         <FilePond
//             allowMultiple={true}
//             files={photos}
//             onupdatefiles={handle}
//             name="photo"
//             labelIdle="Glissez vos fichiers ici ou <span class='filepond--label-action'>parcourir</span>"
//         ></FilePond>
//     )
// }

// // const Wrapper = styled.div``

// export default TelevPhotos;