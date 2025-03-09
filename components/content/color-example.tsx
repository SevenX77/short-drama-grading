"use client";

import { useState } from "react";
import { hexToRgb, rgbToHsl, getComplementaryColor, getAnalogousColors } from "@/lib/utils/color-utils";

interface ColorProps {
	color: string;
}

export function ColorWheel() {
	return (
		<div className="my-6 flex flex-col items-center">
			<div className="relative w-64 h-64 rounded-full overflow-hidden">
				<div
					className="absolute inset-0"
					style={{
						background: "conic-gradient(from 0deg, #FF0000, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF00FF, #FF0000)",
					}}
				></div>
			</div>
			<p className="mt-2 text-sm text-center text-muted-foreground">色相环展示了色彩在360度色环上的分布</p>
		</div>
	);
}

export function SaturationScale({ color }: ColorProps) {
	const rgb = hexToRgb(color) || [255, 0, 0];
	const [h, , l] = rgbToHsl(...rgb);

	return (
		<div className="my-6">
			<div className="h-12 w-full rounded-md overflow-hidden flex">
				{Array.from({ length: 10 }).map((_, i) => {
					const s = i * 10 + 5;
					return (
						<div
							key={i}
							className="flex-1 h-full"
							style={{
								backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
							}}
						/>
					);
				})}
			</div>
			<div className="flex justify-between mt-1 text-xs text-muted-foreground">
				<span>低饱和度</span>
				<span>高饱和度</span>
			</div>
		</div>
	);
}

export function BrightnessScale({ color }: ColorProps) {
	const rgb = hexToRgb(color) || [255, 0, 0];
	const [h, s] = rgbToHsl(...rgb);

	return (
		<div className="my-6">
			<div className="h-12 w-full rounded-md overflow-hidden flex">
				{Array.from({ length: 10 }).map((_, i) => {
					const l = 100 - i * 10 - 5;
					return (
						<div
							key={i}
							className="flex-1 h-full"
							style={{
								backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
							}}
						/>
					);
				})}
			</div>
			<div className="flex justify-between mt-1 text-xs text-muted-foreground">
				<span>高亮度</span>
				<span>低亮度</span>
			</div>
		</div>
	);
}

export function ComplementaryColors({ color }: ColorProps) {
	const rgb = hexToRgb(color) || [52, 152, 219];
	const complementary = getComplementaryColor(...rgb);
	const [h1, s1, l1] = rgbToHsl(...rgb);
	const [h2, s2, l2] = rgbToHsl(...complementary);

	return (
		<div className="my-6">
			<div className="flex space-x-4">
				<ColorSwatch h={h1} s={s1} l={l1} label={`HSL(${h1}, ${s1}%, ${l1}%)`} />
				<ColorSwatch h={h2} s={s2} l={l2} label={`HSL(${h2}, ${s2}%, ${l2}%)`} />
			</div>
			<p className="mt-2 text-sm text-center text-muted-foreground">互补色位于色环的对面，相差180度</p>
		</div>
	);
}

export function AnalogousColors({ color }: ColorProps) {
	const rgb = hexToRgb(color) || [52, 152, 219];
	const [h, s, l] = rgbToHsl(...rgb);

	return (
		<div className="my-6">
			<div className="flex space-x-2">
				<ColorSwatch h={(h - 30 + 360) % 360} s={s} l={l} />
				<ColorSwatch h={h} s={s} l={l} />
				<ColorSwatch h={(h + 30) % 360} s={s} l={l} />
			</div>
			<p className="mt-2 text-sm text-center text-muted-foreground">类似色在色环上相邻，通常相差30度</p>
		</div>
	);
}

export function TriadicColors({ color }: ColorProps) {
	const rgb = hexToRgb(color) || [52, 152, 219];
	const [h, s, l] = rgbToHsl(...rgb);

	return (
		<div className="my-6">
			<div className="flex space-x-2">
				<ColorSwatch h={h} s={s} l={l} />
				<ColorSwatch h={(h + 120) % 360} s={s} l={l} />
				<ColorSwatch h={(h + 240) % 360} s={s} l={l} />
			</div>
			<p className="mt-2 text-sm text-center text-muted-foreground">三分色在色环上均匀分布，相差120度</p>
		</div>
	);
}

function ColorSwatch({ h, s, l, label }: { h: number; s: number; l: number; label?: string }) {
	return (
		<div className="flex-1">
			<div className="h-16 w-full rounded-md" style={{ backgroundColor: `hsl(${h}, ${s}%, ${l}%)` }}></div>
			{label && <p className="mt-1 text-xs text-center text-muted-foreground">{label}</p>}
		</div>
	);
}
