import React from "react";

const Title = ({ title, color }: { title?: string; color?: string }) => {
	return (
		<div className="title lg:max-w-[640px] xl:max-w-[1188px]">
			<span
				className={`text-5xl lg:text-[68px]  3xl:text-8xl text-${color} lg:leading-[5rem]`}
			>
				{title?.split("<br/>").map((text, index) => (
					<React.Fragment key={index}>
						{text}
						{index !== title.split("<br/>").length - 1 && <br />}
					</React.Fragment>
				))}
			</span>
		</div>
	);
};

export default Title;
