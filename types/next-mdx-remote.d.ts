declare module "next-mdx-remote/rsc" {
	export interface MDXRemoteProps {
		source: string;
		components?: Record<string, React.ComponentType<any>>;
	}

	export function MDXRemote(props: MDXRemoteProps): JSX.Element;
}
