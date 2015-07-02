BoxParser.SingleItemTypeReferenceBoxLarge = function(type, size, hdr_size, start, fileStart) {
	BoxParser.Box.call(this, type, size);
	this.hdr_size = hdr_size;
	this.start = start;
	this.fileStart = fileStart;
}
BoxParser.SingleItemTypeReferenceBoxLarge.prototype = new BoxParser.Box();
BoxParser.SingleItemTypeReferenceBoxLarge.prototype.parse = function(stream) {
	this.from_item_ID = stream.readUint32();
	var count =  stream.readUint16();
	this.references = [];
	for(var i = 0; i < count; i++) {
		this.references[i] = stream.readUint32();
	}
}

