import styled from "styled-components";
import { useState } from "react";

import Upload from "rc-upload";
import { Line } from "rc-progress";

const TelevPhotos = () => {

    const [imgData, setImgdata] = useState();
    const [fileName, setFileName] = useState();
    const [fileSize, setFileSize] = useState();
    const [percentage, setPercentage] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const props = {
        action: "https://httpbin.org/post",
        accept: ".png, .jpg, .jpeg",
        beforeUpload(file) {
            // Start upload
            setIsUploading(true);
            // Set file details
            setFileName(file.name);
            setFileSize(Math.floor(file.size / 1000));
            // Display image for .png format
            if (file.type === "image/png" || file.type === "image/jpg") {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgdata(reader.result);
            };
            reader.readAsDataURL(file);
            }
        },
        onSuccess() {
            // Finish upload
            setIsUploading(false);
        },
        onProgress(step) {
            // Update progress
            setPercentage(Math.round(step.percent));
        },
        onError(err) {
            console.log("onError", err);
        }
    };

    return (
        <Wrapper>
            {/* <div>Instructions</div>
            <input type="file" multiple />
             */}
            <Upload {...props}>
                <div>Téléverser</div>
            </Upload>
            <Line
                percent={percentage}
                strokeWidth={9}
                trailWidth={9}
                trailColor="#FFF"
                strokeColor={isUploading ? "#41C3D2" : "#92ed14"}
            />
            {
                imgData &&
                <div>
                    <img src={imgData} alt="uploaded" width="250" />
                </div>
            }
            <div>{isUploading ? `Téléversement : ${percentage} %` : "Terminé"}</div>
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default TelevPhotos;