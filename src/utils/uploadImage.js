const uploadImage = async (files, url, folder, setLoading, setImage) => {
    // const files = e.target.files;

    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', folder);

    setLoading(true);

    const res = await fetch(url, {
        method: 'POST',
        body: data
    });

    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);

}

export default uploadImage;