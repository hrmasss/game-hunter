const getCroppedImageUrl = (url: string) => {
	if (!url)
		return "https://dummyimage.com/600x400/f5f5f5/aaaaaa?text=%E2%80%93%20Image%20%E2%80%93";
	const target = "media/";
	const targetEndIndex = url.indexOf(target) + target.length;
	return (
		url.slice(0, targetEndIndex) + "crop/600/400/" + url.slice(targetEndIndex)
	);
};

export default getCroppedImageUrl;
