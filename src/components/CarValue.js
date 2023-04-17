import { useSelector } from "react-redux";

function CarValue() {
	const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
		const fileteredData = data.filter((car) =>
			car.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		return fileteredData.reduce((acc, car) => {
			return acc + car.cost;
		}, 0);
	});
	return <div className='car-value'>Total Cost: ${totalCost}</div>;
}

export default CarValue;
