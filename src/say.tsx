import { Component, Fragment, ReactNode, useEffect, useState } from 'react';

interface Props {}

const Say = (props: Props) => {
	const [name, setName] = useState('');

	let talk = 'hi';

	const updateName = (say: string) => {
		setName('Jude');
		let talk = say;
	};

	return (
		<Fragment>
			<p>{name}</p>
			<button>Update</button>
		</Fragment>
	);
};

export default Say;
