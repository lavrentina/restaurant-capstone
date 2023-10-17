const Hamburger = ({ isOpen }) => {
	return (
		<>
			<div className="burger bar1"></div>
			<div className="burger bar2"></div>
			<div className="burger bar3"></div>

			<style jsx="true">
				{`
					.bar1 {
						transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
					}
					.bar2 {
						transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
						opacity: ${isOpen ? 0 : 1};
					}
					.bar3 {
						transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
					}
				`}
			</style>
		</>
	);
};

export default Hamburger;
