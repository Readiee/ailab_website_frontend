export default function useFileFormat (fileName:string) {
	const parts = fileName.split('.')
	const fileFormat = parts.length > 1 ? parts.pop() : ''
	return fileFormat
}
