function base64ToBytes(base64: string) {
	const binString = atob(base64);
	return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes: Uint8Array) {
	const binString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join('');
	return btoa(binString);
}

function toBinary(inputString: string) {
	return bytesToBase64(new TextEncoder().encode(inputString));
}

function fromBinary(inputBase64: string) {
	return new TextDecoder().decode(base64ToBytes(inputBase64));
}

export { toBinary, fromBinary };
