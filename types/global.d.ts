import React from "react";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: any;
		}
	}

	interface Window {
		[key: string]: any;
	}
}
