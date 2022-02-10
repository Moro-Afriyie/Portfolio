import * as React from 'react';
import Image from 'next/image';
import profilePic from '../public/profile.jpg';

const Navbar: React.FunctionComponent = () => {
	return (
		<div className="flex flex-col items-center">
			<h1 className="font- text-2xl text-center font-bold pt-4 capitalize">
				<a href="#" className="">
					Moro owusu Afriyie
				</a>
			</h1>
			<div className="navbar-menu py-6 px-4 w-full flex col gap-3 items-center">
				<div className="profile-section w-full flex flex-col gap-3 items-center">
					<Image
						src={profilePic}
						alt="profile picture"
						width={160}
						height={160}
						className="profile-image rounded-full object-cover"
					/>
					<div className="bio text-sm text-center">
						Hi, my name is Moro Owusu Afriyie and I&apos;m a fullStack developer👩‍💻. Welcome to my
						personal website😊!
					</div>
					<ul className="social-list py-2 mx-auto flex gap-4">
						<li className="list-item">
							<a href="#">
								<i className="fa fa-twitter" aria-hidden="true"></i>
							</a>
						</li>
						<li className="list-item">
							<a href="#">
								<i className="fa fa-linkedin" aria-hidden="true"></i>
							</a>
						</li>
						<li className="list-item">
							<a href="#">
								<i className="fa fa-github" aria-hidden="true"></i>
							</a>
						</li>
						<li className="list-item">
							<a href="#">
								<i className="fa fa-stack-overflow" aria-hidden="true"></i>
							</a>
						</li>
					</ul>
					<hr className=" h-px w-full border-white opacity-25" />
				</div>
				<div className="navbar-nav"></div>
			</div>
		</div>
	);
};

export default Navbar;
