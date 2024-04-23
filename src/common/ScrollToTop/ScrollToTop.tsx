import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
	const { pathname } = useLocation();

	const [isItFaqPage, setIsItFaqPage] = useState(false);

	useEffect(() => {
		if (!isItFaqPage) {
			window.scrollTo(0, 0);
		}
		if (pathname.includes('/knowledge_base')) {
			setIsItFaqPage(true);
		} else {
			setIsItFaqPage(false);
		}
	}, [pathname, isItFaqPage]);

	return null;
}
