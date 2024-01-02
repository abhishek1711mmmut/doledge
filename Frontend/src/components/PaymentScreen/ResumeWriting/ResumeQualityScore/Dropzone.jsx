import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import uploadImage from '../../../../images/uploadIcon.png'
import { Link } from 'react-router-dom'

export function MyDropzone() {

    const [selectedFile, setSelectedFile] = useState(null)

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      setSelectedFile(file)
      console.log(file)
    }
  }
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: '.pdf, .doc, .docx',
    maxSize:'2097152',
    onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p className='text-sm font-medium'>Drop the files here ...</p> :
          <div>
            <img src={uploadImage} alt="" width={79} height={73} className='mx-auto mt-3 lg:mt-0'/>
            <p className='text-xs lg:text-sm font-medium'>Drag & Drop your Resume here</p>
            <p className='text-sm text-[##414c5f]'>or <span className='font-medium text-[#4a90e2]'><Link>Browse</Link></span> to choose file</p>
            <p className='text-xs text-[#536777]'>pdf, doc, docx - 2MB max file we support</p>
            <p className='text-[#536777] text-xs py-6'>OR</p>
            <button className='bg-[#4a90e2] text-white rounded border border-[#979797] text-sm px-2 py-1 lg:text-lg lg:px-4 lg:py-2 '>
                Fetch from Doledge Account
            </button>
            <p className='text-xs text-[#536777] py-3'>
                By checking my CV Score I authorize Naukri to call/SMS me regarding Naukri Paid services
            </p>
          </div>
          
      }
      
    </div>
  )
}