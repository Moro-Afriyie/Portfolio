import * as React from 'react';
import Navbar from './Navbar';

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
	return (
		<div className="h-screen flex">
			<header className="header h-full overflow-y-auto w-[17.5rem]">
				<Navbar />
			</header>
			{/* <aside className="sidebar h-full  border-red-900  overflow-y-auto w-[17.5rem]">
				<Sidebar />
			</aside> */}
			<main className="main h-full flex-1 overflow-y-auto">{children}</main>
		</div>
	);
};

export default Layout;
