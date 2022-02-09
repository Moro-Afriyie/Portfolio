import * as React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
	return (
		<div>
			<Navbar />
			<div className="sidebar">
				<Sidebar />
			</div>
			<main className="body">{children}</main>
		</div>
	);
};

export default Layout;
