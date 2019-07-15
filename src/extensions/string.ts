interface String {
	appendWithDelimiter(appendage: string, delimiter?: string): string
}

String.prototype.appendWithDelimiter = function(appendage: string, delimiter: string = " "): string {
	return this + delimiter + appendage
}