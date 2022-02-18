import { Text } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";

export interface UploadableFile{
    file: File;
    errors: FileError[];
}


export function MultiFileUploadField(){
    const [files, setFiles] = useState<UploadableFile[]>([]);
    const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
        const mappedAcc = accFiles.map(file => ({ file, errors: [] }));
        setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Text color='white' align={'center'} fontSize="4xl">Drag and Drop Files Here! <br/></Text>
            {/* <Text color='white' align={'center'} fontSize="sm">{JSON.stringify(files)}<br/></Text> */}
        </div>
        // {files.map(fileWrapper => ())}
    );
}
