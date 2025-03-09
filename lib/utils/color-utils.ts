/**
 * 将RGB颜色转换为HSL颜色
 * @param r - 红色通道值 (0-255)
 * @param g - 绿色通道值 (0-255)
 * @param b - 蓝色通道值 (0-255)
 * @returns HSL颜色值 [h, s, l] (h: 0-360, s: 0-100, l: 0-100)
 */
export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
	r /= 255;
	g /= 255;
	b /= 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (max !== min) {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}

		h /= 6;
	}

	return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

/**
 * 将HSL颜色转换为RGB颜色
 * @param h - 色相 (0-360)
 * @param s - 饱和度 (0-100)
 * @param l - 亮度 (0-100)
 * @returns RGB颜色值 [r, g, b] (0-255)
 */
export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
	h /= 360;
	s /= 100;
	l /= 100;

	let r, g, b;

	if (s === 0) {
		r = g = b = l;
	} else {
		const hue2rgb = (p: number, q: number, t: number) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;

		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/**
 * 将RGB颜色转换为十六进制颜色
 * @param r - 红色通道值 (0-255)
 * @param g - 绿色通道值 (0-255)
 * @param b - 蓝色通道值 (0-255)
 * @returns 十六进制颜色值 (例如: #FF0000)
 */
export function rgbToHex(r: number, g: number, b: number): string {
	return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
}

/**
 * 将十六进制颜色转换为RGB颜色
 * @param hex - 十六进制颜色值 (例如: #FF0000)
 * @returns RGB颜色值 [r, g, b] (0-255)
 */
export function hexToRgb(hex: string): [number, number, number] | null {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}

/**
 * 生成互补色
 * @param r - 红色通道值 (0-255)
 * @param g - 绿色通道值 (0-255)
 * @param b - 蓝色通道值 (0-255)
 * @returns 互补色的RGB值 [r, g, b] (0-255)
 */
export function getComplementaryColor(r: number, g: number, b: number): [number, number, number] {
	const [h, s, l] = rgbToHsl(r, g, b);
	const newHue = (h + 180) % 360;
	return hslToRgb(newHue, s, l);
}

/**
 * 生成类似色
 * @param r - 红色通道值 (0-255)
 * @param g - 绿色通道值 (0-255)
 * @param b - 蓝色通道值 (0-255)
 * @param count - 需要生成的类似色数量
 * @param angle - 色相角度差异
 * @returns 类似色的RGB值数组 [[r, g, b], ...]
 */
export function getAnalogousColors(r: number, g: number, b: number, count: number = 2, angle: number = 30): Array<[number, number, number]> {
	const [h, s, l] = rgbToHsl(r, g, b);
	const colors: Array<[number, number, number]> = [];

	for (let i = 1; i <= count; i++) {
		const newHue = (h + angle * i) % 360;
		colors.push(hslToRgb(newHue, s, l));
	}

	for (let i = 1; i <= count; i++) {
		const newHue = (h - angle * i + 360) % 360;
		colors.unshift(hslToRgb(newHue, s, l));
	}

	return colors;
}
