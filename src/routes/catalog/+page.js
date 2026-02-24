export async function load() {
	const allFiles = import.meta.glob('/src/lib/data/catalog/*.json');
	const fileArray = Object.entries(allFiles);

	const products = await Promise.all(
		fileArray.map(async ([path, resolver]) => {
			const data = await resolver();
			return {
				...data.default,
				slug: path.split('/').pop().replace('.json', '')
			};
		})
	);

	return {
		products
	};
}
