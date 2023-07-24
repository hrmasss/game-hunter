const getCroppedImageUrl = (url: string) => {
	const target = "media/";
	const targetEndIndex = url.indexOf(target) + target.length;
	return (
		url.slice(0, targetEndIndex) + "crop/600/400/" + url.slice(targetEndIndex)
	);
};

export default getCroppedImageUrl;
