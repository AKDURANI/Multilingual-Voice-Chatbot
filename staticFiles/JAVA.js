document.getElementById("uploadButton").onclick = () => {
  let fileElement = document.getElementById('fileInput')

  // check if user had selected a file
  if (fileElement.files.length === 0) {
    alert('please choose a file')
    return
  }

  let file = fileElement.files[0]

  let formData = new FormData();
  formData.set('file', file);

  axios.post("http://localhost:3001/upload-single-file", formData, {
    onUploadProgress: progressEvent => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log(`upload process: ${percentCompleted}%`);
    }
  })
    .then(res => {
      console.log(res.data)
      console.log(res.data.url)
    })
}
