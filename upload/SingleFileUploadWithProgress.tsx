import { useEffect } from "react"

export interface SingleFileUploadWithProgressProps {
    file: File;
}

export function SingleFileUploadWithProgress({file} : SingleFileUploadWithProgressProps){
    useEffect(()=>{
        async function upload(){
            const url = await uploadFile(file, ()=>{});
        }
        upload()
    })

    return <div>SFU</div>
}

function uploadFile(file: File, onProgress: (percentage: number) => void){
    return new Promise((res, rej)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'url');

        xhr.onload = () => {
            res('url - where file is uploaded')
        }
        xhr.onerror = (evt) => rej(evt);
        xhr.upload.onprogress = (event) => {
            if(event.lengthComputable){
                const percentage = event.loaded/event.total * 100;
                onProgress(Math.round(percentage));
            }
        }
        const formData = new FormData();
        formData.append('file', file);
        formData.append('key', 'key');
        xhr.send(formData);
    })
}