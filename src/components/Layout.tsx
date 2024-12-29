import { ReactNode } from "react";

interface ILayoutProps {
	children: ReactNode;
}
export default function Layout({ children }: ILayoutProps) {
	return (
		<>
			<div
				className={`bg-[#AEC1FF] min-h-screen flex items-center justify-center w-full overflow-hidden`}
			>
				<div className="rounded-[14px] lg:rounded-[28px] m-2 md:m-4 h-[calc(100vh-16px)] lg:h-[calc(100vh-36px)]  w-full overflow-hidden">
					<div
						className={`flex flex-col items-center justify-center w-full h-full bg-europe-dark-bleu`}
					>
						{children}
					</div>
				</div>
			</div>
		</>
	);
}
