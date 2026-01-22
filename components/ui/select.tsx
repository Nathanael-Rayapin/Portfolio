interface IOptions {
	value: string;
	label: string;
}

interface ISelectProps {
	currentLang: string;
	handleLanguageChange: (newLang: string) => void;
}

const options: IOptions[] = [
	{ value: 'fr', label: 'Français' },
	{ value: 'en', label: 'English' },
];

export default function Select({ currentLang, handleLanguageChange }: ISelectProps) {

	const handleChange = (newLocale: string): void => {
		if (newLocale === currentLang) return;
		handleLanguageChange(newLocale);
	};

	return (
		<div className="select-container">
			<select
				className="select"
				value={currentLang}
				onChange={(e) => handleChange(e.target.value)}
			>
				{options.map((option) => (
					<option
						className='text-muted-foreground'
						key={option.value}
						value={option.value}
						style={{
							color: option.value === currentLang ? 'black' : 'var(--muted-foreground)',
							fontWeight: '500',
						}}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}
